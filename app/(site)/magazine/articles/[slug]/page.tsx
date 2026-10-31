import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleBody from '@/components/magazine/ArticleBody';
import ArticleCover from '@/components/magazine/ArticleCover';
import ArticleGrid from '@/components/magazine/ArticleGrid';
import ArticleMeta from '@/components/magazine/ArticleMeta';
import MagazineCta from '@/components/magazine/MagazineCta';
import ShareButtons from '@/components/magazine/ShareButtons';
import Toc from '@/components/magazine/Toc';
import Reveal from '@/components/ui/Reveal';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import DemoNotice from '@/components/site/DemoNotice';
import SampleBadge from '@/components/site/SampleBadge';
import { Inline, plain } from '@/components/site/Foreign';
import { getLanguage } from '@/lib/data';
import { articleHref, articles, getArticle, getAuthor, getTopic, headings, relatedArticles } from '@/lib/magazine';
import PageTransition from '@/components/ui/PageTransition';

export const dynamicParams = false;
export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  const description = plain(a.excerpt);
  return {
    title: a.title,
    description,
    alternates: { canonical: articleHref(a) },
    // Sample articles stay out of search engines until real content replaces them.
    robots: a.isSample ? { index: false, follow: true } : undefined,
    openGraph: { type: 'article', title: a.title, description, publishedTime: a.publishedAt, modifiedTime: a.updatedAt ?? a.publishedAt, authors: [getAuthor(a.author)?.name ?? ''] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const lang = getLanguage(a.lang)!;
  const topic = getTopic(a.topic)!;
  const author = getAuthor(a.author);
  const toc = headings(a).map((h) => ({ id: h.id, text: h.text, type: h.type }));
  const related = relatedArticles(a);

  const jsonLd = !a.isSample && {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: plain(a.excerpt),
    inLanguage: 'fa',
    datePublished: a.publishedAt,
    dateModified: a.updatedAt ?? a.publishedAt,
    author: author && { '@type': 'Person', name: author.name },
    publisher: { '@type': 'EducationalOrganization', name: 'فرتاش' },
  };

  return (
    <PageTransition key={a.slug}>
      <>
        {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
        <article>
          <header className="container-x pt-8 lg:pt-12">
            <Breadcrumbs items={[{ href: '/magazine', label: 'مجله' }, { href: `/magazine/${lang.slug}`, label: lang.name }, { href: `/magazine/${lang.slug}/${topic.slug}`, label: topic.name }]} />
            <ArticleCover article={a} size="lg" wide priority className="mt-8" />
            <div className="mt-10 max-w-3xl">
              <h1 className="h-display text-[2.4rem] sm:text-5xl lg:text-[3.4rem]">{a.title}</h1>
              <p className="mt-6 text-lg leading-9 text-slate-700"><Inline text={a.excerpt} /></p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <Link href={`/magazine/${lang.slug}`} lang={lang.code} dir="ltr" className="font-display text-lg font-semibold text-brand-700 hover:underline">{lang.native}</Link>
                <Link href={`/magazine/topics/${topic.slug}`} className="font-medium text-slate-700 hover:text-ink">{topic.name}</Link>
                <ArticleMeta article={a} linkAuthor className="text-sm" />
                {a.isSample && <SampleBadge />}
              </div>
            </div>
          </header>

          <div className="container-x grid gap-12 pb-20 pt-12 lg:grid-cols-[1fr_15rem] lg:gap-16">
            <div className="min-w-0">
              {a.isSample && <DemoNotice className="mb-8 max-w-[68ch]">این مقاله نمونه است و برای پیش‌نمایش طراحی مجله نوشته شده است.</DemoNotice>}
              <div className="mb-8 lg:hidden"><Toc items={toc} /></div>
              <ArticleBody article={a} />

              <div className="mt-14 max-w-[68ch] space-y-8 pt-8">
                {a.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2" aria-label="برچسب‌ها">
                    {a.tags.map((t) => (
                      <li key={t}>
                        <Link href={`/magazine/search?tag=${encodeURIComponent(t)}`} className="inline-block rounded-md bg-tint px-2.5 py-1 text-sm text-slate-600 hover:text-ink">#{t}</Link>
                      </li>
                    ))}
                  </ul>
                )}
                <ShareButtons title={a.title} path={articleHref(a)} />
                {author && (
                  <Reveal className="flex gap-4 rounded-[20px] bg-tint p-5 sm:p-6">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-100 text-xl font-bold text-brand-700" aria-hidden>{author.name.charAt(0)}</span>
                    <div>
                      <p className="text-xs text-slate-500">نویسنده</p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-2">
                        <Link href={`/magazine/authors/${author.slug}`} className="font-bold text-ink hover:text-brand-700">{author.name}</Link>
                        <span className="text-sm text-slate-500">{author.role}</span>
                        {author.isSample && <SampleBadge />}
                      </p>
                      <p className="mt-2 text-[15px] leading-7 text-slate-700">{author.bio}</p>
                    </div>
                  </Reveal>
                )}
                <Reveal>
                  <MagazineCta lang={lang} />
                </Reveal>
              </div>
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-28"><Toc items={toc} /></div>
            </aside>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-tint py-20">
            <div className="container-x">
              <h2 className="h-display text-4xl">برای مطالعه‌ی بیشتر</h2>
              <div className="mt-10"><ArticleGrid articles={related} /></div>
            </div>
          </section>
        )}
      </>
    </PageTransition>
  );
}
