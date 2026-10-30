import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronDown, Star } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Phrasebook from '@/components/site/Phrasebook';
import { faqs, languages, plans, teachers, testimonials } from '@/lib/data';
import { cn, fa } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Languages />
        <Week />
        <Teachers />
        <Pricing />
        <Testimonials />
        <Panels />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

function SectionTitle({ title, desc, className }: { title: string; desc?: string; className?: string }) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <h2 className="h-display text-[2.6rem] sm:text-5xl">{title}</h2>
      {desc && <p className="mt-4 max-w-xl text-[17px] leading-8 text-slate-600">{desc}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="container-x grid grid-cols-1 items-center gap-14 pb-24 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32 lg:pt-16">
      <div>
        <h1 className="h-display text-[3.4rem] sm:text-7xl lg:text-[5.2rem]">
          به زبان تازه حرف بزن، از همین هفته.
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-9 text-slate-600">
          کلاس‌های زنده با گروه‌های حداکثر ۸ نفره، برای انگلیسی، آلمانی، فرانسوی، ترکی، اسپانیایی و عربی. اول سطحت را رایگان می‌سنجیم، بعد برنامه‌ات را با هم می‌چینیم.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href="/register" className="btn-primary px-7 py-3.5 text-base">تعیین سطح رایگان</Link>
          <Link href="#how" className="text-base font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-8 hover:decoration-brand-500">
            کلاس‌ها چطور برگزار می‌شوند؟
          </Link>
        </div>
        <div className="mt-12 flex items-center gap-4 border-t border-rule pt-6">
          <div className="flex shrink-0 -space-x-2.5 space-x-reverse">
            {[9, 5, 7, 6].map((n) => (
              <Image key={n} src={`/images/people/${n}.jpg`} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-[3px] ring-white" />
            ))}
          </div>
          <p className="text-sm leading-6 text-slate-600">
            <span className="font-bold text-ink">{fa(10000)} زبان‌آموز</span> در یک سال گذشته با فرتاش کلاس رفتند،
            <br className="hidden sm:block" /> با میانگین امتیاز <span className="font-bold text-ink">۴٫۹ از ۵</span> به کلاس‌ها.
          </p>
        </div>
      </div>
      <Phrasebook />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'آزمون تعیین سطح', time: '۲۰ دقیقه، آنلاین', desc: 'آزمون چهار مهارتی بر اساس CEFR؛ نتیجه را همان لحظه می‌بینی.' },
    { title: 'گفتگو با مشاور', time: 'تماس ۱۵ دقیقه‌ای', desc: 'هدفت، زمان آزادت و سطحت را کنار هم می‌گذاریم و کلاس و استاد مناسب را پیشنهاد می‌دهیم.' },
    { title: 'کلاس زنده', time: '۲ یا ۳ جلسه در هفته', desc: 'با گروه کوچک یا خصوصی. ویدیوی هر جلسه در پنلت می‌ماند تا هر وقت خواستی مرور کنی.' },
    { title: 'آزمون پایان سطح', time: 'هر ۱۰ تا ۱۲ هفته', desc: 'با قبولی، گواهی با کد استعلام می‌گیری و به سطح بعد می‌روی.' },
  ];
  return (
    <section id="how" className="scroll-mt-20 border-t border-rule bg-tint py-24">
      <div className="container-x">
        <SectionTitle title="از ثبت‌نام تا اولین کلاس" desc="بیشتر زبان‌آموزان کمتر از یک هفته بعد از ثبت‌نام، اولین جلسه‌شان را دارند." />
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <li key={s.title} className="relative lg:border-r lg:border-rule lg:px-7 lg:first:border-r-0 lg:first:pr-0">
              <span className="font-display text-6xl font-bold leading-none text-brand-600">{fa(i + 1)}</span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-brand-700">{s.time}</p>
              <p className="mt-3 text-[15px] leading-7 text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section id="languages" className="container-x scroll-mt-20 py-24">
      <SectionTitle title="شش زبان، از سطح صفر" desc="برای هر زبان دوره‌ی عمومی داریم و برای بیشترشان آمادگی آزمون‌های رسمی." />
      <ul className="mt-12 border-t border-ink/80">
        {languages.map((l) => (
          <li key={l.code}>
            <Link
              href="/register"
              className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-rule py-6 transition-colors hover:bg-tint sm:grid-cols-[11rem_1fr_auto] sm:px-3"
            >
              <span lang={l.code} dir={l.code === 'ar' ? 'rtl' : 'ltr'} className="font-display text-4xl font-semibold text-ink sm:text-right">
                {l.native}
              </span>
              <span className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-auto">
                <span className="text-lg font-bold text-ink">{l.name}</span>
                <span className="mr-3 text-sm text-slate-500">{l.tracks}</span>
              </span>
              <span className="row-start-1 text-left text-sm text-slate-500 sm:row-start-auto">
                {fa(l.teachers)} استاد، {fa(l.students)} زبان‌آموز
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Week() {
  const days = [
    { d: 'شنبه', what: 'کلاس گروهی', detail: '۹۰ دقیقه، حداکثر ۸ نفر', kind: 'class' },
    { d: 'یکشنبه', what: 'مرور ویدیو', detail: 'فایل جلسه در پنل', kind: 'self' },
    { d: 'دوشنبه', what: 'تکلیف رایتینگ', detail: 'بازخورد استاد تا ۴۸ ساعت', kind: 'self' },
    { d: 'سه‌شنبه', what: 'کلاس گروهی', detail: '۹۰ دقیقه، حداکثر ۸ نفر', kind: 'class' },
    { d: 'چهارشنبه', what: 'کلاب مکالمه', detail: 'یک موضوع، ۶۰ دقیقه حرف زدن', kind: 'club' },
    { d: 'پنجشنبه', what: 'آزمونک واژگان', detail: '۱۰ دقیقه در پنل', kind: 'self' },
    { d: 'جمعه', what: 'استراحت', detail: '', kind: 'off' },
  ];
  const tone: Record<string, string> = {
    class: 'bg-brand-600 text-white',
    club: 'bg-ink text-white',
    self: 'bg-white text-ink border border-rule',
    off: 'text-slate-400 border border-dashed border-rule',
  };
  return (
    <section className="border-y border-rule bg-tint py-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionTitle title="یک هفته‌ی معمولی در فرتاش" />
          <p className="max-w-lg text-[17px] leading-8 text-slate-600">
            برنامه‌ی سطح B1 با پلن حرفه‌ای. کلاس‌ها زنده‌اند و بین دو جلسه، کارهای کوتاهی در پنل داری که استاد پیگیری‌شان می‌کند.
          </p>
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {days.map((x) => (
            <li key={x.d} className={cn('flex min-h-40 flex-col rounded-xl p-4', tone[x.kind])}>
              <span className={cn('text-xs', x.kind === 'class' || x.kind === 'club' ? 'text-white/75' : 'text-slate-500')}>{x.d}</span>
              <span className="mt-auto font-bold">{x.what}</span>
              {x.detail && <span className={cn('mt-1 text-xs leading-5', x.kind === 'class' || x.kind === 'club' ? 'text-white/80' : 'text-slate-500')}>{x.detail}</span>}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600">
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-brand-600" /> کلاس زنده با استاد</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-ink" /> کلاب مکالمه</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm border border-rule bg-white" /> کار شخصی در پنل</span>
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  return (
    <section id="teachers" className="container-x scroll-mt-20 py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionTitle title="اساتید" desc="هر استاد قبل از شروع، مصاحبه و یک کلاس آزمایشی با تیم آموزشی را گذرانده است." />
        <Link href="/register" className="btn-ghost shrink-0">دیدن همه‌ی اساتید</Link>
      </div>
      <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((t) => (
          <article key={t.id}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-tint">
              <Image src={t.photo} alt={t.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink">{t.name}</h3>
            <p className="text-sm text-slate-600">{t.lang}، {t.title}</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <Star size={14} className="text-amber-500" fill="currentColor" />
              <span className="font-semibold text-ink">{fa(t.rating.toString()).replace('.', '٫')}</span>
              <span>از {fa(t.students)} زبان‌آموز، {fa(t.years)} سال تدریس</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-rule bg-tint py-24">
      <div className="container-x">
        <SectionTitle title="شهریه‌ی ماهانه" desc="اگر تا پایان جلسه‌ی دوم راضی نبودی، کل مبلغ را برمی‌گردانیم." />
        <div className="mt-12 grid overflow-hidden rounded-[20px] border border-rule bg-white lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={cn(
                'relative flex flex-col p-8',
                i > 0 && 'border-t border-rule lg:border-r lg:border-t-0',
                p.featured && 'outline outline-2 -outline-offset-2 outline-brand-600',
              )}
            >
              {p.featured && <p className="mb-3 text-sm font-semibold text-brand-700">انتخاب بیشتر زبان‌آموزان</p>}
              <h3 className="font-display text-3xl font-bold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <p className="mt-6">
                <span className="font-display text-5xl font-bold text-ink">{fa(p.price)}</span>
                <span className="mr-2 text-sm text-slate-500">تومان در ماه</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3 text-[15px] text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check size={18} className="mt-0.5 shrink-0 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register" className={cn('mt-8 w-full', p.featured ? 'btn-primary' : 'btn-ghost')}>
                شروع با پلن {p.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [lead, ...rest] = testimonials;
  return (
    <section className="container-x py-24">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <figure>
          <blockquote className="font-display text-[2rem] font-semibold leading-[1.45] text-ink sm:text-[2.4rem]">«{lead.text}»</blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <Image src={lead.photo} alt={lead.name} width={52} height={52} className="h-[52px] w-[52px] rounded-full object-cover" />
            <div>
              <p className="font-bold text-ink">{lead.name}</p>
              <p className="text-sm text-slate-500">{lead.role}</p>
            </div>
          </figcaption>
        </figure>
        <div className="space-y-8 border-rule lg:border-r lg:pr-12">
          {rest.map((t) => (
            <figure key={t.name} className="border-b border-rule pb-8 last:border-0 last:pb-0">
              <blockquote className="leading-8 text-slate-700">«{t.text}»</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <Image src={t.photo} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Panels() {
  const panels = [
    { title: 'زبان‌آموز', desc: 'برنامه‌ی کلاس‌ها، ویدیوی جلسات، تکالیف و نمودار پیشرفت هر مهارت.', href: '/student', cta: 'دیدن پنل زبان‌آموز' },
    { title: 'استاد', desc: 'حضور و غیاب، تصحیح تکالیف و پیگیری زبان‌آموزانی که عقب افتاده‌اند.', href: '/teacher', cta: 'دیدن پنل استاد' },
    { title: 'مدیر', desc: 'کاربران، دوره‌ها، درخواست‌های همکاری و گزارش پرداخت‌ها.', href: '/admin', cta: 'دیدن پنل مدیریت' },
  ];
  return (
    <section className="border-t border-rule bg-tint py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
        <SectionTitle title="هر نقش، یک پنل" />
        <div className="grid gap-8 sm:grid-cols-3">
          {panels.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-600">{p.desc}</p>
              <Link href={p.href} className="mt-3 inline-block text-sm font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-brand-500">
                {p.cta}
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
    <section id="faq" className="container-x scroll-mt-20 py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionTitle title="سوال‌های رایج" />
          <p className="mt-4 text-[15px] leading-7 text-slate-600">
            جوابت این‌جا نبود؟ با <span dir="ltr">021-9100 0000</span> تماس بگیر؛ هر روز از ۸ تا ۲۲.
          </p>
        </div>
        <div className="border-t border-ink/80">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-rule" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={20} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="-mt-1 max-w-2xl pb-6 leading-8 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="container-x pb-24">
      <div className="grid items-center gap-8 rounded-[20px] bg-ink px-8 py-14 text-white sm:px-14 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">سطحت را در ۲۰ دقیقه بسنج.</h2>
          <p className="mt-3 max-w-xl leading-8 text-white/75">آزمون تعیین سطح و تماس با مشاور رایگان است و تعهدی برای ثبت‌نام ایجاد نمی‌کند.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/register" className="btn bg-white px-7 py-3.5 text-base text-ink hover:bg-brand-50">شروع آزمون</Link>
          <Link href="/login" className="btn border border-white/30 px-6 py-3.5 text-base text-white hover:bg-white/10">ورود به پنل</Link>
        </div>
      </div>
    </section>
  );
}
