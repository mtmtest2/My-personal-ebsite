import Link from 'next/link';
import { getLanguage, type Teacher } from '@/lib/data';
import { cn } from '@/lib/utils';
import SampleBadge from './SampleBadge';
import { Foreign } from './Foreign';

/**
 * Teacher profile card. No stock portraits: until real photos exist, the
 * portrait slot shows the teacher's initial over the language they teach.
 */
export default function TeacherCard({ t, full = false }: { t: Teacher; full?: boolean }) {
  const lang = getLanguage(t.lang)!;
  return (
    <article className="flex flex-col">
      <div className="relative flex aspect-[5/4] flex-col justify-between overflow-hidden rounded-[20px] bg-tint p-5">
        <Foreign lang={lang.code} className="self-start font-display text-xl font-semibold text-slate-500">{lang.native}</Foreign>
        <span className="font-display text-[5.5rem] font-bold leading-none text-brand-600" aria-hidden>{t.name.charAt(0)}</span>
      </div>
      <h3 className="mt-4 flex flex-wrap items-center gap-2 text-lg font-bold text-ink">
        {t.name}
        {t.isSample && <SampleBadge label="پروفایل نمونه" />}
      </h3>
      <p className="text-[15px] text-slate-700">مدرس {lang.name}، {t.title}</p>
      <p className="mt-1 text-[15px] text-slate-600">سطح‌ها: {t.levels}</p>
      {full && (
        <>
          <p className="mt-3 text-[15px] leading-7 text-slate-600">{t.bio}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {t.focus.map((f) => (
              <li key={f}>
                <Foreign lang={lang.code} className="inline-block rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">{f}</Foreign>
              </li>
            ))}
          </ul>
          <Link
            href={`/consultation?lang=${lang.slug}&teacher=${t.slug}`}
            className={cn('mt-5 self-start text-sm font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-brand-500')}
          >
            درخواست کلاس با {t.name.split(' ')[0]}
          </Link>
        </>
      )}
    </article>
  );
}
