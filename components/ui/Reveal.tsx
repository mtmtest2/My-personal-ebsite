'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Blur-fade entrance for a block, once, as it scrolls into view.
 * Adapted from Magic UI's BlurFade (MIT) without the motion library: the CSS in
 * globals.css (`.reveal`) does the work, so content is visible without JavaScript
 * and with reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  image = false,
  className,
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  as?: 'div' | 'li' | 'figure' | 'section' | 'article' | 'p';
  image?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={cn('reveal', image && 'reveal-img', className)} style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties} {...rest}>
      {children}
    </Comp>
  );
}
