'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type Heading = { id: string; text: string; type: 'h2' | 'h3' };

/** Table of contents that follows the reader. Sticky aside on desktop, a collapsible panel on mobile. */
export default function Toc({ items }: { items: Heading[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((h) => document.getElementById(h.id)).filter((e): e is HTMLElement => !!e);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -65% 0px' },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-0.5 text-sm">
      {items.map((h) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            aria-current={active === h.id ? 'location' : undefined}
            className={cn(
              'block rounded-lg py-1.5 leading-6 transition-colors',
              h.type === 'h3' ? 'pr-6' : 'pr-3',
              active === h.id ? 'bg-tint font-semibold text-ink' : 'text-slate-600 hover:text-ink',
            )}
          >
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <details className="group rounded-xl bg-tint lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
          فهرست مطالب
          <ChevronDown size={18} className="text-slate-400 transition-transform group-open:rotate-180" />
        </summary>
        <nav aria-label="فهرست مطالب" className="px-4 pb-4">{list}</nav>
      </details>
      <nav aria-label="فهرست مطالب" className="hidden lg:block">
        <p className="mb-3 text-sm font-semibold text-ink">فهرست مطالب</p>
        {list}
      </nav>
    </>
  );
}
