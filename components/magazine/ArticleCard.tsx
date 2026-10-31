import Link from 'next/link';
import { articleHref, type Article } from '@/lib/magazine';
import { cn } from '@/lib/utils';
import SampleBadge from '@/components/site/SampleBadge';
import { Inline } from '@/components/site/Foreign';
import ArticleCover from './ArticleCover';
import ArticleMeta from './ArticleMeta';

type Variant = 'card' | 'feature' | 'row';

/**
 * - card: cover on top, for grids
 * - feature: large cover beside the text, for the lead story
 * - row: text only, for compact lists
 */
export default function ArticleCard({ article, variant = 'card', headingLevel = 'h3' }: { article: Article; variant?: Variant; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  const href = articleHref(article);

  if (variant === 'row') {
    return (
      <article className="group relative border-b border-rule py-5">
        <div className="flex items-center gap-2">
          <ArticleMeta article={article} withAuthor={false} />
          {article.isSample && <SampleBadge />}
        </div>
        <H className="mt-2 text-lg font-bold leading-8 text-ink group-hover:text-brand-700">
          <Link href={href} className="after:absolute after:inset-0">{article.title}</Link>
        </H>
      </article>
    );
  }

  const feature = variant === 'feature';
  return (
    <article className={cn('group relative', feature && 'grid gap-6 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10')}>
      <ArticleCover article={article} size={feature ? 'lg' : 'md'} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      <div className={cn(!feature && 'mt-5')}>
        <div className="flex items-center gap-2">
          <ArticleMeta article={article} withAuthor={feature} />
          {article.isSample && <SampleBadge />}
        </div>
        <H className={cn('font-bold text-ink group-hover:text-brand-700', feature ? 'mt-4 font-display text-[2.2rem] leading-[1.3] sm:text-[2.6rem]' : 'mt-3 text-lg leading-8')}>
          <Link href={href} className="after:absolute after:inset-0">{article.title}</Link>
        </H>
        <p className={cn('text-slate-600', feature ? 'mt-4 text-[17px] leading-8' : 'mt-2 line-clamp-2 text-[15px] leading-7')}>
          <Inline text={article.excerpt} foreignClassName="" />
        </p>
      </div>
    </article>
  );
}
