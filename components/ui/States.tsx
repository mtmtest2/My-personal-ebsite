import { CircleAlert, CircleCheck, Info, TriangleAlert, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Spinner({ className, label = 'در حال بارگذاری' }: { className?: string; label?: string }) {
  return (
    <span role="status" className={cn('inline-flex items-center text-muted', className)}>
      <span className="spinner" aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  );
}

/** Placeholder block; size it to match the content it stands in for so nothing shifts. */
export function Skeleton({ className }: { className?: string }) {
  return <span aria-hidden className={cn('skeleton block', className)} />;
}

/** Lines of text-shaped skeleton; the last line is shorter, like a real paragraph. */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <span aria-hidden className={cn('block space-y-2.5', className)}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} className={cn('h-3', i === lines - 1 ? 'w-2/3' : 'w-full')} />
      ))}
    </span>
  );
}

/**
 * Nothing here yet: say what will appear and offer the one action that fills it.
 */
export function EmptyState({ icon: Icon, title, children, action, className }: { icon?: LucideIcon; title: string; children?: React.ReactNode; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center px-6 py-12 text-center', className)}>
      {Icon && <Icon size={28} className="text-slate-400" aria-hidden />}
      <p className={cn('font-bold text-ink', Icon && 'mt-4')}>{title}</p>
      {children && <p className="mt-1.5 max-w-sm text-sm text-muted">{children}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

type AlertTone = 'info' | 'success' | 'warning' | 'danger';
const alertTone: Record<AlertTone, { icon: LucideIcon; box: string; iconClass: string }> = {
  info: { icon: Info, box: 'border-brand-200 bg-brand-50', iconClass: 'text-brand-600' },
  success: { icon: CircleCheck, box: 'border-success/25 bg-success-soft', iconClass: 'text-success' },
  warning: { icon: TriangleAlert, box: 'border-warning/25 bg-warning-soft', iconClass: 'text-warning' },
  danger: { icon: CircleAlert, box: 'border-danger/25 bg-danger-soft', iconClass: 'text-danger' },
};

/** Inline message. Errors say what happened and what to do next; success echoes the action's verb. */
export function Alert({ tone = 'info', title, children, action, className }: { tone?: AlertTone; title: string; children?: React.ReactNode; action?: React.ReactNode; className?: string }) {
  const t = alertTone[tone];
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={cn('flex gap-3 rounded-lg border p-4', t.box, className)}>
      <t.icon size={20} className={cn('mt-0.5 shrink-0', t.iconClass)} aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink">{title}</p>
        {children && <div className="mt-0.5 text-sm text-body">{children}</div>}
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );
}
