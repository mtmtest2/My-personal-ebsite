import { CalendarPlus, Clock, User, Video } from 'lucide-react';
import { PageHeader } from '@/components/panel/ui';
import Badge, { type BadgeTone } from '@/components/ui/Badge';
import { studentSchedule } from '@/lib/data';
import { cn } from '@/lib/utils';

const typeTone: Record<string, BadgeTone> = {
  'گروهی': 'brand',
  'خصوصی': 'outline',
  'کلاب': 'accent',
};

export default function StudentSchedule() {
  return (
    <>
      <PageHeader title="برنامه‌ی کلاس‌ها" desc="کلاس‌های زنده‌ی این هفته" />
      <ol className="space-y-3">
        {studentSchedule.map((s, i) => (
          <li
            key={s.title}
            className={cn('card grid gap-4 p-5 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-6 sm:p-6', i === 0 && 'border-2 border-brand-600')}
          >
            <div className="flex items-baseline gap-3 sm:block">
              <p className="text-lg font-bold text-ink">{s.day}</p>
              <p className="text-sm text-muted">{s.date}</p>
            </div>
            <div className="min-w-0 sm:border-r sm:border-rule sm:pr-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-bold text-ink">
                  <bdi>{s.title}</bdi>
                </p>
                <Badge tone={typeTone[s.type] ?? 'neutral'}>{s.type}</Badge>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-body">
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-muted" aria-hidden /> {s.time}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} className="text-muted" aria-hidden /> {s.teacher}
                </span>
              </div>
            </div>
            {i === 0 ? (
              <button type="button" className="btn-primary">
                <Video size={18} aria-hidden /> ورود به کلاس
              </button>
            ) : (
              <button type="button" className="btn-secondary">
                <CalendarPlus size={18} aria-hidden /> افزودن به تقویم
              </button>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
