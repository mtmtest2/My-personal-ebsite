import Link from 'next/link';
import { getLanguage, type Teacher } from '@/lib/data';
import { cn } from '@/lib/utils';
import SampleBadge from './SampleBadge';
import { Foreign } from './Foreign';

// One ground per language, so a row of teachers reads as English, German and French at a glance.
const tones: Record<string, string> = {
  en: 'bg-tint text-ink',
  de: 'bg-brand-100 text-ink',
  fr: 'bg-navy text-white dark:bg-brand-600',
};

/**
 * Teacher profile card. No stock portraits: until real photos exist, the
 * portrait slot shows the teacher's initial over the language they teach.
 */
export default function TeacherCard({ t, full = false }: { t: Teacher; full?: boolean }) {
  const lang = getLanguage(t.lang)!;
  return (
    <article className="flex flex-col">
      <div className={cn('relative flex aspect-[5/4] flex-col justify-between overflow-hidden rounded-[20px] p-5 [container-type:inline-size]', tones[lang.code])}>
        <div className="flex items-start justify-between">
          <Foreign lang={lang.code} className={cn('font-display text-lg font-semibold', lang.code === 'fr' ? 'text-white/75' : 'text-slate-600')}>{lang.native}</Foreign>
          <span className={cn('grid h-11 w-11 place-items-center rounded-full text-lg font-semibold', lang.code === 'fr' ? 'bg-white text-navy' : 'bg-paper text-brand-700')} aria-hidden>
            {t.name.charAt(0)}
          </span>
        </div>
        <ul className="space-y-1 text-left" aria-label="تمرکز تدریس">
          {t.focus.map((f, i) => (
            <li key={f}>
              <Foreign lang={lang.code} className="font-display text-[11cqw] font-semibold leading-[1.15]">
                {i === 0 ? <span className={lang.code === 'fr' ? 'rounded-[4px] bg-marker px-[0.12em] text-navy' : 'mark'}>{f}</span> : f}
              </Foreign>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="mt-4 flex flex-wrap items-center gap-2 text-lg font-semibold text-ink">
        {t.name}
        {t.isSample && <SampleBadge label="پروفایل نمونه" />}
      </h3>
      <p className="text-[15px] text-slate-700">مدرس {lang.name}، {t.title}</p>
      <p className="mt-1 text-[15px] text-slate-600">سطح‌ها: {t.levels}</p>
      {full && (
        <>
          <p className="mt-3 text-[15px] leading-7 text-slate-600">{t.bio}</p>
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
