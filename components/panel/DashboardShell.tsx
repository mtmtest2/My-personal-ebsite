'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
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

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-5 py-5">
        <Logo />
        <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden" aria-label="بستن">
          <X size={20} />
        </button>
      </div>
      <div className="mx-4 mb-4 flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700">
        <GraduationCap size={16} /> {cfg.label}
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {cfg.items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition',
                active ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
              )}
            >
              <item.icon size={19} /> {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="m-3 rounded-2xl bg-navy p-4 text-white">
        <p className="text-sm font-bold">به کمک نیاز داری؟</p>
        <p className="mt-1 text-xs leading-6 text-white/70">پشتیبانی فرتاش هر روز از ۸ تا ۲۲ پاسخگوست.</p>
        <a href="#" className="mt-3 inline-block rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20">تماس با پشتیبانی</a>
      </div>
      <Link href="/" className="mx-3 mb-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50">
        <LogOut size={19} /> خروج
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-paper">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 right-0 z-30 hidden w-72 border-l border-rule bg-paper lg:block">{sidebar}</aside>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 right-0 w-72 bg-paper shadow-2xl">{sidebar}</aside>
        </div>
      )}

      <div className="lg:mr-72">
        <header className="sticky top-0 z-20 border-b border-rule bg-paper/80 backdrop-blur-lg">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl text-slate-600 hover:bg-slate-100 lg:hidden" aria-label="منو">
              <Menu size={22} />
            </button>
            <div className="relative hidden max-w-md flex-1 sm:block">
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="input bg-slate-50 pr-10" placeholder="جستجو…" />
            </div>
            <div className="mr-auto flex items-center gap-2">
              <ThemeToggle />
              <button className="relative grid h-10 w-10 place-items-center rounded-xl text-slate-600 hover:bg-slate-100" aria-label="اعلان‌ها">
                <Bell size={20} />
                <span className="absolute left-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-paper" />
              </button>
              <div className="flex items-center gap-3 rounded-xl py-1 pl-1 pr-3 hover:bg-slate-100">
                <div className="hidden text-left sm:block">
                  <p className="text-sm font-bold text-slate-800">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.subtitle}</p>
                </div>
                <Image src={user.photo} alt={user.name} width={40} height={40} className="h-10 w-10 rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
