import type { Article } from '@/lib/magazine';
import PageIntro from '@/components/site/PageIntro';
import ArticleGrid from './ArticleGrid';
import FilterChips from './FilterChips';
import MagazineCta from './MagazineCta';
import type { Language } from '@/lib/data';
import { fa } from '@/lib/utils';

type Chip = { href: string; label: React.ReactNode; active?: boolean; count?: number };

/** Shared layout for language, topic and language+topic archive pages. */
export default function ArticleListing({
  crumbs,
  title,
  lead,
  chips,
  chipsLabel,
  articles,
  lang,
}: {
  crumbs: { href?: string; label: string }[];
  title: React.ReactNode;
  lead: string;
  chips: Chip[];
  chipsLabel: string;
  articles: Article[];
  lang?: Language;
}) {
  return (
    <>
      <PageIntro crumbs={crumbs} title={title} lead={lead} />
      <section className="container-x pb-24">
        <div className="flex flex-col gap-4 border-t border-ink/80 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <FilterChips items={chips} label={chipsLabel} />
          <p className="shrink-0 text-sm text-slate-500">{fa(articles.length)} مقاله</p>
        </div>
        <div className="mt-12">
          <ArticleGrid articles={articles} empty={{ text: 'هنوز مقاله‌ای در این بخش منتشر نشده است. مقاله‌های بخش‌های دیگر را ببین.', href: '/magazine', label: 'صفحه‌ی اصلی مجله' }} />
        </div>
        <div className="mt-20">
          <MagazineCta lang={lang} />
        </div>
      </section>
    </>
  );
}
