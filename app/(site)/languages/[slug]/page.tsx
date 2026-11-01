import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/magazine/ArticleCard';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import CtaBand from '@/components/site/CtaBand';
import ClassWindow from '@/components/site/ClassWindow';
import Reveal from '@/components/ui/Reveal';
import PhraseCard from '@/components/site/PhraseCard';
import SectionTitle from '@/components/site/SectionTitle';
import TeacherCard from '@/components/site/TeacherCard';
import { getLanguage, languages, levels, teachers } from '@/lib/data';
import { getArticles } from '@/lib/magazine';
import { fa } from '@/lib/utils';
import PageTransition from '@/components/ui/PageTransition';

// One photograph per language page, beside the learning tracks.
const trackPhotos: Record<string, { src: string; alt: string }> = {
  english: { src: '/images/scenes/study-group.jpg', alt: 'چند نفر دور یک میز چوبی با لپ‌تاپ درس می‌خوانند' },
  german: { src: '/images/scenes/group-discussion.jpg', alt: 'گروهی کوچک دور یک میز با لپ‌تاپ در حال گفت‌وگو' },
  french: { src: '/images/scenes/shared-table.jpg', alt: 'دو نفر پشت یک میز بلند در اتاقی روشن کار می‌کنند' },
};

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
    <PageTransition key={lang.slug}>
      <>
        <section className="container-x grid gap-14 pb-24 pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-12">
          <div>
            <Breadcrumbs items={[{ href: '/', label: 'فرتاش' }, { href: '/#languages', label: 'زبان‌ها' }, { label: lang.name }]} />
            <h1 className="mt-10">
              <span lang={lang.code} dir="ltr" className="block text-right font-display text-[5rem] font-semibold leading-none text-ink sm:text-[7rem]">{lang.native}</span>
              <span className="mt-4 block text-2xl font-semibold text-ink sm:text-3xl">کلاس آنلاین زنده‌ی {lang.name}</span>
            </h1>
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

        <section className="bg-tint py-24">
          <div className="container-x">
            <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
            <SectionTitle title="مسیرهای یادگیری" desc="بعد از تعیین سطح، یکی از این مسیرها را با مشاور انتخاب می‌کنی؛ هر کدام کلاس گروهی و خصوصی دارد." />
            <ul className="mt-12 space-y-2">
              {tracks.map((t) => (
                <Reveal as="li" key={t.title} className="grid gap-2 rounded-2xl bg-paper px-6 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8 sm:px-8">
                  <h3 className="text-lg font-semibold text-ink">{t.title}</h3>
                  <p className="leading-8 text-slate-700">{t.desc}</p>
                </Reveal>
              ))}
            </ul>
            </div>
            <Reveal image delay={120} className="relative aspect-[4/5] overflow-hidden rounded-[20px] lg:sticky lg:top-28">
              <Image src={trackPhotos[lang.slug].src} alt={trackPhotos[lang.slug].alt} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
            </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-navy py-24 text-white">
          <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-display text-[2.6rem] font-semibold leading-[1.15] sm:text-5xl">یک لحظه از کلاس {lang.name}</h2>
              <p className="mt-4 max-w-md text-[17px] leading-8 text-white/80">درس روی صفحه‌ی مشترک است، استاد صدایت را می‌شنود و همان لحظه اصلاح می‌کند؛ سؤال‌هایت را هم می‌توانی در گفت‌وگوی کلاس بنویسی.</p>
            </Reveal>
            <Reveal delay={120}>
              <ClassWindow lang={lang} className="text-white" />
            </Reveal>
          </div>
        </section>

        <section className="container-x py-24">
          <SectionTitle title="از A1 تا C2" desc="سطح‌ها بر اساس چارچوب مشترک اروپایی (CEFR) است؛ هر سطح معمولاً ۱۰ تا ۱۲ هفته کلاس زنده طول می‌کشد." />
          <ol className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
            {levels.map((lv, i) => (
              <Reveal as="li" key={lv.code} delay={i * 60} className="flex flex-col rounded-2xl bg-tint p-5">
                <span dir="ltr" className="text-right font-display text-4xl font-semibold text-brand-600">{lv.code}</span>
                <span className="mt-1 text-sm font-semibold text-ink">{lv.name}</span>
                <span className="mt-3 text-[15px] leading-7 text-slate-700">{lv.can}</span>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="bg-tint py-24">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionTitle title={`مدرس‌های ${lang.name}`} desc="پروفایل‌های این بخش نمونه‌اند و با معرفی مدرس‌ها جایگزین می‌شوند." />
              <Link href={`/teachers?lang=${lang.slug}`} className="btn-ghost shrink-0">همه‌ی مدرس‌های {lang.name}</Link>
            </div>
            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {langTeachers.map((t, i) => (
                <Reveal key={t.id} delay={i * 90}>
                  <TeacherCard t={t} full />
                </Reveal>
              ))}
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
              {langArticles.map((a, i) => (
                <Reveal key={a.slug} delay={i * 90}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section className="container-x pb-16">
          <p className="pt-6 text-sm text-slate-500">
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
    </PageTransition>
  );
}
