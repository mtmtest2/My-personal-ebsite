import { cn } from '@/lib/utils';

/** Marks placeholder content (sample articles, profiles, prices) so it is never mistaken for real data. */
export default function SampleBadge({ label = 'نمونه', className }: { label?: string; className?: string }) {
  return (
    <span
      title="محتوای نمونه برای پیش‌نمایش طراحی؛ اطلاعات واقعی نیست."
      className={cn('inline-flex shrink-0 items-center rounded-md border border-dashed border-slate-400 bg-paper px-2 py-0.5 text-xs font-medium text-slate-600', className)}
    >
      {label}
    </span>
  );
}
