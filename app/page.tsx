import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, ChevronDown, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Phrasebook from '@/components/site/Phrasebook';
import { faqs, languages, plans, teachers } from '@/lib/data';
import { cn, fa } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Languages />
        <Teachers />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="container-x pt-10 sm:pt-14 lg:pt-20">
      <div className="grid gap-x-16 gap-y-7 lg:grid-cols-12 lg:items-end">
        <h1 className="text-[2.15rem] font-extrabold leading-[1.25] text-ink min-[380px]:text-[2.3rem] sm:text-5xl sm:leading-[1.2] lg:col-span-7 lg:text-[3.6rem] lg:leading-[1.2]">
          به زبان تازه حرف بزن، <br />
          از همین هفته.
        </h1>
        <div className="lg:col-span-5 lg:pb-2">
          <p className="max-w-prose text-lg text-body">
            کلاس‌های زنده در گروه‌های حداکثر ۸ نفره، برای انگلیسی، آلمانی، فرانسوی، ترکی، اسپانیایی و عربی. اول سطحت را رایگان می‌سنجیم، بعد برنامه‌ات را با هم می‌چینیم.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/register" className="btn-primary btn-lg">
              تعیین سطح رایگان
            </Link>
            <Link href="#how" className="link text-base">
              کلاس‌ها چطور برگزار می‌شوند؟
            </Link>
          </div>
        </div>
      </div>

      <Phrasebook className="-mx-4 mt-10 sm:mx-0 sm:mt-14 sm:rounded-3xl" />
      <p className="mt-4 text-sm text-muted">یک جمله از جلسه‌ی اول سطح A1. زبان را عوض کن تا همان جمله را در زبان‌های دیگر ببینی.</p>
    </section>
  );
}

const steps = [
  { title: 'آزمون تعیین سطح', time: '۲۰ دقیقه، آنلاین', desc: 'آزمون چهار مهارتی بر اساس CEFR؛ نتیجه را همان لحظه می‌بینی.' },
  { title: 'گفتگو با مشاور', time: 'تماس ۱۵ دقیقه‌ای', desc: 'هدف، زمان آزاد و سطحت را کنار هم می‌گذاریم و کلاس و استاد مناسب را پیشنهاد می‌دهیم.' },
  { title: 'کلاس زنده', time: '۲ یا ۳ جلسه در هفته', desc: 'گروهی یا خصوصی. ویدیوی هر جلسه در پنلت می‌ماند تا هر وقت خواستی مرور کنی.' },
  { title: 'آزمون پایان سطح', time: 'هر ۱۰ تا ۱۲ هفته', desc: 'با قبولی، گواهی با کد استعلام می‌گیری و به سطح بعد می‌روی.' },
];

const week = [
  { d: 'شنبه', what: 'کلاس گروهی', detail: '۹۰ دقیقه با استاد', kind: 'class' },
  { d: 'یکشنبه', what: 'مرور ویدیو', detail: 'فایل جلسه در پنل', kind: 'self' },
  { d: 'دوشنبه', what: 'تکلیف رایتینگ', detail: 'بازخورد تا ۴۸ ساعت', kind: 'self' },
  { d: 'سه‌شنبه', what: 'کلاس گروهی', detail: '۹۰ دقیقه با استاد', kind: 'class' },
  { d: 'چهارشنبه', what: 'کلاب مکالمه', detail: '۶۰ دقیقه حرف زدن', kind: 'club' },
  { d: 'پنجشنبه', what: 'آزمونک واژگان', detail: '۱۰ دقیقه در پنل', kind: 'self' },
  { d: 'جمعه', what: 'استراحت', detail: '', kind: 'off' },
] as const;

