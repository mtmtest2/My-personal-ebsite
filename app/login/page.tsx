'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import AuthShell from '@/components/auth/AuthShell';
import RolePicker, { type Role } from '@/components/auth/RolePicker';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>('student');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // Demo login: no backend yet, so we just route to the selected panel.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push(`/${role}`), 500);
  };

  return (
    <AuthShell title="خوش برگشتی" subtitle="برای ورود به پنل، نقش خود را انتخاب و اطلاعات حساب را وارد کن.">
      <form onSubmit={onSubmit} className="space-y-5">
        <RolePicker value={role} onChange={setRole} />
        <div>
          <label className="label" htmlFor="email">ایمیل یا شماره موبایل</label>
          <input id="email" name="username" autoComplete="username" spellCheck={false} className="input" dir="ltr" placeholder="you@example.com…" required />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="label" htmlFor="password">رمز عبور</label>
            <a href="#" className="mb-1.5 text-xs font-medium text-brand-600 hover:underline">فراموشی رمز؟</a>
          </div>
          <div className="relative">
            <input id="password" name="password" autoComplete="current-password" type={show ? 'text' : 'password'} className="input pl-11" dir="ltr" placeholder="••••••••" required />
            <button type="button" onClick={() => setShow((v) => !v)} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" aria-label={show ? 'پنهان کردن رمز' : 'نمایش رمز'}>
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <label className="flex items-center gap-2 text-[15px] text-slate-600">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-brand-600" /> مرا به خاطر بسپار
        </label>
        <button type="submit" disabled={loading} className="btn-gradient w-full py-3">
          {loading ? 'در حال ورود…' : <>ورود به پنل <LogIn size={18} /></>}
        </button>
        <p className="text-center text-[15px] text-slate-600">
          حساب کاربری نداری؟ <Link href="/register" className="font-semibold text-brand-600 hover:underline">ثبت‌نام کن</Link>
        </p>
      </form>
    </AuthShell>
  );
}
