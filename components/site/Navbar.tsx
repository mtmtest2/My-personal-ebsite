'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { languages } from '@/lib/data';
import { cn } from '@/lib/utils';

const links = [
  { href: '/online-classes', label: 'کلاس‌های آنلاین' },
  { href: '/teachers', label: 'اساتید' },
  { href: '/magazine', label: 'مجله' },
  { href: '/#faq', label: 'سوالات متداول' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`));
  const langActive = pathname.startsWith('/languages');
  const linkCls = (active: boolean) =>
    cn('rounded-lg px-3 py-2 text-sm font-medium transition hover:text-brand-700', active ? 'text-ink underline decoration-brand-500 decoration-2 underline-offset-[10px]' : 'text-slate-600');

  return (
    <header /* taste-skill-ignore: sticky bar */ style={{ viewTransitionName: 'site-header' }} className={cn('sticky top-0 z-50 bg-paper transition-shadow duration-200', (scrolled || open) && 'shadow-[0_6px_24px_-12px_rgb(21_35_122/0.25)]')}>
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <Link href={links[0].href} className={linkCls(isActive(links[0].href))}>{links[0].label}</Link>
          </li>
          <li className="group relative">
            <button type="button" aria-haspopup="true" className={cn(linkCls(langActive), 'flex items-center gap-1')}>
              زبان‌ها <ChevronDown size={15} className="transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
            </button>
            {/* Opens on hover or keyboard focus; the padding bridges the gap so the pointer can reach it. */}
            <div className="menu-pop absolute right-0 top-full hidden pt-2 group-focus-within:block group-hover:block">
              <ul /* taste-skill-ignore: open menu */ className="w-60 rounded-xl bg-paper p-2 shadow-xl shadow-ink/15 dark:bg-tint">
                {languages.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/languages/${l.slug}`} className="flex items-baseline justify-between rounded-lg px-3 py-2.5 hover:bg-tint">
                      <span className="text-sm font-semibold text-ink">{l.name}</span>
                      <span lang={l.code} dir="ltr" className="font-display text-lg text-slate-500">{l.native}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkCls(isActive(l.href))}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href="/login" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-ink">ورود</Link>
          <Link href="/consultation" className="btn-primary">تعیین سطح رایگان</Link>
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
        <div className="sheet-in max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-paper lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <Link href={links[0].href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50">{links[0].label}</Link>
            <p className="px-3 pb-1 pt-3 text-[13px] text-slate-600">زبان‌ها</p>
            <div className="grid grid-cols-3 gap-2 px-1 pb-2">
              {languages.map((l) => (
                <Link key={l.slug} href={`/languages/${l.slug}`} className="rounded-lg bg-tint px-2 py-2.5 text-center hover:bg-brand-50">
                  <span lang={l.code} dir="ltr" className="block font-display text-lg text-ink">{l.native}</span>
                  <span className="text-[13px] text-slate-600">{l.name}</span>
                </Link>
              ))}
            </div>
            {links.slice(1).map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50">{l.label}</Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/login" className="btn-ghost">ورود</Link>
              <Link href="/consultation" className="btn-primary">تعیین سطح رایگان</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
