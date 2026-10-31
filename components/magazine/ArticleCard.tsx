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
 * The whole card is one link, so nothing is layered over the cover.
 */
export default function ArticleCard({ article, variant = 'card', headingLevel = 'h3' }: { article: Article; variant?: Variant; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  const href = articleHref(article);

  if (variant === 'row') {
    return (
      <article className="py-4">
        <Link href={href} className="group block">
          <H className="text-lg font-bold leading-8 text-ink transition-colors group-hover:text-brand-700">{article.title}</H>
          <div className="mt-1.5 flex items-center gap-3">
            <ArticleMeta article={article} withAuthor={false} />
            {article.isSample && <SampleBadge />}
          </div>
        </Link>
      </article>
    );
  }

  const feature = variant === 'feature';
  return (
    <article>
      <Link href={href} className={cn('group block', feature && 'grid gap-6 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12')}>
        <ArticleCover article={article} size={feature ? 'lg' : 'md'} priority={feature} />
        <div className={cn(!feature && 'mt-5')}>
          <H className={cn('font-bold text-ink transition-colors group-hover:text-brand-700', feature ? 'font-display text-[2.2rem] leading-[1.3] sm:text-[2.6rem]' : 'text-lg leading-8')}>{article.title}</H>
          <p className={cn('text-slate-700', feature ? 'mt-4 text-[17px] leading-8' : 'mt-2 line-clamp-2 text-[15px] leading-7')}>
            <Inline text={article.excerpt} foreignClassName="" />
          </p>
          <div className="mt-4 flex items-center gap-3">
            <ArticleMeta article={article} withAuthor={feature} />
            {article.isSample && <SampleBadge />}
          </div>
        </div>
      </Link>
    </article>
  );
}
