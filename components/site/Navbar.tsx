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
        'sticky top-0 z-50 border-b bg-paper transition-colors duration-180',
        scrolled || open ? 'border-rule' : 'border-transparent',
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <Logo />
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href="/login" className="btn-quiet">ورود</Link>
          <Link href="/register" className="btn-primary">تعیین سطح رایگان</Link>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="btn-quiet btn-icon"
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="site-menu" className="bg-paper lg:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-rule py-3.5 text-base font-medium text-ink">
                {l.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-2 pb-2">
              <Link href="/login" className="btn-secondary btn-lg">ورود</Link>
              <Link href="/register" className="btn-primary btn-lg">تعیین سطح رایگان</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
