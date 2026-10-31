import { cn, fa } from '@/lib/utils';

const segments = [
  { min: 10, title: 'گرم‌کردن', desc: 'مرور جلسه‌ی قبل و چند سؤال کوتاه' },
  { min: 30, title: 'درس تازه', desc: 'یک موقعیت، واژه‌ها و ساختارهایش' },
  { min: 25, title: 'تمرین در گروه‌های کوچک', desc: 'دونفره یا سه‌نفره، استاد بین گروه‌ها' },
  { min: 15, title: 'صحبت آزاد', desc: 'استفاده از درس در گفت‌وگو و اصلاح خطاها' },
  { min: 10, title: 'جمع‌بندی', desc: 'نکته‌های جلسه و تکلیف بعدی' },
];

/**
 * A 90-minute group class drawn to scale: each segment's width is its share of the session.
 * Illustrative structure; the real plan depends on the level and the teacher.
 */
export default function SessionTimeline({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <figure className={className}>
      <div className="hidden h-3 overflow-hidden rounded-full sm:flex" aria-hidden>
        {segments.map((s, i) => (
          <span
            key={s.title}
            style={{ flexGrow: s.min }}
            className={cn('h-full border-l-2 last:border-l-0', dark ? 'border-navy' : 'border-paper', i === 2 || i === 3 ? 'bg-brand-600' : dark ? 'bg-white/30' : 'bg-brand-200')}
          />
        ))}
      </div>
      <ol className="grid gap-9 sm:mt-5 sm:flex sm:gap-0">
        {segments.map((s, i) => (
          <li key={s.title} style={{ flexGrow: s.min, flexBasis: 0 }} className={cn('border-r-2 pr-4 sm:border-r-0 sm:pr-0 sm:pl-3', i === 2 || i === 3 ? 'border-brand-600' : dark ? 'border-white/30' : 'border-brand-200')}>
            <p className={cn('font-display text-3xl font-bold leading-none', dark ? 'text-white' : 'text-ink')}>
              {fa(s.min)}<span className={cn('mr-1 font-sans text-xs font-medium', dark ? 'text-white/60' : 'text-slate-500')}>دقیقه</span>
            </p>
            <p className={cn('mt-2 text-sm font-bold', dark ? 'text-white' : 'text-ink')}>{s.title}</p>
            <p className={cn('mt-1 text-xs leading-5', dark ? 'text-white/70' : 'text-slate-500')}>{s.desc}</p>
          </li>
        ))}
      </ol>
      <figcaption className={cn('mt-6 text-xs', dark ? 'text-white/60' : 'text-slate-500')}>
        نمونه‌ی ساختار یک جلسه‌ی گروهی ۹۰ دقیقه‌ای؛ برنامه‌ی هر جلسه را استاد بر اساس سطح کلاس می‌چیند.
      </figcaption>
    </figure>
  );
}
