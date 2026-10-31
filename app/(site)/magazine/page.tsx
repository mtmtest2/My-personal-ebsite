import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3 } from 'lucide-react';
import ArticleCard from '@/components/magazine/ArticleCard';
import SearchForm from '@/components/magazine/SearchForm';
import FilterChips from '@/components/magazine/FilterChips';
import MagazineCta from '@/components/magazine/MagazineCta';
import DemoNotice from '@/components/site/DemoNotice';
import { languages } from '@/lib/data';
import { articles, featuredArticle, getArticles, topics } from '@/lib/magazine';
import { fa } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'مجله‌ی آموزشی',
  description: 'مجله‌ی فرتاش: مقاله‌های آموزشی انگلیسی، آلمانی و فرانسوی درباره‌ی واژگان، گرامر، مکالمه، تلفظ، مهارت‌ها و آمادگی آزمون.',
  alternates: { canonical: '/magazine' },
};

export default function MagazineHome() {
  const lead = featuredArticle();
  const latest = getArticles().filter((a) => a.slug !== lead.slug).slice(0, 3);
  const hasSamples = articles.some((a) => a.isSample);

  return (
    <>
      {/* Masthead */}
      <section className="container-x pb-12 pt-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <h1 className="h-display text-[3.4rem] sm:text-7xl">مجله‌ی فرتاش</h1>
            <p className="mt-5 max-w-lg text-lg leading-9 text-slate-600">
              نکته‌های کوتاه و دقیق برای یادگیری انگلیسی، آلمانی و فرانسوی؛ از اولین جمله‌ها تا آمادگی آزمون.
            </p>
          </div>
          <SearchForm compact />
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-ink/80 pt-6">
          <FilterChips
            label="زبان‌های مجله"
            items={[
              { href: '/magazine', label: 'همه', active: true },
              ...languages.map((l) => ({ href: `/magazine/${l.slug}`, label: <span lang={l.code} dir="ltr">{l.native}</span>, count: getArticles({ lang: l.slug }).length })),
            ]}
          />
          {hasSamples && <DemoNotice>مقاله‌های این نسخه نمونه‌اند و برای پیش‌نمایش طراحی مجله نوشته شده‌اند. هر مقاله برچسب «نمونه» دارد.</DemoNotice>}
        </div>
      </section>

      {/* Lead story */}
      <section className="container-x pb-20">
        <ArticleCard article={lead} variant="feature" headingLevel="h2" />
      </section>

      {/* Latest */}
      <section className="border-y border-rule bg-tint py-20">
        <div className="container-x">
          <h2 className="h-display text-4xl">تازه‌ها</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      {/* One shelf per language */}
      <section className="container-x py-20">
        <h2 className="sr-only">مقاله‌ها بر اساس زبان</h2>
        <div className="space-y-16">
          {languages.map((l) => {
            const list = getArticles({ lang: l.slug }).slice(0, 4);
            return (
              <div key={l.slug} className="grid gap-8 border-t border-ink/80 pt-8 lg:grid-cols-[15rem_1fr] lg:gap-12">
                <div>
                  <h3>
                    <Link href={`/magazine/${l.slug}`} className="group block">
                      <span lang={l.code} dir="ltr" className="block font-display text-5xl font-semibold text-ink group-hover:text-brand-700">{l.native}</span>
                      <span className="mt-1 block text-base font-bold text-slate-600">مقاله‌های {l.name}</span>
                    </Link>
                  </h3>
                  <Link href={`/magazine/${l.slug}`} className="mt-4 inline-block text-sm font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-brand-500">
                    همه‌ی {fa(getArticles({ lang: l.slug }).length)} مقاله
                  </Link>
                </div>
                {list.length ? (
                  <div className="-mt-5 grid gap-x-10 sm:grid-cols-2 [&>article:last-child]:border-0 sm:[&>article:nth-last-child(2):nth-child(odd)]:border-0">
                    {list.map((a) => <ArticleCard key={a.slug} article={a} variant="row" headingLevel="h3" />)}
                  </div>
                ) : (
                  <p className="text-slate-500">به‌زودی اولین مقاله‌ی {l.name} منتشر می‌شود.</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Topics + popular placeholder */}
      <section className="border-t border-rule bg-tint py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="h-display text-4xl">موضوع‌ها</h2>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {topics.map((t) => (
                <li key={t.slug} className="border-t border-rule">
                  <Link href={`/magazine/topics/${t.slug}`} className="group flex items-baseline justify-between gap-4 py-5">
                    <span>
                      <span className="block font-display text-2xl font-bold text-ink group-hover:text-brand-700">{t.name}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-600">{t.desc}</span>
                    </span>
                    <span className="shrink-0 text-sm text-slate-500">{fa(getArticles({ topic: t.slug }).length)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <aside aria-labelledby="popular" className="self-start rounded-[20px] border border-dashed border-rule bg-paper p-7">
            <BarChart3 size={22} className="text-brand-600" aria-hidden />
            <h2 id="popular" className="mt-4 text-lg font-bold text-ink">پربازدیدها</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              این فهرست پس از راه‌اندازی آمار بازدید، بر اساس بازدید واقعی خواننده‌ها پر می‌شود. تا آن موقع چیزی را پربازدید نشان نمی‌دهیم.
            </p>
          </aside>
        </div>
      </section>

      <section className="container-x py-20">
        <MagazineCta />
      </section>
    </>
  );
}
