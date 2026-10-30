import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'quiet' | 'danger';
type Size = 'sm' | 'md' | 'lg';

type Common = {
  variant?: Variant;
  size?: Size;
  /** Leading icon (sits at the start edge, i.e. the right in RTL). */
  icon?: LucideIcon;
  /** Trailing icon, e.g. ArrowLeft for "continue". */
  iconEnd?: LucideIcon;
  /** Shows a spinner in place of the leading icon and blocks presses; width stays put. */
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type AsButton = Common & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Common> & { href?: undefined };
type AsLink = Common & Omit<React.ComponentProps<typeof Link>, keyof Common> & { href: string };

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  quiet: 'btn-quiet',
  danger: 'btn-danger',
};
const sizes: Record<Size, string> = { sm: 'btn-sm', md: '', lg: 'btn-lg' };
const iconSize: Record<Size, number> = { sm: 16, md: 18, lg: 20 };

export function buttonClass({ variant = 'primary', size = 'md', iconOnly = false, className }: { variant?: Variant; size?: Size; iconOnly?: boolean; className?: string } = {}) {
  return cn(variants[variant], sizes[size], iconOnly && 'btn-icon', className);
}

export default function Button(props: AsButton | AsLink) {
  const { variant, size = 'md', icon: Icon, iconEnd: IconEnd, loading, className, children, ...rest } = props;
  const s = iconSize[size];
  const cls = buttonClass({ variant, size, iconOnly: !children, className });
  const content = (
    <>
      {loading ? <span className="spinner" style={{ width: s, height: s }} aria-hidden /> : Icon && <Icon size={s} aria-hidden />}
      {children}
      {IconEnd && <IconEnd size={s} aria-hidden />}
    </>
  );

  if ('href' in rest && rest.href !== undefined) {
    return (
      <Link {...(rest as Omit<AsLink, keyof Common>)} className={cls}>
        {content}
      </Link>
    );
  }
  const { disabled, type = 'button', ...buttonRest } = rest as Omit<AsButton, keyof Common>;
  return (
    <button {...buttonRest} type={type} disabled={disabled || loading} aria-busy={loading || undefined} className={cls}>
      {content}
    </button>
  );
}
