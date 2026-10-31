import Link from 'next/link';
import { Check, ChevronDown, MessageSquareQuote } from 'lucide-react';
import Phrasebook from '@/components/site/Phrasebook';
import SectionTitle from '@/components/site/SectionTitle';
import SampleBadge from '@/components/site/SampleBadge';
import TeacherCard from '@/components/site/TeacherCard';
import SessionTimeline from '@/components/site/SessionTimeline';
import CtaBand from '@/components/site/CtaBand';
import ArticleCard from '@/components/magazine/ArticleCard';
import { faqs, languages, plans, teachers } from '@/lib/data';
import { featuredArticle, getArticles } from '@/lib/magazine';
import { cn, fa } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Languages />
      <OnlineClasses />
      <Week />
      <Teachers />
      <Pricing />
      <Magazine />
      <Testimonials />
      <Faq />
      <CtaBand
        title="اول با یک مشاور حرف بزن."
        desc="مشاوره و تعیین سطح رایگان است و تعهدی برای ثبت‌نام ایجاد نمی‌کند."
        primary={{ href: '/consultation', label: 'درخواست تعیین سطح' }}
        secondary={{ href: '/online-classes', label: 'کلاس‌ها چطور برگزار می‌شوند' }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="container-x grid grid-cols-1 items-center gap-14 pb-24 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32 lg:pt-16">
      <div>
        <h1 className="h-display text-[3.4rem] sm:text-7xl lg:text-[5.2rem]">به زبان تازه حرف بزن، از همین هفته.</h1>
        <p className="mt-7 max-w-lg text-lg leading-9 text-slate-600">
          کلاس‌های آنلاین زنده‌ی انگلیسی، آلمانی و فرانسوی، با گروه کوچک یا خصوصی. اول سطحت را رایگان می‌سنجیم، بعد کلاس و استاد مناسبت را با هم انتخاب می‌کنیم.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href="/consultation" className="btn-primary px-7 py-3.5 text-base">تعیین سطح رایگان</Link>
          <Link href="/online-classes" className="text-base font-semibold text-brand-700 underline decoration-rule decoration-2 underline-offset-8 hover:decoration-brand-500">
            کلاس‌ها چطور برگزار می‌شوند؟
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-3 border-t border-rule pt-6">
          {languages.map((l, i) => (
            <li key={l.slug} className={cn(i > 0 && 'border-r border-rule pr-4 sm:pr-6')}>
              <Link href={`/languages/${l.slug}`} className="group block">
                <span lang={l.code} dir="ltr" className="block font-display text-2xl font-semibold text-ink group-hover:text-brand-700 sm:text-3xl">{l.native}</span>
                <span className="text-sm text-slate-500">{l.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Phrasebook />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'مشاوره و تعیین سطح', time: 'گفت‌وگوی کوتاه، رایگان', desc: 'هدف و زمان آزادت را می‌پرسیم و سطحت را بر اساس CEFR می‌سنجیم.' },
    { title: 'انتخاب کلاس و استاد', time: 'گروهی یا خصوصی', desc: 'کلاسی هم‌سطح خودت و استادی متناسب با هدفت پیشنهاد می‌دهیم؛ انتخاب نهایی با توست.' },
    { title: 'کلاس زنده', time: '۲ یا ۳ جلسه در هفته', desc: 'با استاد و هم‌کلاسی‌ها حرف می‌زنی؛ بین جلسه‌ها تکلیف کوتاه و بازخورد استاد داری.' },
    { title: 'سنجش پایان سطح', time: 'در پایان هر سطح', desc: 'استاد پیشرفت هر مهارت را می‌سنجد و برای سطح بعد برنامه می‌چیند.' },
  ];
  return (
    <section id="how" className="scroll-mt-20 border-t border-rule bg-tint py-24">
      <div className="container-x">
        <SectionTitle title="از مشاوره تا اولین کلاس" desc="مسیر شروع در فرتاش چهار قدم دارد و هر قدم را با یک آدم واقعی برمی‌داری، نه یک فرم خودکار." />
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
      <SectionTitle title="سه زبان، از سطح صفر" desc="برای هر زبان دوره‌ی عمومی از A1 داریم و آمادگی آزمون‌های رسمی همان زبان." />
      <ul className="mt-12 border-t border-ink/80">
        {languages.map((l) => (
          <li key={l.code}>
            <Link
              href={`/languages/${l.slug}`}
              className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-rule py-6 transition-colors hover:bg-tint sm:grid-cols-[11rem_1fr_auto] sm:px-3"
            >
              <span lang={l.code} dir="ltr" className="font-display text-4xl font-semibold text-ink sm:text-right">{l.native}</span>
              <span className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-auto">
                <span className="text-lg font-bold text-ink">{l.name}</span>
                <span className="mr-3 text-sm text-slate-500">{l.tracks}</span>
              </span>
              <span className="row-start-1 text-left text-sm font-semibold text-brand-700 sm:row-start-auto">
                <span className="underline decoration-rule decoration-2 underline-offset-[6px] group-hover:decoration-brand-500">صفحه‌ی {l.name}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function OnlineClasses() {
  const points = [
    { title: 'بدون رفت‌وآمد', desc: 'از خانه یا محل کار وصل می‌شوی؛ وقتی که در ترافیک می‌گذشت، صرف تمرین می‌شود.' },
    { title: 'ساعت‌هایی که با کار جور است', desc: 'کلاس صبح، عصر یا شب را بر اساس برنامه‌ات انتخاب می‌کنی.' },
    { title: 'گروه کوچک یا خصوصی', desc: 'در گروه کوچک فرصت حرف زدن داری؛ در کلاس خصوصی همه‌ی جلسه برای توست.' },
    { title: 'استادی که دنبالت می‌کند', desc: 'تکلیف‌ها، بازخوردها و پیشرفتت در یک پنل جمع می‌شود و استاد آن را می‌بیند.' },
  ];
  return (
    <section className="border-y border-rule bg-navy py-24 text-white">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-[2.6rem] font-bold leading-[1.15] sm:text-5xl">کلاس آنلاین، ولی زنده و رو در رو.</h2>
            <p className="mt-4 max-w-xl text-[17px] leading-8 text-white/75">
              فرتاش فقط کلاس زنده برگزار می‌کند. دوره‌ی ضبط‌شده نداریم؛ هر جلسه با استاد و هم‌کلاسی‌هایت است.
            </p>
          </div>
          <Link href="/online-classes" className="justify-self-start text-base font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-8 hover:decoration-white lg:justify-self-end">
            درباره‌ی کلاس‌های آنلاین
          </Link>
        </div>
        <SessionTimeline dark className="mt-14" />
        <dl className="mt-16 grid gap-x-10 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title}>
              <dt className="font-bold">{p.title}</dt>
              <dd className="mt-2 text-[15px] leading-7 text-white/70">{p.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Week() {
  const days = [
    { d: 'شنبه', what: 'کلاس گروهی', detail: '۹۰ دقیقه، زنده', kind: 'class' },
    { d: 'یکشنبه', what: 'مرور یادداشت‌ها', detail: 'نکته‌های جلسه‌ی قبل', kind: 'self' },
    { d: 'دوشنبه', what: 'تکلیف رایتینگ', detail: 'ارسال در پنل، بازخورد استاد', kind: 'self' },
    { d: 'سه‌شنبه', what: 'کلاس گروهی', detail: '۹۰ دقیقه، زنده', kind: 'class' },
    { d: 'چهارشنبه', what: 'کلاب مکالمه', detail: 'یک موضوع، ۶۰ دقیقه حرف زدن', kind: 'club' },
    { d: 'پنجشنبه', what: 'آزمونک واژگان', detail: '۱۰ دقیقه در پنل', kind: 'self' },
    { d: 'جمعه', what: 'استراحت', detail: '', kind: 'off' },
  ];
  const tone: Record<string, string> = {
    class: 'bg-brand-600 text-white',
    club: 'bg-navy text-white',
    self: 'bg-paper text-ink border border-rule',
    off: 'text-slate-400 border border-dashed border-rule',
  };
  return (
    <section className="border-b border-rule bg-tint py-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionTitle title="یک هفته‌ی معمولی در فرتاش" />
          <p className="max-w-lg text-[17px] leading-8 text-slate-600">
            نمونه‌ی برنامه‌ی سطح B1 با کلاس گروهی و کلاب مکالمه. کلاس‌ها زنده‌اند و بین دو جلسه، کارهای کوتاهی در پنل داری که استاد پیگیری‌شان می‌کند.
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
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-navy" /> کلاب مکالمه</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm border border-rule bg-paper" /> کار شخصی در پنل</span>
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  return (
    <section id="teachers" className="container-x scroll-mt-20 py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionTitle title="اساتید" desc="هر مدرس روی چند سطح و یک هدف مشخص تمرکز دارد؛ در پروفایلش می‌بینی با چه کسانی بهتر کار می‌کند." />
        <Link href="/teachers" className="btn-ghost shrink-0">همه‌ی اساتید</Link>
      </div>
      <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.slice(0, 4).map((t) => (
          <TeacherCard key={t.id} t={t} />
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-500">پروفایل‌های این بخش نمونه‌اند و پس از معرفی مدرس‌ها با اطلاعات و تصویر واقعی جایگزین می‌شوند.</p>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-rule bg-tint py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle title="شهریه‌ی ماهانه" desc="شهریه بر اساس نوع کلاس است، نه زبان. پیش از ثبت‌نام، در مشاوره مبلغ دقیق کلاس پیشنهادی را می‌گوییم." />
          <SampleBadge label="مبالغ نمونه" className="self-start sm:self-end" />
        </div>
        <div className="mt-12 grid overflow-hidden rounded-[20px] border border-rule bg-paper lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} className={cn('relative flex flex-col p-8', i > 0 && 'border-t border-rule lg:border-r lg:border-t-0', p.featured && 'bg-brand-50/40')}>
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
              <Link href="/consultation" className={cn('mt-8 w-full', p.featured ? 'btn-primary' : 'btn-ghost')}>مشاوره برای کلاس {p.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Magazine() {
  const lead = featuredArticle();
  const rest = getArticles().filter((a) => a.slug !== lead.slug).slice(0, 3);
  return (
    <section className="container-x py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionTitle title="از مجله‌ی فرتاش" desc="نکته‌های گرامر، واژگان، تلفظ و آمادگی آزمون برای هر سه زبان. مقاله‌های فعلی نمونه‌اند." />
        <Link href="/magazine" className="btn-ghost shrink-0">ورود به مجله</Link>
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <ArticleCard article={lead} />
        <div className="lg:border-r lg:border-rule lg:pr-10 [&>article:first-child]:pt-0 [&>article:last-child]:border-0">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} variant="row" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-rule bg-tint py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <SectionTitle
          title="تجربه‌ی زبان‌آموزان"
          desc="این‌جا فقط تجربه‌ی زبان‌آموزان واقعی فرتاش منتشر می‌شود؛ با نام و اجازه‌ی خودشان، بعد از پایان دست‌کم یک سطح."
        />
        <div className="rounded-[20px] border border-dashed border-rule bg-paper p-8 sm:p-10">
          <MessageSquareQuote size={28} className="text-brand-600" aria-hidden />
          <p className="mt-5 font-display text-3xl font-semibold leading-snug text-ink">هنوز تجربه‌ای منتشر نشده است.</p>
          <p className="mt-3 max-w-md leading-8 text-slate-600">
            اولین تجربه‌ها پس از پایان دوره‌ی اول کلاس‌ها، با نام، زبان و سطح زبان‌آموز در همین بخش می‌آیند.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3" aria-hidden>
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2 rounded-xl border border-rule p-4">
                <div className="h-2 w-full rounded bg-slate-100" />
                <div className="h-2 w-4/5 rounded bg-slate-100" />
                <div className="h-2 w-3/5 rounded bg-slate-100" />
                <div className="flex items-center gap-2 pt-3">
                  <div className="h-7 w-7 rounded-full bg-slate-100" />
                  <div className="h-2 w-16 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
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
            جوابت این‌جا نبود؟ در <Link href="/consultation" className="font-semibold text-brand-700 hover:underline">گفت‌وگوی مشاوره</Link> بپرس.
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
