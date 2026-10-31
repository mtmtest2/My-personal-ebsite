import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/magazine/ArticleCard';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import CtaBand from '@/components/site/CtaBand';
import PhraseCard from '@/components/site/PhraseCard';
import SectionTitle from '@/components/site/SectionTitle';
import TeacherCard from '@/components/site/TeacherCard';
import { getLanguage, languages, levels, teachers } from '@/lib/data';
import { getArticles } from '@/lib/magazine';
import { fa } from '@/lib/utils';

export const dynamicParams = false;
export const generateStaticParams = () => languages.map((l) => ({ slug: l.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLanguage((await params).slug);
  if (!l) return {};
  return {
    title: `کلاس آنلاین ${l.name}`,
    description: `کلاس‌های آنلاین زنده‌ی ${l.name} در فرتاش: ${l.tracks}. تعیین سطح رایگان و کلاس گروهی یا خصوصی.`,
    alternates: { canonical: `/languages/${l.slug}` },
  };
}

export default async function LanguagePage({ params }: Props) {
  const lang = getLanguage((await params).slug);
  if (!lang) notFound();
  const langTeachers = teachers.filter((t) => t.lang === lang.slug);
  const langArticles = getArticles({ lang: lang.slug }).slice(0, 3);
  const others = languages.filter((l) => l.slug !== lang.slug);

  const tracks = [
    { title: `${lang.name} عمومی`, desc: 'از سطح صفر تا C1؛ هر چهار مهارت در کنار هم، با تمرکز بر حرف زدن از جلسه‌ی اول.' },
    { title: 'مکالمه و کلاب گفت‌وگو', desc: 'برای کسی که پایه‌ی گرامر دارد ولی در حرف زدن گیر می‌کند؛ هر جلسه یک موقعیت واقعی.' },
    { title: `آمادگی ${lang.exams.join('، ')}`, desc: 'ساختار آزمون، زمان‌بندی و تمرین بخش‌به‌بخش با بازخورد استاد روی نوشتن و صحبت.' },
  ];

  return (
    <>
      <section className="container-x grid gap-14 pb-24 pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-12">
        <div>
          <Breadcrumbs items={[{ href: '/', label: 'فرتاش' }, { href: '/#languages', label: 'زبان‌ها' }, { label: lang.name }]} />
          <p lang={lang.code} dir="ltr" className="mt-10 text-right font-display text-[5rem] font-bold leading-none text-ink sm:text-[7rem]">{lang.native}</p>
          <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">کلاس آنلاین زنده‌ی {lang.name}</h1>
          <p className="mt-5 max-w-lg text-lg leading-9 text-slate-600">{lang.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={`/consultation?lang=${lang.slug}`} className="btn-primary px-7 py-3.5 text-base">تعیین سطح {lang.name}</Link>
            <Link href={`/magazine/${lang.slug}`} className="text-base font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-8 hover:decoration-brand-500">
              مقاله‌های آموزش {lang.name}
            </Link>
          </div>
        </div>
        <PhraseCard lang={lang} />
      </section>

      <section className="border-t border-rule bg-tint py-24">
        <div className="container-x">
          <SectionTitle title="مسیرهای یادگیری" desc="بعد از تعیین سطح، یکی از این مسیرها را با مشاور انتخاب می‌کنی؛ هر کدام کلاس گروهی و خصوصی دارد." />
          <ul className="mt-12 border-t border-ink/80">
            {tracks.map((t) => (
              <li key={t.title} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[18rem_1fr] sm:gap-8">
                <h3 className="text-lg font-bold text-ink">{t.title}</h3>
                <p className="leading-8 text-slate-600">{t.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionTitle title="از A1 تا C2" desc="سطح‌ها بر اساس چارچوب مشترک اروپایی (CEFR) است؛ هر سطح معمولاً ۱۰ تا ۱۲ هفته کلاس زنده طول می‌کشد." />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-6">
          {levels.map((lv) => (
            <li key={lv.code} className="flex flex-col bg-paper p-5">
              <span dir="ltr" className="text-right font-display text-4xl font-bold text-brand-600">{lv.code}</span>
              <span className="mt-1 text-sm font-bold text-ink">{lv.name}</span>
              <span className="mt-3 text-sm leading-6 text-slate-600">{lv.can}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-rule bg-tint py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle title={`مدرس‌های ${lang.name}`} desc="پروفایل‌های این بخش نمونه‌اند و با معرفی مدرس‌ها جایگزین می‌شوند." />
            <Link href={`/teachers?lang=${lang.slug}`} className="btn-ghost shrink-0">همه‌ی مدرس‌های {lang.name}</Link>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {langTeachers.map((t) => <TeacherCard key={t.id} t={t} full />)}
          </div>
        </div>
      </section>

      {langArticles.length > 0 && (
        <section className="container-x py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle title={`از مجله: ${lang.name}`} />
            <Link href={`/magazine/${lang.slug}`} className="btn-ghost shrink-0">همه‌ی {fa(getArticles({ lang: lang.slug }).length)} مقاله</Link>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {langArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}

      <section className="container-x pb-16">
        <p className="border-t border-rule pt-6 text-sm text-slate-500">
          زبان‌های دیگر:{' '}
          {others.map((o, i) => (
            <span key={o.slug}>
              {i > 0 && '، '}
              <Link href={`/languages/${o.slug}`} className="font-semibold text-brand-700 hover:underline">{o.name}</Link>
            </span>
          ))}
        </p>
      </section>

      <CtaBand
        title={`سطح ${lang.name} خودت را بسنج.`}
        desc="در گفت‌وگوی مشاوره سطحت را مشخص می‌کنیم و کلاس و استاد مناسب را پیشنهاد می‌دهیم."
        primary={{ href: `/consultation?lang=${lang.slug}`, label: 'درخواست تعیین سطح' }}
        secondary={{ href: '/online-classes', label: 'کلاس‌ها چطور برگزار می‌شوند' }}
      />
    </>
  );
}
