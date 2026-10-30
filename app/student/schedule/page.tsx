import { Clock, User, Video } from 'lucide-react';
import { PageHeader } from '@/components/panel/ui';
import { studentSchedule } from '@/lib/data';
import { cn } from '@/lib/utils';

const typeTone: Record<string, string> = {
  'گروهی': 'bg-brand-50 text-brand-700',
  'خصوصی': 'bg-violet-50 text-violet-700',
  'کلاب': 'bg-emerald-50 text-emerald-700',
};

export default function StudentSchedule() {
  return (
    <>
      <PageHeader title="برنامه‌ی کلاس‌ها" desc="کلاس‌های زنده‌ی این هفته" />
      <div className="relative space-y-4 before:absolute before:bottom-4 before:right-[4.5rem] before:top-4 before:hidden before:w-0.5 before:bg-slate-200 sm:before:block">
        {studentSchedule.map((s, i) => (
          <div key={s.title} className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="w-28 shrink-0 text-center sm:text-right">
              <p className="font-bold text-slate-900">{s.day}</p>
              <p className="text-xs text-slate-500">{s.date}</p>
            </div>
            <span className={cn('absolute right-[4.15rem] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full ring-4 ring-slate-50 sm:block', i === 0 ? 'bg-brand-600' : 'bg-slate-300')} />
            <div className={cn('card flex flex-1 flex-col gap-4 p-5 sm:mr-6 sm:flex-row sm:items-center', i === 0 && 'border-brand-200 ring-2 ring-brand-100')}>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-slate-900">{s.title}</p>
                  <span className={cn('badge', typeTone[s.type])}>{s.type}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock size={15} /> {s.time}</span>
                  <span className="flex items-center gap-1.5"><User size={15} /> {s.teacher}</span>
                </div>
              </div>
              <button className={i === 0 ? 'btn-gradient' : 'btn-ghost'}><Video size={16} /> {i === 0 ? 'ورود به کلاس' : 'افزودن به تقویم'}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
