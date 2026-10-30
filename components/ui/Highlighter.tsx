'use client';

// Adapted from Magic UI's Highlighter (MIT): a hand-drawn rough-notation mark.
import { useLayoutEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

type Action = 'highlight' | 'underline' | 'box' | 'circle' | 'strike-through' | 'crossed-off' | 'bracket';

export default function Highlighter({
  children,
  action = 'highlight',
  strokeWidth = 1.5,
  animationDuration = 700,
  iterations = 2,
  padding = 2,
  rtl = false,
  className,
}: {
  children: React.ReactNode;
  action?: Action;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  rtl?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Stroke color comes from CSS (.hand-mark) so it follows the theme.
    const a = annotate(el, { type: action, strokeWidth, animationDuration, iterations, padding, multiline: true, animate: !reduce, rtl } as Parameters<typeof annotate>[1]);
    a.show();
    return () => a.remove();
  }, [action, strokeWidth, animationDuration, iterations, padding, rtl]);

  return (
    <span className={`hand-mark ${className ?? ''}`}>
      <span ref={ref} className="relative inline-block">{children}</span>
    </span>
  );
}
