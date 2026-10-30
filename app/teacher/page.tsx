import Link from 'next/link';
import { ArrowLeft, CalendarDays, ClipboardCheck, Star, Users, Video } from 'lucide-react';
import { Avatar, Panel, Progress, StatCard, StatusBadge } from '@/components/panel/ui';
import { submissions, teacher, teacherClasses, teacherStudents } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function TeacherDashboard() {
  const today = teacherClasses[0];
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-8">
        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-brand-200">روز بخیر، {teacher.name} 🌤️</p>
            <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">امروز ۲ کلاس و ۳ تکلیف برای تصحیح داری</h1>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur md:min-w-72">
            <p className="text-xs text-brand-200">کلاس بعدی، {today.next}</p>
            <p className="mt-1 font-bold">{today.title}</p>
            <button className="btn mt-3 w-full bg-white text-brand-700 hover:bg-brand-50"><Video size={16} /> شروع کلاس</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Users} label="زبان‌آموزان فعال" value={fa(33)} tone="brand" />
        <StatCard icon={CalendarDays} label="کلاس‌های این هفته" value={fa(7)} tone="sky" />
        <StatCard icon={ClipboardCheck} label="تکالیف در انتظار" value={fa(submissions.length)} tone="amber" />
        <StatCard icon={Star} label="امتیاز رضایت" value="۴٫۹" tone="emerald" trend="+۰٫۱" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="کلاس‌های من" className="xl:col-span-2" action={<Link href="/teacher/classes" className="flex items-center gap-1 text-sm font-semibold text-brand-600">همه <ArrowLeft size={16} /></Link>}>
          <div className="grid gap-4 sm:grid-cols-2">
            {teacherClasses.map((c) => (
              <div key={c.id} className="rounded-2xl border border-slate-100 p-4 transition hover:border-brand-200 hover:shadow-card">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-slate-900">{c.title}</p>
                  <span className="badge bg-brand-50 text-brand-700">{c.level}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{c.time}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Users size={14} /> {fa(c.students)} نفر</span>
                  <span>پیشرفت {fa(c.progress)}٪</span>
                </div>
                <Progress value={c.progress} className="mt-2" />
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="تکالیف جدید برای تصحیح">
          <ul className="space-y-3">
            {submissions.map((s) => {
              const st = teacherStudents.find((t) => t.name === s.student)!;
              return (
                <li key={s.title} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <Avatar src={st.photo} name={st.name} size={40} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-800">{s.student}</p>
                    <p className="truncate text-xs text-slate-500" dir="ltr">{s.title}</p>
                  </div>
                  <button className="btn-primary px-3 py-1.5 text-xs">تصحیح</button>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>

      <Panel title="زبان‌آموزانی که نیاز به توجه دارند" action={<Link href="/teacher/students" className="flex items-center gap-1 text-sm font-semibold text-brand-600">همه <ArrowLeft size={16} /></Link>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teacherStudents.slice(2, 5).map((s) => (
            <div key={s.name} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-4">
              <Avatar src={s.photo} name={s.name} size={48} />
              <div className="flex-1">
                <p className="font-bold text-slate-900">{s.name}</p>
                <p className="text-xs text-slate-500">حضور {fa(s.attendance)}٪، میانگین {fa(s.avg)}</p>
              </div>
              <StatusBadge status={s.status} />
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
