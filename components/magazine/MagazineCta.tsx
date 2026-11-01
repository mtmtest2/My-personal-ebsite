import Link from 'next/link';
import type { Language } from '@/lib/data';

/** The one quiet invitation at the end of an article, tied to the article's language. */
export default function MagazineCta({ lang }: { lang?: Language }) {
  return (
    <aside className="grid items-center gap-6 rounded-[20px] bg-tint p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-12">
      <div>
      <p className="font-display text-3xl font-semibold leading-snug text-ink">
        {lang ? `می‌خواهی ${lang.name} را با استاد تمرین کنی؟` : 'می‌خواهی با استاد تمرین کنی؟'}
      </p>
      <p className="mt-2 max-w-xl leading-8 text-slate-600">
        در گفت‌وگوی مشاوره سطحت را می‌سنجیم و کلاس زنده‌ی مناسبت را پیشنهاد می‌دهیم. مشاوره رایگان است و تعهدی برای ثبت‌نام ندارد.
      </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:flex-col lg:items-end">
        <Link href={lang ? `/consultation?lang=${lang.slug}` : '/consultation'} className="btn-primary">درخواست تعیین سطح</Link>
        {lang && (
          <Link href={`/languages/${lang.slug}`} className="text-sm font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-brand-500">
            درباره‌ی کلاس‌های {lang.name}
          </Link>
        )}
      </div>
    </aside>
  );
}
