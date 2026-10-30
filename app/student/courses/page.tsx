import { BookOpen, CalendarClock, PlayCircle, User } from 'lucide-react';
import { PageHeader, Progress } from '@/components/panel/ui';
import { studentCourses } from '@/lib/data';
import { cn, fa } from '@/lib/utils';

export default function StudentCourses() {
  return (
    <>
      <PageHeader title="دوره‌های من" desc="پیشرفت هر دوره و دسترسی به ویدیوی جلسات" action={<button className="btn-primary">ثبت‌نام در دوره‌ی جدید</button>} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {studentCourses.map((c) => (
          <div key={c.id} className="card overflow-hidden">
            <div className={cn('relative h-32 p-5 text-white', c.color)}>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
              <BookOpen size={28} />
              <p className="mt-3 text-lg font-bold">{c.title}</p>
            </div>
            <div className="space-y-4 p-5">
              <div className="space-y-2 text-sm text-slate-600">
                <p className="flex items-center gap-2"><User size={16} className="text-slate-400" /> {c.teacher}</p>
                <p className="flex items-center gap-2"><CalendarClock size={16} className="text-slate-400" /> جلسه‌ی بعد: {c.next}</p>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-xs text-slate-500">
                  <span>{fa(c.done)} از {fa(c.lessons)} جلسه</span>
                  <span className="font-bold text-brand-700">{fa(c.progress)}٪</span>
                </div>
                <Progress value={c.progress} />
              </div>
              <div className="flex gap-2">
                <button className="btn-primary flex-1"><PlayCircle size={16} /> ادامه</button>
                <button className="btn-ghost flex-1">ویدیوی جلسات</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
