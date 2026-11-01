import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleGrid from '@/components/magazine/ArticleGrid';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import SampleBadge from '@/components/site/SampleBadge';
import { authors, getArticles, getAuthor } from '@/lib/magazine';
import { fa } from '@/lib/utils';
import PageTransition from '@/components/ui/PageTransition';

export const dynamicParams = false;
export const generateStaticParams = () => authors.map((a) => ({ slug: a.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getAuthor((await params).slug);
  if (!a) return {};
  return { title: `${a.name}، نویسنده‌ی مجله`, description: a.bio, robots: a.isSample ? { index: false, follow: true } : undefined };
}

export default async function AuthorPage({ params }: Props) {
  const author = getAuthor((await params).slug);
  if (!author) notFound();
  const list = getArticles({ author: author.slug });
  return (
    <PageTransition key={author.slug}>
      <>
        <section className="container-x pb-14 pt-8 lg:pt-12">
          <Breadcrumbs items={[{ href: '/magazine', label: 'مجله' }, { label: 'نویسندگان' }, { label: author.name }]} />
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-5xl font-semibold text-brand-600" aria-hidden>{author.name.charAt(0)}</span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="h-display text-5xl lg:text-[4.4rem]">{author.name}</h1>
                {author.isSample && <SampleBadge label="نویسنده‌ی نمونه" />}
              </div>
              <p className="mt-2 text-slate-600">{author.role}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">{author.bio}</p>
          {author.teacherSlug && (
            <Link href={`/teachers#${author.teacherSlug}`} className="mt-4 inline-block text-sm font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-brand-500">
              پروفایل مدرس
            </Link>
          )}
        </section>
        <section className="container-x pb-24">
          <h2 className="pt-6 text-lg font-semibold text-ink">{fa(list.length)} مقاله</h2>
          <div className="mt-10"><ArticleGrid articles={list} /></div>
        </section>
      </>
    </PageTransition>
  );
}
