'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const links = [
  { href: '/#how', label: 'روش کار' },
  { href: '/#languages', label: 'زبان‌ها' },
  { href: '/#teachers', label: 'اساتید' },
  { href: '/#pricing', label: 'تعرفه‌ها' },
  { href: '/#faq', label: 'سوالات متداول' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all',
        scrolled ? 'border-b border-rule bg-paper/90 backdrop-blur-lg' : 'bg-transparent',
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-brand-700">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href="/login" className="btn-ghost">ورود</Link>
          <Link href="/register" className="btn-primary">تعیین سطح رایگان</Link>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
        <ThemeToggle />
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-tint"
          aria-label="منو"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-rule bg-paper lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50">
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/login" className="btn-ghost">ورود</Link>
              <Link href="/register" className="btn-primary">تعیین سطح رایگان</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
