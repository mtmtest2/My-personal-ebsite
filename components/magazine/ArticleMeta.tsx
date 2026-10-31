import Link from 'next/link';
import { formatDate, getAuthor, readingMinutes, type Article } from '@/lib/magazine';
import { cn, fa } from '@/lib/utils';

/** Author, date and reading time, separated by thin rules rather than dots. */
export default function ArticleMeta({ article, withAuthor = true, linkAuthor = false, className }: { article: Article; withAuthor?: boolean; linkAuthor?: boolean; className?: string }) {
  const author = getAuthor(article.author);
  const items = [
    withAuthor && author ? (linkAuthor ? <Link href={`/magazine/authors/${author.slug}`} className="font-semibold text-ink hover:text-brand-700">{author.name}</Link> : <span className="font-medium text-slate-700">{author.name}</span>) : null,
    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>,
    <span>{fa(readingMinutes(article))} دقیقه مطالعه</span>,
  ].filter(Boolean);
  return (
    <p className={cn('flex flex-wrap items-center gap-y-1 text-xs text-slate-500', className)}>
      {items.map((it, i) => (
        <span key={i} className={cn(i > 0 && 'mr-4')}>{it}</span>
      ))}
    </p>
  );
}
