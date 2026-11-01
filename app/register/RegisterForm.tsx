'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import RolePicker, { type Role } from '@/components/auth/RolePicker';
import { languages } from '@/lib/data';

export default function RegisterForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [role, setRole] = useState<Role>(params.get('role') === 'teacher' ? 'teacher' : 'student');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const passwordsDiffer = () => {
    const confirm = confirmRef.current?.value ?? '';
    return confirm !== '' && confirm !== (passRef.current?.value ?? '');
  };

  // Demo registration: no backend yet, so we just route to the new user's panel.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordsDiffer()) {
      setMismatch(true);
      confirmRef.current?.focus();
      return;
    }
    setLoading(true);
    setTimeout(() => router.push(`/${role}`), 500);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <RolePicker value={role} onChange={setRole} allowAdmin={false} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="first">نام</label>
          <input id="first" name="given-name" autoComplete="given-name" className="input" required />
        </div>
        <div>
          <label className="label" htmlFor="last">نام خانوادگی</label>
          <input id="last" name="family-name" autoComplete="family-name" className="input" required />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="phone">شماره موبایل</label>
        <input id="phone" name="tel" type="tel" inputMode="tel" autoComplete="tel" className="input" dir="ltr" placeholder="0912 345 6789…" required />
      </div>
      <div>
        <label className="label" htmlFor="lang">{role === 'teacher' ? 'زبان تدریس' : 'زبان مورد علاقه'}</label>
        <select id="lang" name="language" className="input">
          {languages.map((l) => <option key={l.code}>{l.name}</option>)}
        </select>
      </div>
      {role === 'teacher' && (
        <div>
          <label className="label" htmlFor="exp">سابقه‌ی تدریس (سال)</label>
          <input id="exp" name="experience" type="number" inputMode="numeric" min={0} className="input" dir="ltr" />
        </div>
      )}
      <div>
        <label className="label" htmlFor="pass">رمز عبور</label>
        <div className="relative">
          <input
            ref={passRef}
            id="pass"
            name="new-password"
            type={show ? 'text' : 'password'}
            autoComplete="new-password"
            className="input pl-11"
            dir="ltr"
            placeholder="حداقل ۸ کاراکتر…"
            minLength={8}
            required
            onChange={() => mismatch && setMismatch(passwordsDiffer())}
          />
          <button type="button" onClick={() => setShow((v) => !v)} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" aria-label={show ? 'پنهان کردن رمز' : 'نمایش رمز'} aria-pressed={show}>
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
      <div>
        <label className="label" htmlFor="confirm-pass">تکرار رمز عبور</label>
        <input
          ref={confirmRef}
          id="confirm-pass"
          name="confirm-password"
          type={show ? 'text' : 'password'}
          autoComplete="new-password"
          className={`input ${mismatch ? 'border-red-500 focus:border-red-500 focus:ring-red-100 dark:focus:ring-red-900/40' : ''}`}
          dir="ltr"
          placeholder="رمز را دوباره وارد کن…"
          minLength={8}
          required
          aria-invalid={mismatch}
          aria-describedby="confirm-pass-error"
          onBlur={() => setMismatch(passwordsDiffer())}
          onChange={() => mismatch && setMismatch(passwordsDiffer())}
        />
        <p id="confirm-pass-error" aria-live="polite" className="mt-1.5 min-h-5 text-sm leading-5 text-red-700 dark:text-red-400">
          {mismatch ? 'رمز عبور و تکرار آن یکسان نیستند.' : ''}
        </p>
      </div>
      <label className="flex items-start gap-2 text-[15px] leading-6 text-slate-600">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-brand-600" />
        <span><a href="#" className="text-brand-600 hover:underline">قوانین و حریم خصوصی</a> فرتاش را می‌پذیرم.</span>
      </label>
      <button type="submit" disabled={loading} className="btn-gradient w-full py-3">
        {loading ? 'در حال ساخت حساب…' : <>{role === 'teacher' ? 'ارسال درخواست همکاری' : 'ساخت حساب و تعیین سطح'} <ArrowLeft size={18} /></>}
      </button>
      <p className="text-center text-[15px] text-slate-600">
        قبلاً ثبت‌نام کرده‌ای؟ <Link href="/login" className="font-semibold text-brand-600 hover:underline">وارد شو</Link>
      </p>
    </form>
  );
}
