'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import PasswordInput from '@/components/auth/PasswordInput';
import RolePicker, { type Role } from '@/components/auth/RolePicker';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import { languages } from '@/lib/data';
import { focusFirstError, isMobile } from '@/lib/forms';

type Errors = Partial<Record<'first' | 'last' | 'phone' | 'pass' | 'terms', string>>;

export default function RegisterForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [role, setRole] = useState<Role>(params.get('role') === 'teacher' ? 'teacher' : 'student');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  // Demo registration: no backend yet, so a valid form routes to the new user's panel.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const next: Errors = {};
    if (!get('first')) next.first = 'نامت را بنویس.';
    if (!get('last')) next.last = 'نام خانوادگی‌ات را بنویس.';
    if (!get('phone')) next.phone = 'شماره موبایلت را بنویس.';
    else if (!isMobile(get('phone'))) next.phone = 'شماره باید ۱۱ رقم باشد و با ۰۹ شروع شود.';
    if (get('pass').length < 8) next.pass = 'رمز باید دست‌کم ۸ نویسه باشد.';
    if (!data.get('terms')) next.terms = 'برای ساخت حساب، قوانین را بپذیر.';
    setErrors(next);
    if (focusFirstError(e.currentTarget, next)) return;
    setLoading(true);
    setTimeout(() => router.push(`/${role}`), 500);
  };

  const teacher = role === 'teacher';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <p className="label">ثبت‌نام به‌عنوان</p>
        <RolePicker value={role} onChange={setRole} allowAdmin={false} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-4">
        <Field id="first" label="نام" error={errors.first}>
          <input name="first" className="input" autoComplete="given-name" />
        </Field>
        <Field id="last" label="نام خانوادگی" error={errors.last}>
          <input name="last" className="input" autoComplete="family-name" />
        </Field>
      </div>
      <Field id="phone" label="شماره موبایل" hint="مشاور برای گفتگوی ۱۵ دقیقه‌ای با همین شماره تماس می‌گیرد." error={errors.phone}>
        <input name="phone" type="tel" className="input" dir="ltr" inputMode="tel" autoComplete="tel" placeholder="0912 345 6789" />
      </Field>
      <Field id="lang" label={teacher ? 'زبان تدریس' : 'زبانی که می‌خواهی یاد بگیری'}>
        <select name="lang" className="input" defaultValue={languages[0].name}>
          {languages.map((l) => (
            <option key={l.code}>{l.name}</option>
          ))}
        </select>
      </Field>
      {teacher && (
        <Field id="exp" label="سابقه‌ی تدریس" hint="به سال؛ اختیاری.">
          <input name="exp" type="number" min={0} inputMode="numeric" className="input" dir="ltr" />
        </Field>
      )}
      <Field id="pass" label="رمز عبور" hint="دست‌کم ۸ نویسه." error={errors.pass}>
        <PasswordInput name="pass" autoComplete="new-password" />
      </Field>
      <div>
        <label className="flex min-h-11 items-start gap-3 pt-2 text-sm leading-7 text-ink">
          <input id="terms" type="checkbox" name="terms" className="check mt-1" aria-invalid={errors.terms ? true : undefined} aria-describedby={errors.terms ? 'terms-error' : undefined} />
          <span>
            <a href="#" className="link">
              قوانین و حریم خصوصی
            </a>{' '}
            فرتاش را می‌پذیرم.
          </span>
        </label>
        {errors.terms && (
          <p id="terms-error" className="field-error">
            {errors.terms}
          </p>
        )}
      </div>
      <Button type="submit" size="lg" loading={loading} className="w-full">
        {loading ? 'در حال ساخت حساب' : teacher ? 'ارسال درخواست همکاری' : 'ساخت حساب و تعیین سطح'}
      </Button>
      <p className="text-center text-sm text-body">
        قبلاً ثبت‌نام کرده‌ای؟{' '}
        <Link href="/login" className="link inline-flex min-h-11 min-w-11 items-center justify-center">
          وارد شو
        </Link>
      </p>
    </form>
  );
}
