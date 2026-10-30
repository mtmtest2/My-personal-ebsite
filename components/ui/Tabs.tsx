'use client';

import { useId, useRef, useState } from 'react';

export type TabItem = { id: string; label: React.ReactNode; content: React.ReactNode };

/**
 * Underline tabs following the WAI-ARIA tabs pattern. Arrow keys follow reading
 * direction, so in RTL ArrowLeft moves to the next tab. Switching is instant:
 * people flip between tabs often, so the panel doesn't animate.
 */
export default function Tabs({ items, defaultId, label, className }: { items: TabItem[]; defaultId?: string; label: string; className?: string }) {
  const [active, setActive] = useState(defaultId ?? items[0]?.id);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const rtl = getComputedStyle(e.currentTarget).direction === 'rtl';
    const next = rtl ? 'ArrowLeft' : 'ArrowRight';
    const prev = rtl ? 'ArrowRight' : 'ArrowLeft';
    let j = -1;
    if (e.key === next) j = (i + 1) % items.length;
    else if (e.key === prev) j = (i - 1 + items.length) % items.length;
    else if (e.key === 'Home') j = 0;
    else if (e.key === 'End') j = items.length - 1;
    if (j < 0) return;
    e.preventDefault();
    setActive(items[j].id);
    refs.current[j]?.focus();
  };

  return (
    <div className={className}>
      <div role="tablist" aria-label={label} className="tab-list">
        {items.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${base}-tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`${base}-panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className="tab"
          >
            {t.label}
          </button>
        ))}
      </div>
      {items.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${base}-panel-${t.id}`}
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={active !== t.id}
          tabIndex={0}
          className="pt-5"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