const kindBar: Record<(typeof week)[number]['kind'], string> = {
  class: 'bg-brand-600',
  club: 'bg-accent-500',
  self: 'bg-slate-300',
  off: 'bg-transparent',
};

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">از تعیین سطح تا اولین کلاس</h2>
          <p className="mt-4 text-lg text-body">بیشتر زبان‌آموزان کمتر از یک هفته بعد از ثبت‌نام، اولین جلسه‌شان را دارند.</p>
        </div>

        {/* A real sequence, so it gets a rail: vertical on phones, horizontal from lg. */}
        <ol className="relative mt-12 grid gap-9 before:absolute before:bottom-3 before:right-[7px] before:top-2 before:w-px before:bg-rule lg:mt-16 lg:grid-cols-4 lg:gap-10 lg:before:inset-x-0 lg:before:bottom-auto lg:before:top-[7px] lg:before:h-px lg:before:w-auto">
          {steps.map((s, i) => (
            <li key={s.title} className="relative pr-10 lg:pr-0 lg:pt-11">
              <span
                aria-hidden
                className={cn(
                  'absolute right-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent-600 lg:top-0',
                  i === 0 ? 'bg-accent-600' : 'bg-paper',
                )}
              />
              <p className="text-sm text-muted">گام {fa(i + 1)}</p>
              <h3 className="mt-1 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-accent-700">{s.time}</p>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-7 text-body">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 sm:mt-24">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-xl font-bold text-ink">یک هفته‌ی معمولی، سطح B1</h3>
              <p className="mt-1 text-[0.9375rem] text-muted">بین دو کلاس، کارهای کوتاهی در پنل داری که استاد پیگیری‌شان می‌کند.</p>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted" aria-label="راهنمای رنگ‌ها">
              <li className="flex items-center gap-2">
                <span className="h-1 w-4 rounded-full bg-brand-600" aria-hidden /> کلاس زنده با استاد
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-4 rounded-full bg-accent-500" aria-hidden /> کلاب مکالمه
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-4 rounded-full bg-slate-300" aria-hidden /> کار شخصی در پنل
              </li>
            </ul>
          </div>
          <ol className="mt-6 divide-y divide-rule border-y border-rule md:grid md:grid-cols-7 md:divide-x md:divide-y-0 md:divide-x-reverse md:border md:rounded-xl md:overflow-hidden">
            {week.map((x) => (
              <li key={x.d} className={cn('flex items-baseline gap-4 py-3.5 md:block md:min-h-36 md:p-4', x.kind === 'off' && 'text-muted')}>
                <span className={cn('hidden h-1 w-8 rounded-full md:mb-4 md:block', kindBar[x.kind])} aria-hidden />
                <span className="w-20 shrink-0 text-sm text-muted md:block md:w-auto md:text-xs">{x.d}</span>
                <span className="flex flex-1 items-baseline justify-between gap-3 md:mt-6 md:block">
                  <span className={cn('flex items-center gap-2 text-[0.9375rem] font-semibold md:text-sm', x.kind === 'off' ? 'text-muted' : 'text-ink')}>
                    <span className={cn('h-2 w-2 shrink-0 rounded-full md:hidden', kindBar[x.kind])} aria-hidden />
                    {x.what}
                  </span>
                  {x.detail && <span className="text-xs text-muted md:mt-1 md:block">{x.detail}</span>}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section id="languages" className="scroll-mt-20 border-t border-rule bg-tint py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">شش زبان، از سطح صفر</h2>
          <p className="mt-4 text-body">برای هر زبان دوره‌ی عمومی داریم و برای بیشترشان آمادگی آزمون‌های رسمی.</p>
        </div>
        <ul className="border-t border-ink/70 lg:col-span-8">
          {languages.map((l) => (
            <li key={l.code}>
              <Link
                href="/register"
                className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-rule py-6 sm:grid-cols-[12rem_1fr_auto] sm:py-7"
              >
                <span
                  lang={l.code}
                  dir={l.code === 'ar' ? 'rtl' : 'ltr'}
                  className="col-start-1 row-start-1 text-right text-[2rem] leading-tight text-ink decoration-accent-400 decoration-[3px] underline-offset-[10px] group-hover:underline sm:col-start-auto sm:row-start-auto sm:text-4xl"
                >
                  {l.native}
                </span>
                <span className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-auto">
                  <span className="block font-bold text-ink">{l.name}</span>
                  <span className="block text-sm text-muted">{l.tracks}</span>
                </span>
                <span className="col-start-2 row-start-1 flex items-center gap-2 text-sm font-medium text-brand-600 sm:col-start-auto sm:row-start-auto">
                  <span className="hidden sm:inline">ثبت‌نام</span>
                  <ArrowLeft size={18} aria-hidden className="transition-transform duration-180 ease-out group-hover:-translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Teachers() {
  return (
    <section id="teachers" className="container-x scroll-mt-20 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">اساتید</h2>
          <p className="mt-4 max-w-md text-lg text-body">
            هر استاد قبل از شروع، مصاحبه و یک کلاس آزمایشی با تیم آموزشی را گذرانده است.
          </p>
          <Link href="/register" className="btn-secondary mt-8">
            دیدن همه‌ی اساتید
          </Link>
        </div>
        <ul className="grid border-t border-rule sm:grid-cols-2 sm:gap-x-10 lg:col-span-7">
          {teachers.map((t) => (
            <li key={t.id} className="flex items-center gap-4 border-b border-rule py-6">
              {/* Portraits come from mixed sources; one monochrome treatment keeps them a set. */}
              <Image src={t.photo} alt="" width={64} height={64} className="h-16 w-16 shrink-0 rounded-full object-cover contrast-[1.08] grayscale" />
              <div className="min-w-0">
                <h3 className="font-bold text-ink">{t.name}</h3>
                <p className="text-sm text-body">
                  {t.lang}، {t.title}
                </p>
                <p className="mt-0.5 text-xs text-muted">{fa(t.years)} سال تدریس</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-rule bg-tint py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">شهریه‌ی ماهانه</h2>
            <p className="mt-4 text-body">همه‌ی پلن‌ها با آزمون تعیین سطح رایگان شروع می‌شوند.</p>
          </div>
          <p className="flex max-w-sm items-start gap-3 text-sm text-body">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-success" aria-hidden />
            اگر تا پایان جلسه‌ی دوم راضی نبودی، کل مبلغ را برمی‌گردانیم.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-rule bg-raised lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} className={cn('relative flex flex-col p-7 sm:p-9', i > 0 && 'border-t border-rule lg:border-r lg:border-t-0', p.featured && 'bg-brand-50/60')}>
              {p.featured && <span className="absolute inset-x-0 top-0 h-1 bg-brand-600" aria-hidden />}
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-2xl font-bold text-ink">{p.name}</h3>
                {p.featured && <span className="text-sm font-medium text-brand-600">انتخاب بیشتر زبان‌آموزان</span>}
              </div>
              <p className="mt-1 text-sm text-muted">{p.desc}</p>
              <p className="mt-7 flex flex-wrap items-baseline gap-x-2">
                <span className="num text-4xl font-extrabold text-ink">{fa(p.price)}</span>
                <span className="text-sm text-muted">تومان در ماه</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3 border-t border-rule pt-7 text-[0.9375rem] text-body">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check size={18} className="mt-1 shrink-0 text-brand-600" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register" className={cn('btn-lg mt-9 w-full', p.featured ? 'btn-primary' : 'btn-secondary')}>
                شروع با پلن {p.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="container-x scroll-mt-20 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">سوال‌های رایج</h2>
          <p className="mt-4 text-body">
            جوابت این‌جا نبود؟ با <span dir="ltr">021-9100 0000</span> تماس بگیر؛ هر روز از ۸ تا ۲۲.
          </p>
        </div>
        <div className="border-t border-ink/70 lg:col-span-8">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-rule" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={20} aria-hidden className="shrink-0 text-muted transition-transform duration-180 ease-out group-open:rotate-180" />
              </summary>
              <p className="-mt-1 max-w-prose pb-6 text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const cefr = [
  { group: 'پایه', levels: ['A1', 'A2'] },
  { group: 'میانی', levels: ['B1', 'B2'] },
  { group: 'پیشرفته', levels: ['C1', 'C2'] },
];

function Closing() {
  return (
    <section className="container-x sm:pb-28">
      <div className="-mx-4 grid gap-12 bg-navy px-6 py-14 text-white sm:mx-0 sm:rounded-3xl sm:px-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">سطحت را در ۲۰ دقیقه بسنج.</h2>
          <p className="mt-4 max-w-md text-white/75">آزمون تعیین سطح و تماس با مشاور رایگان است و تعهدی برای ثبت‌نام ایجاد نمی‌کند.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn btn-lg bg-white text-navy hover:bg-white/90 focus-visible:ring-offset-navy">
              شروع آزمون
            </Link>
            <Link href="/login" className="btn btn-lg border border-white/30 text-white hover:border-white/60 hover:bg-white/10 focus-visible:ring-offset-navy">
              ورود به پنل
            </Link>
          </div>
        </div>
        {/* What the test measures: where you sit on the CEFR scale, drawn as the climb it is. */}
        <figure className="lg:col-span-6">
          <div dir="ltr" className="flex h-44 items-end gap-1.5 sm:h-52 sm:gap-2">
            {cefr.flatMap((g) => g.levels).map((l, i) => (
              <span
                key={l}
                className="flex flex-1 items-end justify-center rounded-t-md border border-b-0 border-turq/40 bg-turq/[0.07] pb-3 text-lg font-bold text-turq-soft sm:text-xl"
                style={{ height: `${30 + i * 14}%` }}
              >
                {l}
              </span>
            ))}
          </div>
          <div dir="ltr" className="grid grid-cols-3 border-t border-white/25 pt-2 text-center text-xs text-white/60">
            {cefr.map((g) => (
              <span key={g.group} dir="rtl">
                {g.group}
              </span>
            ))}
          </div>
          <figcaption className="mt-5 text-sm text-white/70">نتیجه‌ی آزمون، سطحت را روی چارچوب اروپایی CEFR نشان می‌دهد؛ از A1 تا C2.</figcaption>
        </figure>
      </div>
    </section>
  );
}
