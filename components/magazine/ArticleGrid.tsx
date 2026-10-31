import Link from 'next/link';
import type { Article } from '@/lib/magazine';
import ArticleCard from './ArticleCard';
import Reveal from '@/components/ui/Reveal';

/** Grid of article cards with a useful empty state. */
export default function ArticleGrid({ articles, empty }: { articles: Article[]; empty?: { text: string; href: string; label: string } }) {
  if (!articles.length) {
    return (
      <div className="rounded-[20px] bg-tint px-6 py-14 text-center">
        <p className="text-slate-600">{empty?.text ?? 'هنوز مقاله‌ای در این بخش منتشر نشده است.'}</p>
        <Link href={empty?.href ?? '/magazine'} className="btn-ghost mt-5">{empty?.label ?? 'همه‌ی مقاله‌ها'}</Link>
      </div>
    );
  }
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <Reveal key={a.slug} delay={(i % 3) * 90}>
          <ArticleCard article={a} />
        </Reveal>
      ))}
    </div>
  );
}
