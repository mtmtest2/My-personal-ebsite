'use client';

import Link from 'next/link';
import { CircleAlert } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import PasswordInput from '@/components/auth/PasswordInput';
import RolePicker, { type Role } from '@/components/auth/RolePicker';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import { languages } from '@/lib/data';
import { focusFirstError, isMobile } from '@/lib/forms';
import { cn, fa } from '@/lib/utils';

type Errors = Partial<Record<'first' | 'last' | 'phone' | 'pass' | 'terms', string>>;

export default function RegisterForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [role, setRole] = useState<Role>(params.get('role') === 'teacher' ? 'teacher' : 'student');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const [step, setStep] = useState<1 | 2>(1);
  const [summary, setSummary] = useState('');
  const passRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step === 2) passRef.current?.querySelector('input')?.focus();
  }, [step]);

  // Step 1 is who you are, step 2 secures the account. Both live in one form so
  // autofill and password managers see every field; only validation is per step.
  const validate = (data: FormData, upTo: 1 | 2) => {
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const next: Errors = {};
    if (!get('first')) next.first = 'نامت را بنویس.';
    if (!get('last')) next.last = 'نام خانوادگی‌ات را بنویس.';
    if (!get('phone')) next.phone = 'شماره موبایلت را بنویس.';
    else if (!isMobile(get('phone'))) next.phone = 'شماره باید ۱۱ رقم باشد و با ۰۹ شروع شود.';
    if (upTo === 2) {
      if (get('pass').length < 8) next.pass = 'رمز باید دست‌کم ۸ نویسه باشد.';
      if (!data.get('terms')) next.terms = 'برای ساخت حساب، قوانین را بپذیر.';
    }
    return next;
  };

  // Demo registration: no backend yet, so a valid form routes to the new user's panel.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = validate(data, step);
    setErrors(next);
    if (next.first || next.last || next.phone) setStep(1);
    if (focusFirstError(form, next)) return;
    if (step === 1) {
      setSummary(`${String(data.get('first')).trim()} ${String(data.get('last')).trim()}، ${String(data.get('phone')).trim()}`);
      setStep(2);
      return;
    }
    setLoading(true);
    setTimeout(() => router.push(`/${role}`), 500);
  };

  const teacher = role === 'teacher';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <ol className="grid grid-cols-2 gap-3" aria-label="مراحل ثبت‌نام">
        {(['اطلاعات تو', 'رمز و تأیید'] as const).map((label, i) => (
          <li key={label} aria-current={step === i + 1 ? 'step' : undefined} className="text-sm">
            <span className={cn('block h-1 rounded-full', step >= i + 1 ? 'bg-brand-600' : 'bg-slate-200')} aria-hidden />
            <span className={cn('mt-2 block', step === i + 1 ? 'font-semibold text-ink' : 'text-muted')}>
              مرحله‌ی {fa(i + 1)}: {label}
            </span>
          </li>
        ))}
      </ol>

      <fieldset hidden={step !== 1} className="space-y-6">
        <legend className="sr-only">مرحله‌ی ۱ از ۲: اطلاعات تو</legend>
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
      </fieldset>

      <fieldset hidden={step !== 2} className="space-y-6">
        <legend className="sr-only">مرحله‌ی ۲ از ۲: رمز و تأیید</legend>
        <div className="flex items-center justify-between gap-4 rounded-lg bg-tint px-4 py-2">
          <p className="min-w-0 truncate text-sm text-body">
            <span className="text-muted">{teacher ? 'استاد' : 'زبان‌آموز'}: </span>
            <bdi>{summary}</bdi>
          </p>
          <button type="button" onClick={() => setStep(1)} className="link inline-flex min-h-11 shrink-0 items-center text-sm">
            ویرایش
          </button>
        </div>
        <div ref={passRef}>
          <Field id="pass" label="رمز عبور" hint="دست‌کم ۸ نویسه." error={errors.pass}>
            <PasswordInput name="pass" autoComplete="new-password" />
          </Field>
        </div>
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
              <CircleAlert size={14} aria-hidden /> {errors.terms}
            </p>
          )}
        </div>
      </fieldset>

      <Button type="submit" size="lg" loading={loading} className="w-full">
        {loading ? 'در حال ساخت حساب' : step === 1 ? 'ادامه' : teacher ? 'ارسال درخواست همکاری' : 'ساخت حساب و تعیین سطح'}
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
