import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="مسیر صفحه" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronLeft size={14} className="text-slate-400" aria-hidden />}
            {it.href ? (
              <Link href={it.href} className="hover:text-brand-700">{it.label}</Link>
            ) : (
              <span aria-current="page" className="text-ink">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
