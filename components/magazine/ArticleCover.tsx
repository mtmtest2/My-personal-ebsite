import Image from 'next/image';
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
 * Article cover: the article's key phrase set like a phrasebook page, with the marker on the
 * part being taught. With `cover.image`, the photograph fills the cover and the phrase sits on
 * a paper label in its corner.
 */
export default function ArticleCover({ article, size = 'md', wide = false, priority = false, className }: { article: Pick<Article, 'lang' | 'topic' | 'cover'>; size?: keyof typeof sizes; wide?: boolean; priority?: boolean; className?: string }) {
  const lang = getLanguage(article.lang)!;
  const { before, marked, after, tone, image } = article.cover;
  const phrase = (
    <Foreign lang={lang.code} className="block text-left font-display text-[length:var(--phrase)] font-semibold leading-[1.25]">
      {before}
      <span className={cn(tone === 'navy' && !image ? 'rounded-[4px] bg-marker px-[0.12em] text-navy [box-decoration-break:clone]' : 'mark')}>{marked}</span>
      {after}
    </Foreign>
  );

  return (
    <div
      className={cn(
        'relative flex flex-col justify-between overflow-hidden rounded-[20px] [container-type:inline-size]',
        wide ? 'aspect-[16/10] sm:aspect-[5/2]' : 'aspect-[16/10]',
        image ? 'bg-tint text-ink' : tones[tone],
        sizes[size],
        wide && 'sm:[--phrase:6cqw]',
        className,
      )}
    >
      {image ? (
        <>
          <Image src={image.src} alt={image.alt} fill priority={priority} sizes={size === 'lg' ? '(min-width: 1024px) 1100px, 100vw' : '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="relative mt-auto self-end rounded-xl bg-paper/95 px-4 py-3 [--phrase:7cqw] dark:bg-paper/90" aria-hidden>
            {phrase}
          </div>
        </>
      ) : (
        <>
          <div className={cn('flex items-center justify-between font-sans text-[13px]', tone === 'navy' ? 'text-white/75' : 'text-slate-600')} aria-hidden>
            <span>{getTopic(article.topic)?.name}</span>
            <Foreign lang={lang.code} className="font-display text-base">{lang.native}</Foreign>
          </div>
          <div aria-hidden>{phrase}</div>
        </>
      )}
    </div>
  );
}
