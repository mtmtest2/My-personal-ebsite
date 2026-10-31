import type { Metadata } from 'next';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import { fa } from '@/lib/utils';
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
          <h1 className="h-display text-[3rem] sm:text-6xl">مشاوره و تعیین سطح</h1>
          <p className="mt-5 max-w-xl text-lg leading-9 text-slate-600">
            چند سؤال کوتاه درباره‌ی هدف و زمانت جواب بده تا مشاور با آمادگی کامل با تو تماس بگیرد. مشاوره و تعیین سطح رایگان است.
          </p>
          <ConsultationForm initialLang={lang} initialTeacher={teacher} />
        </div>
        <aside className="lg:pt-4">
          <div className="rounded-[20px] bg-tint p-7 sm:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-bold text-ink">بعد از ارسال درخواست</h2>
            <ol className="mt-8 space-y-6">
              {next.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="font-display text-3xl font-bold leading-none text-brand-600">{fa(i + 1)}</span>
                  <div>
                    <p className="font-bold text-ink">{s.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
