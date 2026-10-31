'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import DemoNotice from '@/components/site/DemoNotice';
import Reveal from '@/components/ui/Reveal';
import { getLanguage, languages, levels, teachers } from '@/lib/data';
import { cn } from '@/lib/utils';

const goals = ['مکالمه‌ی روزمره', 'تحصیل', 'کار', 'مهاجرت', 'آمادگی آزمون'];
const formats = ['کلاس گروهی', 'کلاس خصوصی', 'هنوز نمی‌دانم'];
const times = ['صبح', 'ظهر', 'عصر', 'شب'];

/** Choice chip: a real checkbox or radio styled as a pill, so it stays keyboard and screen-reader friendly. */
function Chip({ type, name, value, defaultChecked, children }: { type: 'radio' | 'checkbox'; name: string; value: string; defaultChecked?: boolean; children: React.ReactNode }) {
  return (
    <label className="cursor-pointer">
      <input type={type} name={name} value={value} defaultChecked={defaultChecked} className="peer sr-only" />
      <span className="inline-flex rounded-lg bg-tint px-3.5 py-2 text-[15px] text-slate-700 ring-inset transition-colors hover:bg-brand-50 peer-checked:bg-brand-50 peer-checked:font-semibold peer-checked:text-brand-700 peer-checked:ring-2 peer-checked:ring-brand-600 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-paper">
        {children}
      </span>
    </label>
  );
}

function Field({ legend, hint, children }: { legend: string; hint?: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="pt-6">
    <fieldset>
      <legend className="float-right mb-3 w-full text-[15px] font-bold text-ink">
        {legend} {hint && <span className="font-normal text-slate-600">({hint})</span>}
      </legend>
      <div className="clear-both">{children}</div>
    </fieldset>
    </Reveal>
  );
}

/** `initialLang` / `initialTeacher` come from the URL (?lang=german&teacher=…) so links can preselect them. */
export default function ConsultationForm({ initialLang: langParam, initialTeacher: teacherParam }: { initialLang?: string; initialTeacher?: string }) {
  const initialLang = getLanguage(langParam ?? '')?.slug ?? languages[0].slug;
  const initialTeacher = teachers.find((t) => t.slug === teacherParam)?.slug ?? '';
  const [lang, setLang] = useState(initialLang);
  const [attempted, setAttempted] = useState(false);

  const langTeachers = teachers.filter((t) => t.lang === lang);

  // Display-only: nothing is sent or stored until a backend exists.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-8">
      <Field legend="کدام زبان؟">
        <div className="grid grid-cols-3 gap-2">
          {languages.map((l) => (
            <label key={l.slug} className="cursor-pointer">
              <input type="radio" name="lang" value={l.slug} checked={lang === l.slug} onChange={() => setLang(l.slug)} className="peer sr-only" />
              <span className="block rounded-xl bg-tint px-3 py-4 text-center ring-inset transition-colors hover:bg-brand-50 peer-checked:bg-brand-50 peer-checked:ring-2 peer-checked:ring-brand-600 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500">
                <span lang={l.code} dir="ltr" className="block font-display text-xl font-semibold text-ink">{l.native}</span>
                <span className="text-sm text-slate-500">{l.name}</span>
              </span>
            </label>
          ))}
        </div>
      </Field>

      <Field legend="هدفت از یادگیری" hint="می‌توانی چند مورد انتخاب کنی">
        <div className="flex flex-wrap gap-2">
          {goals.map((g) => <Chip key={g} type="checkbox" name="goal" value={g}>{g}</Chip>)}
        </div>
      </Field>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field legend="سطح فعلی">
          <select name="level" className="input" defaultValue="">
            <option value="">نمی‌دانم؛ تعیین سطح می‌خواهم</option>
            <option value="zero">از صفر شروع می‌کنم</option>
            {levels.map((lv) => <option key={lv.code} value={lv.code}>{lv.code}، {lv.name}</option>)}
          </select>
        </Field>
        <Field legend="مدرس دلخواه" hint="اختیاری">
          <select key={lang} name="teacher" className="input" defaultValue={langTeachers.some((t) => t.slug === initialTeacher) ? initialTeacher : ''}>
            <option value="">مشاور پیشنهاد بدهد</option>
            {langTeachers.map((t) => <option key={t.slug} value={t.slug}>{t.name} (پروفایل نمونه)</option>)}
          </select>
        </Field>
      </div>

      <Field legend="نوع کلاس">
        <div className="flex flex-wrap gap-2">
          {formats.map((f, i) => <Chip key={f} type="radio" name="format" value={f} defaultChecked={i === 2}>{f}</Chip>)}
        </div>
      </Field>

      <Field legend="زمان‌های مناسب برای کلاس" hint="چند مورد">
        <div className="flex flex-wrap gap-2">
          {times.map((t) => <Chip key={t} type="checkbox" name="time" value={t}>{t}</Chip>)}
        </div>
      </Field>

      <fieldset className="grid gap-4 pt-6 sm:grid-cols-2">
        <legend className="sr-only">اطلاعات تماس</legend>
        <div>
          <label className="label" htmlFor="c-name">نام</label>
          <input id="c-name" name="name" className="input" autoComplete="name" required />
        </div>
        <div>
          <label className="label" htmlFor="c-phone">شماره موبایل</label>
          <input id="c-phone" name="phone" className="input" dir="ltr" inputMode="tel" autoComplete="tel" placeholder="0912 345 6789…" required />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="c-note">توضیح بیشتر <span className="font-normal text-slate-500">(اختیاری)</span></label>
          <textarea id="c-note" name="note" rows={3} className="input resize-y" placeholder="مثلاً: تا شش ماه دیگر آزمون Goethe B1 دارم." />
        </div>
      </fieldset>

      <div className="space-y-4 pt-6">
        <DemoNotice>نسخه‌ی نمایشی: این فرم هنوز به سرور وصل نیست و اطلاعات آن ارسال یا ذخیره نمی‌شود.</DemoNotice>
        <button type="submit" className="btn-primary w-full py-3.5 text-base sm:w-auto sm:px-10">ارسال درخواست مشاوره</button>
        <div aria-live="polite">
          {attempted && (
            <p role="status" className={cn('flex items-start gap-2.5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-800')}>
              <Info size={17} className="mt-1 shrink-0" aria-hidden />
              درخواستی ثبت نشد؛ ارسال فرم در نسخه‌ی فعلی فعال نیست. اطلاعاتی که وارد کردی فقط در همین صفحه است.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
