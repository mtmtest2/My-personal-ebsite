import Link from 'next/link';
import { cn } from '@/lib/utils';

/** A row of link-based filters; the active one is marked with aria-current. */
export default function FilterChips({ items, label }: { items: { href: string; label: React.ReactNode; active?: boolean; count?: number }[]; label: string }) {
  return (
    <nav aria-label={label} className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              aria-current={it.active ? 'page' : undefined}
              className={cn(
                'inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm transition-colors',
                it.active ? 'bg-ink font-semibold text-paper' : 'bg-tint text-slate-700 hover:bg-brand-50 hover:text-ink',
              )}
            >
              {it.label}
              {it.count !== undefined && <span className={cn('text-xs', it.active ? 'text-paper/75' : 'text-slate-500')}>{it.count.toLocaleString('fa-IR')}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
