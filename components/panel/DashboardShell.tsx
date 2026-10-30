'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  Library,
  LogOut,
  Menu,
  Search,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

type Role = 'student' | 'teacher' | 'admin';

const nav: Record<Role, { label: string; items: { href: string; label: string; icon: LucideIcon }[] }> = {
  student: {
    label: 'پنل دانشجو',
    items: [
      { href: '/student', label: 'داشبورد', icon: LayoutDashboard },
      { href: '/student/courses', label: 'دوره‌های من', icon: BookOpen },
      { href: '/student/schedule', label: 'برنامه‌ی کلاس‌ها', icon: CalendarDays },
      { href: '/student/assignments', label: 'تکالیف و آزمون‌ها', icon: ClipboardList },
    ],
  },
  teacher: {
    label: 'پنل استاد',
    items: [
      { href: '/teacher', label: 'داشبورد', icon: LayoutDashboard },
      { href: '/teacher/classes', label: 'کلاس‌های من', icon: CalendarDays },
      { href: '/teacher/students', label: 'زبان‌آموزان', icon: Users },
    ],
  },
  admin: {
    label: 'پنل مدیریت',
    items: [
      { href: '/admin', label: 'نمای کلی', icon: LayoutDashboard },
      { href: '/admin/users', label: 'کاربران', icon: Users },
      { href: '/admin/courses', label: 'دوره‌ها', icon: Library },
    ],
  },
};

export default function DashboardShell({
  role,
  user,
  children,
}: {
  role: Role;
  user: { name: string; subtitle: string; photo: string };
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cfg = nav[role];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-5 pb-6 pt-5">
        <div>
          <Logo />
          <p className="mt-2 text-xs text-muted">{cfg.label}</p>
        </div>
        <button onClick={() => setOpen(false)} className="btn-quiet btn-icon lg:hidden" aria-label="بستن منو">
          <X size={20} />
        </button>
      </div>
      <nav aria-label={cfg.label} className="flex-1 space-y-0.5 px-3">
        {cfg.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={pathname === item.href ? 'page' : undefined}
            className="side-link"
          >
            <item.icon size={18} aria-hidden /> {item.label}
          </Link>
        ))}
      </nav>
      <div className="mx-5 border-t border-rule py-5">
        <p className="text-sm font-semibold text-ink">به کمک نیاز داری؟</p>
        <p className="mt-1 text-xs text-muted">پشتیبانی هر روز از ۸ تا ۲۲ پاسخ می‌دهد.</p>
        <a href="tel:+982191000000" className="link mt-1 inline-flex min-h-11 items-center text-sm">تماس با پشتیبانی</a>
      </div>
      <div className="border-t border-rule px-3 py-3">
        <Link href="/" className="side-link text-muted hover:bg-danger-soft hover:text-danger">
          <LogOut size={18} aria-hidden /> خروج
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-tint">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 right-0 z-30 hidden w-64 border-l border-rule bg-paper lg:block">{sidebar}</aside>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="منوی پنل">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 right-0 w-72 max-w-[85vw] bg-paper shadow-pop">{sidebar}</aside>
        </div>
      )}

      <div className="lg:mr-64">
        <header className="sticky top-0 z-20 border-b border-rule bg-paper">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button onClick={() => setOpen(true)} className="btn-quiet btn-icon lg:hidden" aria-label="باز کردن منو" aria-expanded={open}>
              <Menu size={20} />
            </button>
            <div className="relative hidden max-w-sm flex-1 sm:block">
              <Search size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" aria-hidden />
              <input type="search" aria-label="جستجو" className="input h-10 border-rule bg-tint pr-10" placeholder="جستجو در دوره‌ها و کلاس‌ها" />
            </div>
            <div className="mr-auto flex items-center gap-1">
              <ThemeToggle />
              <button className="btn-quiet btn-icon relative" aria-label="اعلان‌ها، ۲ مورد خوانده‌نشده">
                <Bell size={20} />
                <span className="absolute left-2.5 top-2.5 h-2 w-2 rounded-full bg-danger ring-2 ring-paper" aria-hidden />
              </button>
              <div className="mr-2 flex items-center gap-3 border-r border-rule pr-3">
                <div className="hidden text-left sm:block">
                  <p className="text-sm font-semibold leading-5 text-ink">{user.name}</p>
                  <p className="text-xs leading-5 text-muted">{user.subtitle}</p>
                </div>
                <Image src={user.photo} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
              </div>
            </div>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
