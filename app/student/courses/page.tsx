import { CalendarClock, PlayCircle, User } from 'lucide-react';
import { PageHeader, Panel, Progress } from '@/components/panel/ui';
import { studentCourses } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function StudentCourses() {
  return (
    <>
      <PageHeader title="دوره‌های من" desc="پیشرفت هر دوره و دسترسی به ویدیوی جلسات" action={<button type="button" className="btn-primary">ثبت‌نام در دوره‌ی جدید</button>} />
      <Panel title={`${fa(studentCourses.length)} دوره‌ی فعال`}>
        <ul className="divide-y divide-rule">
          {studentCourses.map((c) => (
            <li key={c.id} className="grid gap-5 py-6 first:pt-0 last:pb-0 lg:grid-cols-[1fr_16rem_auto] lg:items-center lg:gap-10">
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-body">
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-muted" aria-hidden /> {c.teacher}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarClock size={16} className="text-muted" aria-hidden /> جلسه‌ی بعد: {c.next}
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-muted">
                    {fa(c.done)} از {fa(c.lessons)} جلسه
                  </span>
                  <span className="num font-semibold text-accent-700">{fa(c.progress)}٪</span>
                </div>
                <Progress value={c.progress} label={`پیشرفت ${c.title}`} />
              </div>
              <div className="flex gap-2">
                <button type="button" className="btn-primary flex-1 lg:flex-none">
                  <PlayCircle size={18} aria-hidden /> ادامه
                </button>
                <button type="button" className="btn-secondary flex-1 lg:flex-none">
                  ویدیوی جلسات
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
