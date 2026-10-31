import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleListing from '@/components/magazine/ArticleListing';
import { getLanguage, languages } from '@/lib/data';
import { getArticles, topics } from '@/lib/magazine';

export const dynamicParams = false;
export const generateStaticParams = () => languages.map((l) => ({ lang: l.slug }));

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = getLanguage((await params).lang);
  if (!lang) return {};
  return {
    title: `آموزش ${lang.name}: مقاله‌های مجله`,
    description: `مقاله‌های آموزشی ${lang.name} در مجله‌ی فرتاش: واژگان، گرامر، مکالمه، تلفظ، مهارت‌ها و آمادگی ${lang.exams.join('، ')}.`,
    alternates: { canonical: `/magazine/${lang.slug}` },
  };
}

export default async function LanguageArchive({ params }: Props) {
  const lang = getLanguage((await params).lang);
  if (!lang) notFound();
  const list = getArticles({ lang: lang.slug });
  return (
    <ArticleListing
      crumbs={[{ href: '/magazine', label: 'مجله' }, { label: lang.name }]}
      title={<><span lang={lang.code} dir="ltr">{lang.native}</span><span className="mt-2 block text-[0.55em] text-slate-600">مقاله‌های آموزش {lang.name}</span></>}
      lead={lang.intro}
      chipsLabel="موضوع‌ها"
      chips={[
        { href: `/magazine/${lang.slug}`, label: 'همه‌ی موضوع‌ها', active: true },
        ...topics.map((t) => ({ href: `/magazine/${lang.slug}/${t.slug}`, label: t.name, count: getArticles({ lang: lang.slug, topic: t.slug }).length })),
      ]}
      articles={list}
      lang={lang}
    />
  );
}
