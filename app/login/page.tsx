'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LogIn } from 'lucide-react';
import AuthShell from '@/components/auth/AuthShell';
import PasswordInput from '@/components/auth/PasswordInput';
import RolePicker, { type Role } from '@/components/auth/RolePicker';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import { focusFirstError } from '@/lib/forms';

type Errors = Partial<Record<'user' | 'password', string>>;

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>('student');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  // Demo login: no backend yet, so a filled-in form routes to the selected panel.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get('user')).trim()) next.user = 'ایمیل یا شماره موبایلت را بنویس.';
    if (!String(data.get('password'))) next.password = 'رمز عبور را بنویس.';
    setErrors(next);
    if (focusFirstError(e.currentTarget, next)) return;
    setLoading(true);
    setTimeout(() => router.push(`/${role}`), 500);
  };

  return (
    <AuthShell title="خوش برگشتی" subtitle="نقشت را انتخاب کن و با حساب کاربری‌ات وارد شو." aside="login">
      <form onSubmit={onSubmit} noValidate className="space-y-6">
        <div>
          <p className="label">ورود به‌عنوان</p>
          <RolePicker value={role} onChange={setRole} />
        </div>
        <Field id="user" label="ایمیل یا شماره موبایل" error={errors.user}>
          <input name="user" className="input" dir="ltr" autoComplete="username" inputMode="email" placeholder="you@example.com" />
        </Field>
        <Field id="password" label="رمز عبور" error={errors.password} aside={<a href="#" className="link -my-3 inline-flex min-h-11 items-center text-sm">فراموشی رمز</a>}>
          <PasswordInput name="password" />
        </Field>
        <label className="flex min-h-11 items-center gap-3 text-sm text-ink">
          <input type="checkbox" name="remember" className="check" /> مرا به خاطر بسپار
        </label>
        <Button type="submit" size="lg" loading={loading} icon={LogIn} className="w-full">
          {loading ? 'در حال ورود' : 'ورود به پنل'}
        </Button>
        <p className="text-center text-sm text-body">
          حساب کاربری نداری؟{' '}
          <Link href="/register" className="link inline-flex min-h-11 min-w-11 items-center justify-center">
            ثبت‌نام کن
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
