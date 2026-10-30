'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'حالت روز' : 'حالت شب'}
      title={dark ? 'حالت روز' : 'حالت شب'}
      className={cn('grid h-10 w-10 place-items-center rounded-lg text-slate-600 transition-colors hover:bg-tint hover:text-ink', className)}
    >
      {dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
