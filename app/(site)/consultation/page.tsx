import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import { contact } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';
import ConsultationForm from './ConsultationForm';

export const metadata: Metadata = {
  title: 'مشاوره و تعیین سطح',
  description: 'درخواست مشاوره‌ی رایگان و تعیین سطح انگلیسی، آلمانی یا فرانسوی در فرتاش.',
  alternates: { canonical: '/consultation' },
};

const next = [
  { title: 'تماس مشاور', desc: 'در ساعتی که انتخاب کرده‌ای با تو تماس می‌گیریم.' },
  { title: 'تعیین سطح', desc: 'چند سؤال شنیداری و یک گفت‌وگوی کوتاه به زبان مقصد؛ نتیجه بر اساس CEFR.' },
  { title: 'پیشنهاد کلاس و استاد', desc: 'کلاس هم‌سطح و مدرس متناسب با هدفت را معرفی می‌کنیم.' },
  { title: 'تصمیم با تو', desc: 'اگر خواستی ثبت‌نام می‌کنی؛ مشاوره هیچ تعهدی ایجاد نمی‌کند.' },
];

type Props = { searchParams: Promise<{ lang?: string; teacher?: string }> };

export default async function ConsultationPage({ searchParams }: Props) {
  const { lang, teacher } = await searchParams;
  return (
    <section className="container-x pb-24 pt-8 lg:pt-12">
      <Breadcrumbs items={[{ href: '/', label: 'فرتاش' }, { label: 'مشاوره و تعیین سطح' }]} />
      <div className="mt-8 grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div>
          <h1 className="h-display text-[3rem] sm:text-6xl lg:text-[4.6rem]">مشاوره و تعیین سطح</h1>
          <p className="mt-5 max-w-xl text-lg leading-9 text-slate-600">
            چند سؤال کوتاه درباره‌ی هدف و زمانت جواب بده تا مشاور با آمادگی کامل با تو تماس بگیرد. مشاوره و تعیین سطح رایگان است.
          </p>
          <ConsultationForm initialLang={lang} initialTeacher={teacher} />
        </div>
        <Reveal as="section" delay={120} aria-label="بعد از ارسال درخواست" className="lg:pt-4">
          <div className="overflow-hidden rounded-[20px] bg-tint lg:sticky lg:top-28">
            <div className="relative aspect-[16/9]">
              <Image src="/images/scenes/notebook-coffee.jpg" alt="دفتر یادداشت باز، صفحه‌کلید و یک فنجان قهوه روی میز" fill priority sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
            </div>
            <div className="p-7 sm:p-8">
            <h2 className="font-display text-3xl font-bold text-ink">بعد از ارسال درخواست</h2>
            <ol className="mt-6 space-y-5">
              {next.map((s) => (
                <li key={s.title}>
                  <p className="text-lg font-bold text-ink">{s.title}</p>
                  <p className="mt-1 text-[15px] leading-7 text-slate-700">{s.desc}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-xl bg-paper px-4 py-3 text-sm leading-7 text-slate-700">
              ترجیح می‌دهی خودت تماس بگیری؟ <a href={contact.phoneHref} dir="ltr" className="font-bold text-brand-700 hover:underline">{contact.phone}</a>
            </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
