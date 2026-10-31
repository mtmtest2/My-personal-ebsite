import { getLanguage } from '@/lib/data';
import type { Article } from '@/lib/magazine';
import { getTopic } from '@/lib/magazine';
import { cn } from '@/lib/utils';
import { Foreign } from '@/components/site/Foreign';

const tones = {
  navy: 'bg-navy text-white',
  tint: 'bg-tint text-ink',
  brand: 'bg-brand-50 text-ink',
};

// Phrase size follows the cover's own width (container query units), so a cover reads the same in a grid or as a lead.
const sizes = {
  sm: 'p-4 [--phrase:11cqw]',
  md: 'p-5 sm:p-6 [--phrase:10cqw]',
  lg: 'p-6 sm:p-10 [--phrase:8cqw]',
};

/**
 * Typographic cover: the article's key phrase set like a phrasebook page, with the
 * marker on the part being taught. Replaced by `cover.image` once real artwork exists.
 */
export default function ArticleCover({ article, size = 'md', wide = false, className }: { article: Pick<Article, 'lang' | 'topic' | 'cover'>; size?: keyof typeof sizes; wide?: boolean; className?: string }) {
  const lang = getLanguage(article.lang)!;
  const { before, marked, after, tone } = article.cover;
  return (
    <div
      className={cn(
        'relative flex flex-col justify-between overflow-hidden rounded-[20px] [container-type:inline-size]',
        wide ? 'aspect-[16/10] sm:aspect-[5/2]' : 'aspect-[16/10]',
        tone !== 'navy' && 'border border-rule',
        tones[tone],
        sizes[size],
        wide && 'sm:[--phrase:6cqw]',
        className,
      )}
      aria-hidden>
      <div className={cn('flex items-center justify-between font-sans text-xs', tone === 'navy' ? 'text-white/65' : 'text-slate-500')}>
        <span>{getTopic(article.topic)?.name}</span>
        <Foreign lang={lang.code} className="font-display text-base">{lang.native}</Foreign>
      </div>
      <Foreign lang={lang.code} className="block text-left font-display text-[length:var(--phrase)] font-semibold leading-[1.25]">
        {before}
        <span className={cn(tone === 'navy' ? 'rounded-[4px] bg-marker px-[0.12em] text-navy [box-decoration-break:clone]' : 'mark')}>{marked}</span>
        {after}
      </Foreign>
    </div>
  );
}
