import { Clock, FileUp, Users, Video } from 'lucide-react';
import { PageHeader, Progress } from '@/components/panel/ui';
import { teacherClasses } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function TeacherClasses() {
  return (
    <>
      <PageHeader title="کلاس‌های من" desc="مدیریت جلسات، حضور و غیاب و منابع هر کلاس" action={<button className="btn-primary">درخواست کلاس جدید</button>} />
      <div className="grid gap-6 lg:grid-cols-2">
        {teacherClasses.map((c) => (
          <div key={c.id} className="card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-bold text-slate-900">{c.title}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500"><Clock size={15} /> {c.time}</p>
              </div>
              <span className="badge bg-brand-50 text-brand-700">سطح {c.level}</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">زبان‌آموز</p><p className="mt-1 font-extrabold text-slate-900">{fa(c.students)}</p></div>
              <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">پیشرفت</p><p className="mt-1 font-extrabold text-slate-900">{fa(c.progress)}٪</p></div>
              <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">جلسه بعد</p><p className="mt-1 text-sm font-extrabold text-slate-900">{c.next}</p></div>
            </div>
            <Progress value={c.progress} className="mt-5" />
            <div className="mt-6 flex flex-wrap gap-2">
              <button className="btn-gradient flex-1"><Video size={16} /> شروع کلاس</button>
              <button className="btn-ghost"><Users size={16} /> حضور و غیاب</button>
              <button className="btn-ghost"><FileUp size={16} /> منابع</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
