import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Phrasebook from '@/components/site/Phrasebook';
import { faqs, languages, plans, teachers, type Teacher } from '@/lib/data';
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
            <Link href="#how" className="link inline-flex min-h-11 items-center text-base">
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
  { title: 'آزمون تعیین سطح', time: '۲۰ دقیقه، آنلاین', free: true, desc: 'آزمون چهار مهارتی بر اساس CEFR؛ نتیجه را همان لحظه می‌بینی.' },
  { title: 'گفتگو با مشاور', time: 'تماس ۱۵ دقیقه‌ای', free: true, desc: 'هدف، زمان آزاد و سطحت را کنار هم می‌گذاریم و کلاس و استاد مناسب را پیشنهاد می‌دهیم.' },
  { title: 'کلاس زنده', time: '۲ یا ۳ جلسه در هفته', free: false, desc: 'گروهی یا خصوصی. ویدیوی هر جلسه در پنلت می‌ماند تا هر وقت خواستی مرور کنی.' },
  { title: 'آزمون پایان سطح', time: 'هر ۱۰ تا ۱۲ هفته', free: false, desc: 'با قبولی، گواهی با کد استعلام می‌گیری و به سطح بعد می‌روی.' },
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

const kinds = {
  class: { bar: 'bg-brand-600', label: 'کلاس زنده با استاد' },
  club: { bar: 'bg-accent-500', label: 'کلاب مکالمه' },
  self: { bar: 'bg-slate-300', label: 'کار شخصی در پنل' },
  off: { bar: 'bg-transparent', label: '' },
};

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">از تعیین سطح تا اولین کلاس</h2>
          <p className="mt-4 text-lg text-body">بیشتر زبان‌آموزان کمتر از یک هفته بعد از ثبت‌نام، اولین جلسه‌شان را دارند.</p>
        </div>

        {/* A real sequence, so it gets a numbered rail: vertical on phones, horizontal from lg.
            The rail runs through the centre of the 40px number nodes. */}
        <ol className="relative mt-12 grid gap-10 before:absolute before:bottom-6 before:right-5 before:top-6 before:w-px before:bg-rule lg:mt-16 lg:grid-cols-4 lg:gap-8 lg:before:inset-x-5 lg:before:bottom-auto lg:before:top-5 lg:before:h-px lg:before:w-auto">
          {steps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 lg:block">
              <span
                aria-hidden
                className={cn(
                  'relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 text-base font-bold',
                  i === 0 ? 'border-accent-600 bg-accent-600 text-white dark:text-paper' : 'border-accent-600 bg-paper text-accent-700',
                )}
              >
                {fa(i + 1)}
              </span>
              <div className="lg:mt-6">
                <p className="sr-only">گام {fa(i + 1)}:</p>
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-bold text-ink">
                  {s.title}
                  {s.free && <span className="badge badge-success">رایگان</span>}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-accent-700">
                  <Clock size={16} aria-hidden />
                  {s.time}
                </p>
                <p className="mt-3 max-w-sm text-base text-body">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 sm:mt-24">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h3 className="text-2xl font-bold text-ink">یک هفته‌ی معمولی، سطح B1</h3>
              <p className="mt-2 text-base text-body">بین دو کلاس، کارهای کوتاهی در پنل داری که استاد پیگیری‌شان می‌کند.</p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-body" aria-label="راهنمای رنگ‌ها">
              {(['class', 'club', 'self'] as const).map((k) => (
                <li key={k} className="flex items-center gap-2">
                  <span className={cn('h-1.5 w-5 rounded-full', kinds[k].bar)} aria-hidden /> {kinds[k].label}
                </li>
              ))}
            </ul>
          </div>

          {/* A list until lg (seven columns are too narrow on tablets), a timetable from lg. */}
          <ol className="mt-8 divide-y divide-rule border-y border-rule lg:grid lg:grid-cols-7 lg:divide-x lg:divide-y-0 lg:divide-x-reverse lg:overflow-hidden lg:rounded-xl lg:border">
            {week.map((x) => (
              <li key={x.d} className="flex gap-4 py-4 lg:block lg:min-h-40 lg:p-5">
                <span className={cn('w-1 shrink-0 self-stretch rounded-full lg:mb-5 lg:block lg:h-1.5 lg:w-10', kinds[x.kind].bar)} aria-hidden />
                <span className="w-20 shrink-0 pt-0.5 text-sm text-muted lg:block lg:w-auto lg:pt-0">{x.d}</span>
                <span className="lg:mt-5 lg:block">
                  <span className={cn('block text-base font-semibold lg:text-[0.9375rem]', x.kind === 'off' ? 'text-muted' : 'text-ink')}>{x.what}</span>
                  {x.detail && <span className="mt-0.5 block text-sm text-muted">{x.detail}</span>}
                  {x.kind !== 'off' && <span className="sr-only">، {kinds[x.kind].label}</span>}
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
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">اساتید</h2>
          <p className="mt-4 text-lg text-body">هر استاد قبل از شروع، مصاحبه و یک کلاس آزمایشی با تیم آموزشی را گذرانده است.</p>
        </div>
        <Link href="/register" className="btn-secondary shrink-0 self-start lg:self-auto">
          دیدن همه‌ی اساتید
        </Link>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {teachers.map((t) => (
          <li key={t.id}>
            <TeacherPortrait teacher={t} />
            <p className="mt-4 text-sm font-medium text-brand-600">{t.lang}</p>
            <h3 className="mt-0.5 text-lg font-bold leading-snug text-ink">{t.name}</h3>
            <p className="mt-1 text-sm text-body">{t.title}</p>
            <p className="mt-2 text-sm text-muted">{fa(t.years)} سال تدریس</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * 4:5 frame sized for real studio portraits. Until a teacher has one
 * (`portrait` in lib/data.ts), the small avatar sits centred in the frame
 * rather than being stretched past its resolution, with the language they
 * teach written in that language.
 */
function TeacherPortrait({ teacher: t }: { teacher: Teacher }) {
  const native = languages.find((l) => l.name === t.lang);
  return (
    <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-xl bg-tint ring-1 ring-inset ring-rule">
      {t.portrait ? (
        <Image src={t.portrait} alt={t.name} fill sizes="(min-width: 1024px) 280px, 45vw" className="object-cover" />
      ) : (
        <>
          <Image src={t.photo} alt={t.name} width={112} height={112} className="h-24 w-24 rounded-full object-cover contrast-[1.08] grayscale sm:h-28 sm:w-28" />
          {native && (
            <span lang={native.code} dir="ltr" aria-hidden className="absolute inset-x-0 bottom-4 text-center text-lg text-muted sm:bottom-5 sm:text-xl">
              {native.native}
            </span>
          )}
        </>
      )}
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-rule bg-tint py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">شهریه‌ی ماهانه</h2>
            <p className="mt-4 text-lg text-body">همه‌ی پلن‌ها با آزمون تعیین سطح رایگان شروع می‌شوند.</p>
          </div>
          <p className="flex max-w-sm items-start gap-3 text-base text-ink">
            <ShieldCheck size={22} className="mt-0.5 shrink-0 text-success" aria-hidden />
            اگر تا پایان جلسه‌ی دوم راضی نبودی، کل مبلغ را برمی‌گردانیم.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p) => {
            const sessions = p.features.slice(0, p.lead);
            const extras = p.features.slice(p.lead);
            return (
              <li
                key={p.name}
                className={cn('flex flex-col rounded-xl bg-raised p-6 sm:p-8', p.featured ? 'border-2 border-brand-600' : 'border border-rule')}
              >
                <h3 className="text-2xl font-bold text-ink">{p.name}</h3>
                <p className="mt-1 text-base text-body">{p.desc}</p>

                <p className="mt-6 flex flex-wrap items-baseline gap-x-2 border-b border-rule pb-6">
                  <span className="num text-[2.5rem] font-extrabold leading-none text-ink">{fa(p.price)}</span>
                  <span className="text-sm text-muted">تومان در ماه</span>
                </p>

                {/* What a month actually contains is the real difference between plans, so it leads. */}
                <div className="mt-6">
                  <p className="text-sm text-muted">در هر ماه</p>
                  <ul className="mt-2 space-y-1">
                    {sessions.map((f) => (
                      <li key={f} className="text-lg font-bold text-ink">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="mt-6 flex-1 space-y-3 text-[0.9375rem] text-body">
                  {extras.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check size={18} className="mt-1 shrink-0 text-brand-600" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className={cn('btn-lg mt-8 w-full', p.featured ? 'btn-primary' : 'btn-secondary')}>
                  شروع با پلن {p.name}
                </Link>
              </li>
            );
          })}
        </ul>
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
          <p className="mt-4 text-base text-body">جوابت این‌جا نبود؟ هر روز از ۸ تا ۲۲ پاسخ می‌دهیم.</p>
          <a href="tel:+982191000000" dir="ltr" className="link mt-2 inline-flex min-h-11 items-center text-lg">
            021-9100 0000
          </a>
        </div>
        <div className="border-t border-ink/70 lg:col-span-8">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-rule" open={i === 0}>
              <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-bold leading-8 text-ink transition-colors duration-120 hover:text-brand-600 sm:text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={22} aria-hidden className="mt-1 shrink-0 text-muted transition-transform duration-180 ease-out group-open:rotate-180" />
              </summary>
              <p className="max-w-[62ch] pb-8 pl-10 text-base leading-[1.95] text-body">{f.a}</p>
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
