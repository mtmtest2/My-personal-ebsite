import Link from 'next/link';
import { ArrowLeft, BookOpen, CalendarClock, Clock, Flame, Trophy, Video } from 'lucide-react';
import { Panel, Progress, StatCard } from '@/components/panel/ui';
import { assignments, skills, student, studentCourses, studentSchedule, weeklyStudy } from '@/lib/data';
import { cn, fa } from '@/lib/utils';

const days = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

export default function StudentDashboard() {
  const next = studentSchedule[0];
  const maxStudy = Math.max(...weeklyStudy);
  return (
    <div className="space-y-6">
      {/* Welcome + next class */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-8 xl:col-span-2">
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10" />
          <p className="text-sm text-white/80">سلام {student.name.split(' ')[0]} عزیز</p>
          <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">آماده‌ی کلاس امروز هستی؟</h1>
          <p className="mt-3 max-w-lg text-sm leading-7 text-white/90">
            این هفته ۸۰٪ برنامه‌ی مطالعه‌ات را انجام دادی. فقط ۲ تمرین دیگر تا رسیدن به هدف هفتگی مانده!
          </p>
          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link href="/student/schedule" className="btn bg-white text-navy hover:bg-white/90"><Video size={18} /> ورود به کلاس بعدی</Link>
            <Link href="/student/assignments" className="btn border border-white/30 text-white hover:bg-white/10">تکالیف من</Link>
          </div>
        </div>
        <div className="card flex flex-col p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">کلاس بعدی</h2>
            <span className="badge bg-rose-50 text-rose-600"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-500" /> ۲ ساعت دیگر</span>
          </div>
          <p className="mt-5 text-lg font-bold text-slate-900">{next.title}</p>
          <p className="mt-1 text-sm text-slate-500">با {next.teacher}</p>
          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2"><CalendarClock size={16} className="text-brand-500" /> {next.day}، {next.date}</p>
            <p className="flex items-center gap-2"><Clock size={16} className="text-brand-500" /> {next.time}</p>
          </div>
          <button className="btn-primary mt-6 w-full xl:mt-auto">یادآوری برای من</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Flame} tone="rose" label="روزهای پیاپی مطالعه" value={`${fa(student.streak)} روز`} />
        <StatCard icon={Trophy} tone="amber" label="امتیاز کسب‌شده" value={fa(student.xp)} trend="+۱۲۰" />
        <StatCard icon={BookOpen} tone="brand" label="دوره‌های فعال" value={fa(studentCourses.length)} />
        <StatCard icon={Clock} tone="emerald" label="ساعت مطالعه این ماه" value={`${fa(26)} ساعت`} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="دوره‌های در حال یادگیری" className="xl:col-span-2" action={<Link href="/student/courses" className="flex items-center gap-1 text-sm font-semibold text-brand-600">همه <ArrowLeft size={16} /></Link>}>
          <div className="space-y-4">
            {studentCourses.map((c) => (
              <div key={c.id} className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-brand-200">
                <span className={cn('grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white', c.color)}><BookOpen size={22} /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate font-bold text-slate-900">{c.title}</p>
                    <span className="text-sm font-bold text-brand-700">{fa(c.progress)}٪</span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">{c.teacher}، {fa(c.done)} از {fa(c.lessons)} جلسه</p>
                  <Progress value={c.progress} className="mt-2.5" />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="مهارت‌های من">
          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-700" dir="ltr">{s.name}</span>
                  <span className="font-bold text-slate-900">{fa(s.value)}٪</span>
                </div>
                <Progress value={s.value} barClass={s.value < 65 ? 'bg-amber-400' : 'bg-brand-600'} />
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-800">پیشنهاد: مهارت Writing ضعیف‌تر است. شرکت در ورکشاپ رایتینگ این هفته را از دست نده.</p>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="زمان مطالعه‌ی این هفته" action={<span className="text-xs text-slate-500">دقیقه</span>}>
          <div className="flex h-44 items-end gap-3">
            {weeklyStudy.map((v, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="text-[11px] font-bold text-slate-600">{fa(v)}</span>
                <div className={cn('w-full rounded-lg', i === 5 ? 'bg-brand-600' : 'bg-brand-100')} style={{ height: `${(v / maxStudy) * 75}%` }} />
                <span className="text-xs text-slate-500">{days[i]}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="تکالیف پیش رو" action={<Link href="/student/assignments" className="flex items-center gap-1 text-sm font-semibold text-brand-600">همه <ArrowLeft size={16} /></Link>}>
          <ul className="divide-y divide-slate-100">
            {assignments.filter((a) => a.status === 'pending').concat(assignments.slice(2, 3)).map((a) => (
              <li key={a.title} className="flex items-center justify-between gap-3 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-800" dir="ltr">{a.title}</p>
                  <p className="text-xs text-slate-500">{a.course}</p>
                </div>
                <span className={cn('badge', a.status === 'pending' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700')}>{a.due}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
