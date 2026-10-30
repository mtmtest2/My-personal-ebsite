import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Award,
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  MessagesSquare,
  Mic,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  UserPlus,
  Users,
  Video,
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { faqs, languages, plans, teachers, testimonials } from '@/lib/data';
import { cn, fa } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky2-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
        <Navbar />
        <Hero />
      </div>
      <main>
        <Stats />
        <HowItWorks />
        <Languages />
        <Features />
        <Panels />
        <Teachers />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="section-eyebrow">
        <Sparkles size={14} /> {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-8 text-slate-500">{desc}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="container-x relative grid items-center gap-14 pb-20 pt-10 lg:grid-cols-2 lg:pb-28 lg:pt-16">
      <div>
        <span className="section-eyebrow">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          ثبت‌نام ترم پاییز آغاز شد
        </span>
        <h1 className="mt-6 text-4xl font-black leading-[1.35] text-slate-900 sm:text-5xl lg:text-[3.4rem]">
          زبان جدید را
          <br />
          <span className="text-gradient">زنده و هدفمند</span> یاد بگیر
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-9 text-slate-500">
          کلاس‌های آنلاین زنده با اساتید مجرب، برنامه‌ی مطالعه‌ی اختصاصی و پنلی که پیشرفتت را قدم‌به‌قدم نشان می‌دهد. از اولین کلمه تا آزمون‌های بین‌المللی، کنارت هستیم.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/register" className="btn-gradient px-7 py-3.5 text-base">
            تعیین سطح رایگان
            <ArrowLeft size={18} />
          </Link>
          <Link href="#how" className="btn-ghost px-6 py-3.5 text-base">
            <PlayCircle size={18} className="text-brand-600" />
            روش کار فرتاش
          </Link>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3 space-x-reverse">
            {[9, 5, 7, 6, 10].map((n) => (
              <Image key={n} src={`/images/people/${n}.jpg`} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-4 ring-white" />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <span className="mr-1 text-sm font-bold text-slate-800">۴٫۹</span>
            </div>
            <p className="text-sm text-slate-500">بیش از {fa(10000)} زبان‌آموز راضی</p>
          </div>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-brand-gradient opacity-90" />
      <div className="relative rounded-[2.5rem] bg-white p-5 shadow-soft">
        {/* Live class mock */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900">
          <Image src="/images/people/4.jpg" alt="کلاس زنده" width={600} height={420} className="h-64 w-full object-cover opacity-90 sm:h-72" priority />
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> زنده
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/15 p-3 text-white backdrop-blur-md">
            <div>
              <p className="text-sm font-bold">IELTS Speaking — Part 2</p>
              <p className="text-xs text-white/80">سارا محمدی · ۸ زبان‌آموز</p>
            </div>
            <div className="flex gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20"><Mic size={16} /></span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20"><Video size={16} /></span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: 'Speaking', v: 72, c: 'bg-brand-500' },
            { k: 'Listening', v: 81, c: 'bg-sky2-400' },
            { k: 'Writing', v: 58, c: 'bg-violet-500' },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl bg-slate-50 p-3">
              <p className="text-[11px] font-medium text-slate-500" dir="ltr">{s.k}</p>
              <p className="mt-1 text-lg font-extrabold text-slate-800">{fa(s.v)}٪</p>
              <div className="mt-2 h-1.5 rounded-full bg-slate-200">
                <div className={cn('h-1.5 rounded-full', s.c)} style={{ width: `${s.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -right-4 top-24 hidden animate-float rounded-2xl bg-white p-3 shadow-soft sm:flex sm:items-center sm:gap-3 lg:-right-14">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-600"><Award size={20} /></span>
        <div>
          <p className="text-xs text-slate-500">سطح جدید</p>
          <p className="text-sm font-bold text-slate-800">B1 ← B2 🎉</p>
        </div>
      </div>
      <div className="absolute -left-4 bottom-28 hidden animate-float rounded-2xl bg-white p-3 shadow-soft [animation-delay:1.5s] sm:flex sm:items-center sm:gap-3 lg:-left-12">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-600"><CalendarCheck size={20} /></span>
        <div>
          <p className="text-xs text-slate-500">کلاس بعدی</p>
          <p className="text-sm font-bold text-slate-800">امروز، ۱۸:۰۰</p>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    { v: '+۱۰٬۰۰۰', l: 'زبان‌آموز فعال' },
    { v: '+۸۵', l: 'استاد مجرب و تأییدشده' },
    { v: '۶', l: 'زبان زنده دنیا' },
    { v: '۹۴٪', l: 'رضایت از کلاس‌ها' },
  ];
  return (
    <section className="container-x -mt-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-slate-100 shadow-card lg:grid-cols-4">
        {items.map((s) => (
          <div key={s.l} className="bg-white px-6 py-8 text-center">
            <p className="text-3xl font-black text-brand-700 sm:text-4xl">{s.v}</p>
            <p className="mt-2 text-sm text-slate-500">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: UserPlus, title: 'ثبت‌نام و تعیین سطح', desc: 'در چند دقیقه ثبت‌نام کن و در آزمون تعیین سطح رایگان (CEFR) شرکت کن.' },
    { icon: ClipboardCheck, title: 'برنامه‌ی اختصاصی', desc: 'مشاور آموزشی بر اساس هدف، سطح و زمان آزادت، بهترین کلاس و استاد را پیشنهاد می‌دهد.' },
    { icon: Video, title: 'کلاس زنده و تعاملی', desc: 'در کلاس‌های گروهی کوچک یا خصوصی شرکت کن؛ ویدیوی هر جلسه هم در پنلت می‌ماند.' },
    { icon: BarChart3, title: 'پیگیری و گواهی', desc: 'تمرین‌ها، آزمون‌ها و نمودار پیشرفت را در پنل ببین و در پایان هر سطح گواهی بگیر.' },
  ];
  return (
    <section id="how" className="container-x scroll-mt-24 py-24">
      <SectionHeader
        eyebrow="روش کار فرتاش"
        title={<>در ۴ قدم ساده، <span className="text-gradient">مسیر یادگیری</span> را شروع کن</>}
        desc="از لحظه‌ی ثبت‌نام تا دریافت گواهی، همه چیز شفاف، منظم و قابل‌پیگیری است."
      />
      <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-gradient-to-l from-brand-200 via-sky2-300 to-brand-200 lg:block" />
        {steps.map((s, i) => (
          <div key={s.title} className="card group relative p-6 text-center transition hover:-translate-y-1 hover:shadow-soft">
            <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
              <s.icon size={32} />
              <span className="absolute -left-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-black text-brand-700 shadow ring-1 ring-brand-100">
                {fa(i + 1)}
              </span>
            </div>
            <h3 className="mt-6 text-lg font-bold text-slate-900">{s.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section id="languages" className="scroll-mt-24 bg-slate-50/70 py-24">
      <div className="container-x">
        <SectionHeader eyebrow="زبان‌ها" title="کدام زبان را می‌خواهی یاد بگیری؟" desc="دوره‌های عمومی، مکالمه، تجاری و آمادگی آزمون‌های بین‌المللی برای هر سطح." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((l) => (
            <Link
              key={l.code}
              href="/register"
              className="card group flex items-center gap-5 p-5 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <span className={cn('grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-3xl shadow-lg', l.color)}>
                {l.flag}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">{l.name}</h3>
                  <span className="text-xs font-medium text-slate-400" dir="ltr">{l.native}</span>
                </div>
                <div className="mt-2 flex gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Users size={14} /> {fa(l.students)} زبان‌آموز</span>
                  <span className="flex items-center gap-1"><GraduationCap size={14} /> {fa(l.teachers)} استاد</span>
                </div>
              </div>
              <ArrowLeft size={18} className="text-slate-300 transition group-hover:-translate-x-1 group-hover:text-brand-600" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="container-x py-24">
      <SectionHeader eyebrow="چرا فرتاش؟" title="همه چیز برای یادگیری مؤثر، در یک جا" />
      <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-8 text-white lg:row-span-2">
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/10" />
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15"><Video size={28} /></span>
          <h3 className="mt-6 text-2xl font-extrabold">کلاس‌های زنده با گروه‌های کوچک</h3>
          <p className="mt-4 leading-8 text-brand-50/90">
            حداکثر ۸ نفر در هر کلاس؛ یعنی هر جلسه فرصت واقعی برای صحبت کردن داری. استاد اشتباهاتت را همان لحظه اصلاح می‌کند و ویدیوی کامل جلسه برای مرور در پنلت ذخیره می‌شود.
          </p>
          <ul className="relative mt-8 space-y-3 text-sm">
            {['کلاس‌های صبح، عصر و آخر هفته', 'تخته‌ی آنلاین و تمرین تعاملی', 'فایل ضبط‌شده‌ی همه‌ی جلسات'].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-white/20"><Check size={12} /></span>{t}</li>
            ))}
          </ul>
        </div>
        {[
          { icon: GraduationCap, title: 'اساتید گزینش‌شده', desc: 'فقط ۸٪ متقاضیان تدریس، پس از مصاحبه و کلاس آزمایشی پذیرفته می‌شوند.', c: 'bg-amber-100 text-amber-600' },
          { icon: MessagesSquare, title: 'کلاب‌های مکالمه', desc: 'هر هفته با موضوعات جذاب و زبان‌آموزان هم‌سطح، ترس از صحبت را کنار بگذار.', c: 'bg-violet-100 text-violet-600' },
          { icon: BookOpenCheck, title: 'تمرین و آزمون منظم', desc: 'تکالیف هفتگی، کوییز واژگان و آزمون پایان سطح با تصحیح دقیق استاد.', c: 'bg-emerald-100 text-emerald-600' },
          { icon: Headphones, title: 'پشتیبانی همیشگی', desc: 'مشاور آموزشی اختصاصی و پشتیبانی آنلاین برای هر سوال یا مشکل.', c: 'bg-rose-100 text-rose-600' },
        ].map((f) => (
          <div key={f.title} className="card p-7 transition hover:shadow-soft">
            <span className={cn('grid h-12 w-12 place-items-center rounded-xl', f.c)}><f.icon size={24} /></span>
            <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Panels() {
  const panels = [
    { icon: GraduationCap, title: 'پنل دانشجو', desc: 'برنامه‌ی کلاس‌ها، تکالیف، نمودار پیشرفت مهارت‌ها و دسترسی به ویدیوی جلسات.', href: '/student', c: 'from-brand-600 to-brand-400' },
    { icon: Users, title: 'پنل استاد', desc: 'مدیریت کلاس‌ها، حضور و غیاب، تصحیح تکالیف و پیگیری عملکرد هر زبان‌آموز.', href: '/teacher', c: 'from-sky2-500 to-sky2-300' },
    { icon: LayoutDashboard, title: 'پنل مدیریت', desc: 'گزارش‌های مالی، مدیریت کاربران، دوره‌ها، اساتید و تنظیمات کل سایت.', href: '/admin', c: 'from-violet-600 to-violet-400' },
  ];
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/40 blur-3xl" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky2-300 ring-1 ring-white/15">
            <ShieldCheck size={14} /> یک پلتفرم، سه نقش
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">پنل اختصاصی برای هر نقش</h2>
          <p className="mt-4 leading-8 text-brand-200/80">زبان‌آموز، استاد و مدیر هر کدام دقیقاً ابزارهایی را می‌بینند که لازم دارند.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {panels.map((p) => (
            <Link key={p.title} href={p.href} className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
              <span className={cn('grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br shadow-lg', p.c)}><p.icon size={26} /></span>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-200/80">{p.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sky2-300">
                مشاهده‌ی دموی پنل <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  return (
    <section id="teachers" className="container-x scroll-mt-24 py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="section-eyebrow"><Sparkles size={14} /> اساتید فرتاش</span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">با بهترین‌ها یاد بگیر</h2>
        </div>
        <Link href="/register" className="btn-ghost">همه‌ی اساتید <ArrowLeft size={16} /></Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((t) => (
          <div key={t.id} className="card group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <Image src={t.photo} alt={t.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute right-3 top-3 badge bg-white/90 text-brand-700 backdrop-blur">{t.lang}</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-slate-900">{t.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{t.title}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-bold text-slate-700"><Star size={14} className="text-amber-400" fill="currentColor" /> {fa(t.rating.toString()).replace('.', '٫')}</span>
                <span>{fa(t.students)} زبان‌آموز</span>
                <span>{fa(t.years)} سال سابقه</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-slate-50/70 py-24">
      <div className="container-x">
        <SectionHeader eyebrow="تعرفه‌ها" title="پلنی که با هدفت جور است" desc="بدون هزینه‌ی پنهان. اگر تا پایان جلسه‌ی دوم راضی نبودی، کل مبلغ را برمی‌گردانیم." />
        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                'relative rounded-3xl p-8',
                p.featured ? 'bg-brand-gradient text-white shadow-soft lg:scale-105' : 'card',
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 right-8 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950">پیشنهاد ویژه</span>
              )}
              <h3 className={cn('text-lg font-bold', p.featured ? 'text-white' : 'text-slate-900')}>{p.name}</h3>
              <p className={cn('mt-1 text-sm', p.featured ? 'text-brand-50/90' : 'text-slate-500')}>{p.desc}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className={cn('text-4xl font-black', p.featured ? 'text-white' : 'text-slate-900')}>{fa(p.price)}</span>
                <span className={cn('text-sm', p.featured ? 'text-brand-50/80' : 'text-slate-500')}>تومان / {p.period}</span>
              </p>
              <ul className="mt-8 space-y-3.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className={cn('grid h-5 w-5 shrink-0 place-items-center rounded-full', p.featured ? 'bg-white/20' : 'bg-brand-50 text-brand-600')}>
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={cn('btn mt-8 w-full py-3', p.featured ? 'bg-white text-brand-700 hover:bg-brand-50' : 'bg-brand-600 text-white hover:bg-brand-700')}
              >
                انتخاب پلن {p.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-x py-24">
      <SectionHeader eyebrow="تجربه‌ی زبان‌آموزان" title="آن‌ها با فرتاش به هدفشان رسیدند" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="card flex flex-col p-7">
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <blockquote className="mt-5 flex-1 leading-8 text-slate-600">«{t.text}»</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
              <Image src={t.photo} alt={t.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-slate-50/70 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="section-eyebrow"><Sparkles size={14} /> سوالات متداول</span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">سوالی داری؟</h2>
          <p className="mt-4 leading-8 text-slate-500">پاسخ رایج‌ترین سوال‌ها این‌جاست. اگر جوابت را پیدا نکردی، مشاوران ما آماده‌ی پاسخگویی هستند.</p>
          <a href="#contact" className="btn-primary mt-6">گفتگو با مشاور</a>
        </div>
        <div className="space-y-3 lg:col-span-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="card group p-5 open:shadow-soft" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={20} className="shrink-0 text-slate-400 transition group-open:rotate-180 group-open:text-brand-600" />
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-500">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-16 text-center text-white sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10" />
        <h2 className="relative text-3xl font-black sm:text-4xl">همین امروز اولین قدم را بردار</h2>
        <p className="relative mx-auto mt-4 max-w-xl leading-8 text-brand-50/90">تعیین سطح و جلسه‌ی مشاوره‌ی اول رایگان است. فقط ۲ دقیقه تا شروع فاصله داری.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/register" className="btn bg-white px-7 py-3.5 text-base text-brand-700 hover:bg-brand-50">ثبت‌نام رایگان <ArrowLeft size={18} /></Link>
          <Link href="/login" className="btn border border-white/30 px-7 py-3.5 text-base text-white hover:bg-white/10">ورود به پنل</Link>
        </div>
      </div>
    </section>
  );
}
