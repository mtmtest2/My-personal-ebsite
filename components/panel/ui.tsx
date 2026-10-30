import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import Badge, { type BadgeTone } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export function PageHeader({ title, desc, action }: { title: string; desc?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h1 className="text-2xl font-bold text-ink">{title}</h1>
        {desc && <p className="mt-1 max-w-prose text-sm text-muted">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

/** @deprecated Stats no longer use colour tiles; kept so existing call sites compile. */
export type Tone = 'brand' | 'sky' | 'violet' | 'amber' | 'emerald' | 'rose';

/**
 * A figure with its label, set off by a rule rather than boxed in a card, so a
 * row of stats reads like a report. The icon is a small muted cue, not a tile.
 */
export function StatCard({ icon: Icon, label, value, hint, trend }: { icon?: LucideIcon; label: string; value: string; hint?: string; tone?: Tone; trend?: string }) {
  return (
    <div className="border-t border-rule pt-4">
      <p className="flex items-center gap-2 text-sm text-muted">
        {Icon && <Icon size={16} aria-hidden />}
        {label}
      </p>
      <p className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="num text-3xl font-bold leading-none text-ink">{value}</span>
        {trend && (
          <bdi dir="ltr" className="text-xs font-medium text-success">
            {trend}
          </bdi>
        )}
      </p>
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}

export function Panel({ title, action, children, className }: { title: string; action?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('card min-w-0 p-5 sm:p-6', className)}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-ink">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

/** Learning progress is turquoise by default; pass barClass for other meanings. */
export function Progress({ value, className, barClass = 'bg-accent-600', label }: { value: number; className?: string; barClass?: string; label?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={cn('h-1.5 w-full overflow-hidden rounded-full bg-slate-200', className)}
    >
      <div className={cn('h-full rounded-full', barClass)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function Avatar({ src, name, size = 40 }: { src: string; name: string; size?: number }) {
  return <Image src={src} alt={name} width={size} height={size} className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />;
}

/** Vertical bars relative to the max; the latest period is emphasised, values are always visible. */
export function BarChart({ data, unit = '' }: { data: { label: string; value: number; display?: string }[]; unit?: string }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex h-56 items-end gap-3 sm:gap-5">
      {data.map((d, i) => {
        const last = i === data.length - 1;
        return (
          <div key={d.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className={cn('num text-xs', last ? 'font-bold text-ink' : 'text-muted')}>
              {d.display ?? d.value}
              {unit}
            </span>
            <div className={cn('w-full max-w-12 rounded-t-sm', last ? 'bg-brand-600' : 'bg-brand-200')} style={{ height: `${(d.value / max) * 78}%` }} />
            <span className="text-xs text-muted">{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

const statusTones: Record<string, BadgeTone> = {
  'فعال': 'success',
  'موفق': 'success',
  'منتشر شده': 'success',
  'عالی': 'success',
  'خوب': 'brand',
  'معلق': 'danger',
  'ناموفق': 'danger',
  'نیاز به توجه': 'warning',
  'در انتظار تأیید': 'warning',
  'پیش‌نویس': 'neutral',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge tone={statusTones[status] ?? 'neutral'} dot>
      {status}
    </Badge>
  );
}
