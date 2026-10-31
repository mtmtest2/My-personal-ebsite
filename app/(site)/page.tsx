import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Phrasebook from '@/components/site/Phrasebook';
import SectionTitle from '@/components/site/SectionTitle';
import SampleBadge from '@/components/site/SampleBadge';
import TeacherCard from '@/components/site/TeacherCard';
import ClassWindow from '@/components/site/ClassWindow';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/site/CtaBand';
import ArticleCard from '@/components/magazine/ArticleCard';
import { contact, faqs, languages, plans, teachers } from '@/lib/data';
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
        <ul className="mt-12 grid grid-cols-3 gap-2">
          {languages.map((l) => (
            <li key={l.slug} className="rounded-xl bg-tint px-4 py-3 transition-colors hover:bg-brand-50">
              <Link href={`/languages/${l.slug}`} className="group block">
                <span lang={l.code} dir="ltr" className="block font-display text-2xl font-semibold text-ink group-hover:text-brand-700 sm:text-3xl">{l.native}</span>
                <span className="text-sm text-slate-600">{l.name}</span>
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
    <section id="how" className="scroll-mt-20 bg-tint py-24">
      <div className="container-x">
        <SectionTitle title="از مشاوره تا اولین کلاس" desc="مسیر شروع در فرتاش چهار قدم دارد و هر قدم را با یک آدم واقعی برمی‌داری، نه یک فرم خودکار." />
        <ol className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="flex flex-col rounded-2xl bg-paper p-6">
              <h3 className="font-display text-[1.9rem] font-bold leading-tight text-ink">{s.title}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-700">{s.time}</p>
              <p className="mt-4 text-[15px] leading-7 text-slate-700">{s.desc}</p>
            </Reveal>
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
      <ul className="mt-12 space-y-2">
        {languages.map((l, i) => (
          <Reveal as="li" key={l.code} delay={i * 80}>
            <Link
              href={`/languages/${l.slug}`}
              className="group grid items-center gap-x-8 gap-y-3 rounded-2xl bg-tint px-6 py-6 transition-colors hover:bg-brand-50 sm:px-8 lg:grid-cols-[12rem_1fr_minmax(0,22rem)]"
            >
              <span lang={l.code} dir="ltr" className="text-right font-display text-5xl font-semibold text-ink">{l.native}</span>
              <span>
                <span className="block text-lg font-bold text-ink">{l.name}</span>
                <span className="mt-1 block text-[15px] leading-7 text-slate-700">{l.tracks}</span>
              </span>
              <span lang={l.code} dir="ltr" className="text-left font-display text-2xl leading-snug text-slate-700">
                {l.phrase.before}<span className="mark">{l.phrase.marked}</span>{l.phrase.after}
              </span>
            </Link>
          </Reveal>
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
    <section className="overflow-hidden bg-navy py-24 text-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <Reveal>
            <h2 className="font-display text-[2.6rem] font-bold leading-[1.15] sm:text-5xl">کلاس آنلاین، ولی زنده.</h2>
            <p className="mt-4 max-w-md text-[17px] leading-8 text-white/80">
              فرتاش فقط کلاس زنده برگزار می‌کند. استاد و هم‌کلاسی‌هایت را می‌بینی، حرف می‌زنی و همان لحظه اصلاح می‌شوی.
            </p>
          </Reveal>
          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 70}>
                <dt className="font-bold">{p.title}</dt>
                <dd className="mt-1.5 text-[15px] leading-7 text-white/75">{p.desc}</dd>
              </Reveal>
            ))}
          </dl>
          <Link href="/online-classes" className="btn mt-10 bg-white text-navy hover:bg-white/90">درباره‌ی کلاس‌های آنلاین</Link>
        </div>
        <Reveal delay={150}>
          <ClassWindow className="text-white" />
        </Reveal>
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
    self: 'bg-paper text-ink',
    off: 'bg-transparent text-slate-700',
  };
  return (
    <section className="bg-tint py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <SectionTitle
            title="یک هفته‌ی معمولی در فرتاش"
            desc="نمونه‌ی برنامه‌ی سطح B1 با کلاس گروهی و کلاب مکالمه. کلاس‌ها زنده‌اند و بین دو جلسه، کارهای کوتاهی در پنل داری که استاد پیگیری‌شان می‌کند."
          />
          <Reveal image className="relative aspect-[3/2] overflow-hidden rounded-[20px]">
            <Image src="/images/scenes/notebook-coffee.jpg" alt="دفتر یادداشت باز، صفحه‌کلید و یک فنجان قهوه روی میز" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </Reveal>
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {days.map((x) => (
            <li key={x.d} className={cn('flex min-h-40 flex-col rounded-xl p-4', tone[x.kind])}>
              <span className={cn('text-[13px]', x.kind === 'class' || x.kind === 'club' ? 'text-white/80' : 'text-slate-600')}>{x.d}</span>
              <span className="mt-auto font-bold">{x.what}</span>
              {x.detail && <span className={cn('mt-1 text-[13px] leading-5', x.kind === 'class' || x.kind === 'club' ? 'text-white/85' : 'text-slate-600')}>{x.detail}</span>}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-slate-700">
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-brand-600" /> کلاس زنده با استاد</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-navy" /> کلاب مکالمه</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-paper" /> کار شخصی در پنل</span>
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
        {teachers.slice(0, 4).map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <TeacherCard t={t} />
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-500">پروفایل‌های این بخش نمونه‌اند و پس از معرفی مدرس‌ها با اطلاعات و تصویر واقعی جایگزین می‌شوند.</p>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-tint py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle title="شهریه‌ی ماهانه" desc="شهریه بر اساس نوع کلاس است، نه زبان. پیش از ثبت‌نام، در مشاوره مبلغ دقیق کلاس پیشنهادی را می‌گوییم." />
          <SampleBadge label="مبالغ نمونه" className="self-start sm:self-end" />
        </div>
        <ul className="mt-12 space-y-3">
          {plans.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 90}
              className={cn('grid items-center gap-x-10 gap-y-4 rounded-[20px] px-6 py-7 sm:grid-cols-[1fr_auto] sm:px-8 lg:grid-cols-[14rem_1fr_auto]', p.featured ? 'bg-navy text-white' : 'bg-paper')}
            >
              <div>
                <h3 className={cn('font-display text-[2rem] font-bold leading-tight', p.featured ? 'text-white' : 'text-ink')}>{p.name}</h3>
                <p className={cn('mt-1 text-sm', p.featured ? 'text-white/80' : 'text-slate-700')}>{p.desc}</p>
              </div>
              <p className={cn('order-last text-[15px] leading-8 sm:col-span-2 lg:order-none lg:col-span-1', p.featured ? 'text-white/85' : 'text-slate-700')}>{p.features.join('، ')}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:flex-col sm:items-end">
                <p className="whitespace-nowrap">
                  <span className={cn('font-display text-4xl font-bold', p.featured ? 'text-white' : 'text-ink')}>{fa(p.price)}</span>
                  <span className={cn('mr-2 text-sm', p.featured ? 'text-white/75' : 'text-slate-600')}>تومان در ماه</span>
                </p>
                <Link href="/consultation" className={p.featured ? 'btn bg-white text-navy hover:bg-white/90' : 'btn-primary'}>مشاوره برای این کلاس</Link>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Magazine() {
  const lead = getArticles().find((a) => a.cover.image) ?? featuredArticle();
  const rest = getArticles().filter((a) => a.slug !== lead.slug).slice(0, 3);
  return (
    <section className="container-x py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionTitle title="از مجله‌ی فرتاش" desc="نکته‌های گرامر، واژگان، تلفظ و آمادگی آزمون برای هر سه زبان. مقاله‌های فعلی نمونه‌اند." />
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <Reveal>
          <ArticleCard article={lead} />
        </Reveal>
        <div className="space-y-2 [&>article:first-child]:pt-0">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} variant="row" />
          ))}
          <Link href="/magazine" className="btn-ghost mt-4">همه‌ی مقاله‌های مجله</Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-tint py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal image className="relative order-last aspect-[3/2] overflow-hidden rounded-[20px] lg:order-none">
          <Image src="/images/scenes/handwriting.jpg" alt="دستی که با خودکار در دفتر یادداشت می‌نویسد" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
        </Reveal>
        <div>
          <SectionTitle
            title="تجربه‌ی زبان‌آموزان"
            desc="این‌جا فقط تجربه‌ی زبان‌آموزان واقعی فرتاش منتشر می‌شود؛ با نام و اجازه‌ی خودشان، بعد از پایان دست‌کم یک سطح."
          />
          <Reveal delay={120} className="mt-8 rounded-2xl bg-paper p-6">
            <p className="font-display text-2xl font-semibold leading-snug text-ink">هنوز تجربه‌ای منتشر نشده است.</p>
            <p className="mt-2 leading-8 text-slate-700">اولین تجربه‌ها پس از پایان دوره‌ی اول کلاس‌ها، با نام، زبان و سطح زبان‌آموز در همین بخش می‌آیند.</p>
          </Reveal>
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
            جوابت این‌جا نبود؟ با <a href={contact.phoneHref} dir="ltr" className="font-semibold text-brand-700 hover:underline">{contact.phone}</a> تماس بگیر یا در <Link href="/consultation" className="font-semibold text-brand-700 hover:underline">گفت‌وگوی مشاوره</Link> بپرس.
          </p>
          <Reveal image className="relative mt-8 hidden aspect-[3/2] overflow-hidden rounded-[20px] lg:block">
            <Image src="/images/scenes/desk-laptop.jpg" alt="میز کار با لپ‌تاپ، نمایشگر و چراغ مطالعه" fill sizes="360px" className="object-cover" />
          </Reveal>
        </div>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <details key={f.q} className="group rounded-xl bg-tint px-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={20} className="shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="-mt-1 max-w-2xl pb-6 leading-8 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
