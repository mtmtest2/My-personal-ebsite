'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import RolePicker, { type Role } from '@/components/auth/RolePicker';
import { languages } from '@/lib/data';

export default function RegisterForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [role, setRole] = useState<Role>(params.get('role') === 'teacher' ? 'teacher' : 'student');
  const [loading, setLoading] = useState(false);

  // Demo registration: no backend yet, so we just route to the new user's panel.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <input id="pass" name="new-password" type="password" autoComplete="new-password" className="input" dir="ltr" placeholder="حداقل ۸ کاراکتر…" minLength={8} required />
      </div>
      <label className="flex items-start gap-2 text-sm leading-6 text-slate-600">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-brand-600" />
        <span><a href="#" className="text-brand-600 hover:underline">قوانین و حریم خصوصی</a> فرتاش را می‌پذیرم.</span>
      </label>
      <button type="submit" disabled={loading} className="btn-gradient w-full py-3">
        {loading ? 'در حال ساخت حساب…' : <>{role === 'teacher' ? 'ارسال درخواست همکاری' : 'ساخت حساب و تعیین سطح'} <ArrowLeft size={18} /></>}
      </button>
      <p className="text-center text-sm text-slate-500">
        قبلاً ثبت‌نام کرده‌ای؟ <Link href="/login" className="font-semibold text-brand-600 hover:underline">وارد شو</Link>
      </p>
    </form>
  );
}
