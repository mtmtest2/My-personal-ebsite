import { cn } from '@/lib/utils';

export type BadgeTone = 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'outline';

// Literal class names so Tailwind's scanner keeps them.
const tones: Record<BadgeTone, string> = {
  neutral: 'badge-neutral',
  brand: 'badge-brand',
  accent: 'badge-accent',
  success: 'badge-success',
  warning: 'badge-warning',
  danger: 'badge-danger',
  outline: 'badge-outline',
};

/** Small status label. Text carries the meaning; the dot only reinforces it. */
export default function Badge({ tone = 'neutral', dot = false, className, children }: { tone?: BadgeTone; dot?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <span className={cn('badge', tones[tone], className)}>
      {dot && <span className="dot" aria-hidden />}
      {children}
    </span>
  );
}
