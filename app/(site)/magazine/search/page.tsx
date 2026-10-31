import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleGrid from '@/components/magazine/ArticleGrid';
import SearchForm from '@/components/magazine/SearchForm';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import { getLanguage } from '@/lib/data';
import { getArticles, getTopic, topics } from '@/lib/magazine';
import { fa } from '@/lib/utils';

export const metadata: Metadata = { title: 'جست‌وجو در مجله', robots: { index: false, follow: true } };

type Props = { searchParams: Promise<{ q?: string; lang?: string; topic?: string; tag?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = '', lang = '', topic = '', tag = '' } = await searchParams;
  const validLang = getLanguage(lang) ? lang : '';
  const validTopic = getTopic(topic) ? topic : '';
  const results = getArticles({ q, lang: validLang, topic: validTopic, tag: tag || undefined });
  const filtered = Boolean(q || validLang || validTopic || tag);

  return (
    <>
      <section className="container-x pb-10 pt-8 lg:pt-12">
        <Breadcrumbs items={[{ href: '/magazine', label: 'مجله' }, { label: 'جست‌وجو' }]} />
        <h1 className="h-display mt-8 text-5xl sm:text-6xl">جست‌وجو در مجله</h1>
        <SearchForm q={q} lang={validLang} topic={validTopic} className="mt-8" />
      </section>
      <section className="container-x pb-24">
        <p className="border-t border-ink/80 pt-6 text-sm text-slate-600" aria-live="polite">
          {filtered ? (
            <>
              {fa(results.length)} مقاله
              {q && <> برای «<span className="font-semibold text-ink">{q}</span>»</>}
              {tag && <> با برچسب <span className="font-semibold text-ink">#{tag}</span></>}
              {validLang && <> در {getLanguage(validLang)!.name}</>}
              {validTopic && <>، موضوع {getTopic(validTopic)!.name}</>}
              <Link href="/magazine/search" className="mr-3 font-semibold text-brand-700 hover:underline">پاک کردن فیلترها</Link>
            </>
          ) : (
            <>همه‌ی {fa(results.length)} مقاله‌ی مجله</>
          )}
        </p>
        <div className="mt-10">
          {results.length ? (
            <ArticleGrid articles={results} />
          ) : (
            <div className="rounded-[20px] border border-dashed border-rule px-6 py-14 text-center">
              <p className="text-lg font-bold text-ink">مقاله‌ای پیدا نشد.</p>
              <p className="mt-2 text-slate-600">کلمه‌ی کوتاه‌تری امتحان کن یا یکی از موضوع‌ها را ببین.</p>
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {topics.map((t) => (
                  <li key={t.slug}><Link href={`/magazine/topics/${t.slug}`} className="btn-ghost px-3.5 py-2">{t.name}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
