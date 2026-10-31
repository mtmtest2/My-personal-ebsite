import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleListing from '@/components/magazine/ArticleListing';
import { getLanguage, languages } from '@/lib/data';
import { getArticles, getTopic, topics } from '@/lib/magazine';
import PageTransition from '@/components/ui/PageTransition';

export const dynamicParams = false;
export const generateStaticParams = () => languages.flatMap((l) => topics.map((t) => ({ lang: l.slug, topic: t.slug })));

type Props = { params: Promise<{ lang: string; topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const lang = getLanguage(p.lang);
  const topic = getTopic(p.topic);
  if (!lang || !topic) return {};
  return {
    title: `${topic.name} ${lang.name}`,
    description: `مقاله‌های ${topic.name} ${lang.name} در مجله‌ی فرتاش. ${topic.desc}`,
    alternates: { canonical: `/magazine/${lang.slug}/${topic.slug}` },
  };
}

export default async function LanguageTopicArchive({ params }: Props) {
  const p = await params;
  const lang = getLanguage(p.lang);
  const topic = getTopic(p.topic);
  if (!lang || !topic) notFound();
  return (
    <PageTransition key={`${lang.slug}-${topic.slug}`}>
      <ArticleListing
        crumbs={[{ href: '/magazine', label: 'مجله' }, { href: `/magazine/${lang.slug}`, label: lang.name }, { label: topic.name }]}
        title={`${topic.name} ${lang.name}`}
        lead={topic.desc}
        chipsLabel="موضوع‌ها"
        chips={[
          { href: `/magazine/${lang.slug}`, label: 'همه‌ی موضوع‌ها' },
          ...topics.map((t) => ({ href: `/magazine/${lang.slug}/${t.slug}`, label: t.name, active: t.slug === topic.slug, count: getArticles({ lang: lang.slug, topic: t.slug }).length })),
        ]}
        articles={getArticles({ lang: lang.slug, topic: topic.slug })}
        lang={lang}
      />
    </PageTransition>
  );
}
