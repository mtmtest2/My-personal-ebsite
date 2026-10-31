import Link from 'next/link';
import type { Article } from '@/lib/magazine';
import ArticleCard from './ArticleCard';

/** Grid of article cards with a useful empty state. */
export default function ArticleGrid({ articles, empty }: { articles: Article[]; empty?: { text: string; href: string; label: string } }) {
  if (!articles.length) {
    return (
      <div className="rounded-[20px] border border-dashed border-rule px-6 py-14 text-center">
        <p className="text-slate-600">{empty?.text ?? 'هنوز مقاله‌ای در این بخش منتشر نشده است.'}</p>
        <Link href={empty?.href ?? '/magazine'} className="btn-ghost mt-5">{empty?.label ?? 'همه‌ی مقاله‌ها'}</Link>
      </div>
    );
  }
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleCard key={a.slug} article={a} />
      ))}
    </div>
  );
}
