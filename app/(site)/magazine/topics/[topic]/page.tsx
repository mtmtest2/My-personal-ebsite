import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleListing from '@/components/magazine/ArticleListing';
import { languages } from '@/lib/data';
import { getArticles, getTopic, topics } from '@/lib/magazine';
import PageTransition from '@/components/ui/PageTransition';

export const dynamicParams = false;
export const generateStaticParams = () => topics.map((t) => ({ topic: t.slug }));

type Props = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopic((await params).topic);
  if (!topic) return {};
  return { title: `${topic.name}: مقاله‌های مجله`, description: topic.desc, alternates: { canonical: `/magazine/topics/${topic.slug}` } };
}

export default async function TopicArchive({ params }: Props) {
  const topic = getTopic((await params).topic);
  if (!topic) notFound();
  return (
    <PageTransition key={topic.slug}>
      <ArticleListing
        crumbs={[{ href: '/magazine', label: 'مجله' }, { label: topic.name }]}
        title={topic.name}
        lead={`${topic.desc} برای انگلیسی، آلمانی و فرانسوی.`}
        chipsLabel="زبان‌ها"
        chips={[
          { href: `/magazine/topics/${topic.slug}`, label: 'همه‌ی زبان‌ها', active: true },
          ...languages.map((l) => ({ href: `/magazine/${l.slug}/${topic.slug}`, label: <span lang={l.code} dir="ltr">{l.native}</span>, count: getArticles({ lang: l.slug, topic: topic.slug }).length })),
        ]}
        articles={getArticles({ topic: topic.slug })}
      />
    </PageTransition>
  );
}
