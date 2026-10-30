import type { Metadata } from 'next';
import {
  ArrowLeft,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  CircleAlert,
  Clock,
  Download,
  Headphones,
  LayoutDashboard,
  Mic,
  Play,
  Plus,
  Search,
  Trash2,
  Users,
  Video,
  WifiOff,
} from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import { Alert, EmptyState, Skeleton, SkeletonText, Spinner } from '@/components/ui/States';
import { Avatar, BarChart, Panel, Progress, StatCard, StatusBadge } from '@/components/panel/ui';
import { fa } from '@/lib/utils';
import { PasswordDemo, RoleDemo, SaveDemo, TabsDemo } from './Demos';

export const metadata: Metadata = {
  title: 'سامانه‌ی طراحی',
  robots: { index: false, follow: false },
};

const sections = [
  { id: 'color', label: 'رنگ' },
  { id: 'type', label: 'حروف‌نگاری' },
  { id: 'space', label: 'فاصله و شکل' },
  { id: 'icons', label: 'آیکون‌ها' },
  { id: 'buttons', label: 'دکمه‌ها' },
  { id: 'forms', label: 'فرم‌ها' },
  { id: 'surfaces', label: 'کارت، پنل و آمار' },
  { id: 'table', label: 'جدول' },
  { id: 'nav', label: 'ناوبری' },
  { id: 'badges', label: 'نشان‌ها' },
  { id: 'states', label: 'وضعیت‌ها' },
  { id: 'motion', label: 'حرکت' },
];

const lapis = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const lapisHex = ['EEF2FF', 'DFE6FE', 'C3D0FC', '9BB0F8', '6D88F1', '4563E3', '2B47D1', '2238B0', '1E308C', '1C2B6E', '121B45'];
const turqHex = ['E8FBFD', 'C8F4F9', '97E9F2', '5CDAE9', '22C6DC', '0EA8C0', '0A7A8C', '0D6B7B', '105664', '114855', '062E37'];

const roles = [
  { name: 'Lapis · لاجورد', token: 'brand-600', hex: '#2B47D1', cls: 'bg-brand-600', role: 'تنها رنگ اقدام: دکمه‌ی اصلی، پیوند، فوکوس، حالت انتخاب‌شده.' },
  { name: 'Ink · جوهر', token: 'ink', hex: '#121B45', cls: 'bg-ink', role: 'تیترها و بلوک‌های تیره‌ی تمام‌رنگ (فوتر، فراخوان پایانی).' },
  { name: 'Turquoise · فیروزه', token: 'accent-400', hex: '#22C6DC', cls: 'bg-accent-400', role: 'فقط برای «یادگیری»: ماژیک واژه‌ها، پیشرفت زبان‌آموز، کلاس زنده.' },
  { name: 'Paper · کاغذ', token: 'paper / tint', hex: '#FFFFFF / #F5F7FB', cls: 'bg-tint', role: 'زمینه‌ی صفحه و بخش‌های جایگزین. سطوح با خط و ته‌رنگ جدا می‌شوند، نه سایه.' },
];

const status = [
  { tone: 'success' as const, label: 'موفق', hex: '#147447', use: 'پرداخت شد، فعال، تکمیل' },
  { tone: 'warning' as const, label: 'هشدار', hex: '#A85A00', use: 'در انتظار، نیاز به توجه' },
  { tone: 'danger' as const, label: 'خطا', hex: '#C0352B', use: 'ناموفق، حذف، خطای فیلد' },
];

const typeScale = [
  { token: '6xl', px: '60 / 1.15', cls: 'text-6xl font-extrabold', sample: 'به زبان تازه حرف بزن', use: 'تیتر اصلی (دسکتاپ)' },
  { token: '4xl', px: '38 / 1.3', cls: 'text-4xl font-bold', sample: 'شش زبان، از سطح صفر', use: 'تیتر بخش' },
  { token: '2xl', px: '24 / 1.5', cls: 'text-2xl font-bold', sample: 'دوره‌های در حال یادگیری', use: 'تیتر صفحه‌ی پنل' },
  { token: 'xl', px: '20 / 1.6', cls: 'text-xl font-bold', sample: 'کلاس مکالمه‌ی هفتگی', use: 'تیتر کارت' },
  { token: 'lg', px: '18 / 1.85', cls: 'text-lg', sample: 'اول سطحت را رایگان می‌سنجیم، بعد برنامه‌ات را می‌چینیم.', use: 'پاراگراف آغازین' },
  { token: 'base', px: '16 / 1.9', cls: 'text-base', sample: 'کلاس‌ها زنده و در گروه‌های حداکثر ۸ نفره برگزار می‌شوند.', use: 'متن' },
  { token: 'sm', px: '14 / 1.8', cls: 'text-sm', sample: 'سارا محمدی، ۲۴ از ۳۶ جلسه', use: 'برچسب و متن فشرده' },
  { token: 'xs', px: '13 / 1.7', cls: 'text-xs', sample: 'آخرین به‌روزرسانی: ۲ ساعت پیش', use: 'زیرنویس، نشان' },
];

const space = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

const radii = [
  { r: 'rounded-sm', px: '4', use: 'نشان' },
  { r: 'rounded-md', px: '6', use: 'دکمه، فیلد' },
  { r: 'rounded-lg', px: '8', use: 'هشدار، کارت کوچک' },
  { r: 'rounded-xl', px: '10', use: 'کارت و پنل' },
  { r: 'rounded-3xl', px: '14', use: 'پنجره و برگه' },
];

const icons = [
  { i: LayoutDashboard, n: 'داشبورد' },
  { i: BookOpen, n: 'دوره' },
  { i: CalendarDays, n: 'برنامه' },
  { i: Users, n: 'زبان‌آموزان' },
  { i: Video, n: 'کلاس آنلاین' },
  { i: Mic, n: 'گفتار' },
  { i: Headphones, n: 'شنیدار' },
  { i: Bell, n: 'اعلان' },
  { i: Search, n: 'جستجو' },
  { i: Download, n: 'دریافت' },
  { i: Plus, n: 'افزودن' },
  { i: Trash2, n: 'حذف' },
];

const payments = [
  { photo: '1.jpg', name: 'نگار طاهری', course: 'آمادگی IELTS Academic', amount: '۳٬۴۹۰٬۰۰۰', date: '۱۲ مهر', status: 'موفق' },
  { photo: '2.jpeg', name: 'امیر حسینی', course: 'آلمانی B1', amount: '۱٬۸۹۰٬۰۰۰', date: '۱۱ مهر', status: 'در انتظار تأیید' },
  { photo: '4.jpg', name: 'مریم کریمی', course: 'فرانسوی عمومی A2', amount: '۱٬۸۹۰٬۰۰۰', date: '۹ مهر', status: 'ناموفق' },
];

function Section({ id, title, intro, children }: { id: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 border-t border-rule py-14 first:border-t-0 first:pt-0 sm:py-20">
      <h2 id={`${id}-h`} className="text-3xl font-bold text-ink">
        {title}
      </h2>
      <p className="mt-3 max-w-prose text-body">{intro}</p>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Sub({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-sm font-semibold text-muted">{title}</h3>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-rule">
        <div className="container-x flex h-16 items-center justify-between">
          <Logo />
          <ThemeToggle />
        </div>
      </header>

      {/* Identity: the two-script idea, shown rather than described. */}
      <div className="border-b border-rule bg-tint">
        <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-brand-600">سامانه‌ی طراحی فرتاش · نسخه‌ی ۱</p>
            <h1 className="mt-4 text-5xl font-extrabold text-ink sm:text-6xl">دو خط، یک صفحه.</h1>
            <p className="mt-6 max-w-prose text-lg text-body">
              هر صفحه‌ی فرتاش دو زبان دارد: فارسیِ مدرسه که با تو حرف می‌زند، و زبانی که داری یاد می‌گیری. اولی با استعداد چیده می‌شود، دومی با لیتراتا، مثل یک
              کتاب عبارات خوب. ماژیک فیروزه‌ای فقط روی واژه‌هایی می‌نشیند که در حال یادگرفتنشان هستی.
            </p>
          </div>
          <figure className="self-end lg:col-span-5">
            <p lang="de" dir="ltr" className="text-left text-4xl leading-tight text-ink sm:text-5xl">
              Hallo, <span className="mark">ich heiße</span> Negar.
            </p>
            <figcaption className="mt-4 border-t border-rule pt-4 text-sm text-muted">
              سلام، اسم من نگار است. جلسه‌ی اول آلمانی A1، معرفی خود.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="container-x lg:grid lg:grid-cols-[180px_1fr] lg:gap-16">
        <nav aria-label="بخش‌های سامانه‌ی طراحی" className="hidden lg:block">
          <ul className="sticky top-8 space-y-1 py-20 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block py-1 text-muted transition-colors hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="min-w-0 py-14 sm:py-20">
          <Section id="color" title="رنگ" intro="لاجورد و فیروزه، دو رنگ لوگو و دو رنگ کاشی‌کاری ایرانی. هر رنگ یک کار دارد و هیچ‌کدام برای تزئین نیست. همه‌ی ترکیب‌های متن در هر دو حالت روز و شب دست‌کم نسبت تمایز ۴٫۵ دارند.">
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
              {roles.map((c) => (
                <div key={c.token} className="flex gap-4">
                  <span className={`h-16 w-16 shrink-0 rounded-lg ring-1 ring-inset ring-ink/10 ${c.cls}`} aria-hidden />
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{c.name}</p>
                    <p className="num text-xs text-muted" dir="ltr" style={{ textAlign: 'right' }}>
                      {c.token} · {c.hex}
                    </p>
                    <p className="mt-1 text-sm">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <Sub title="طیف لاجورد (brand)" className="mt-12">
              <div className="grid grid-cols-11 overflow-hidden rounded-lg ring-1 ring-inset ring-ink/10" dir="ltr">
                {lapis.map((s, i) => (
                  <div key={s} className="h-14" style={{ background: `rgb(var(--brand-${s}))` }} title={`brand-${s} #${lapisHex[i]}`} />
                ))}
              </div>
              <div className="mt-2 grid grid-cols-11 text-center text-xs text-muted" dir="ltr">
                {lapis.map((s) => (
                  <span key={s} className="num">
                    {s}
                  </span>
                ))}
              </div>
            </Sub>
            <Sub title="طیف فیروزه (accent)" className="mt-8">
              <div className="grid grid-cols-11 overflow-hidden rounded-lg ring-1 ring-inset ring-ink/10" dir="ltr">
                {lapis.map((s, i) => (
                  <div key={s} className="h-14" style={{ background: `rgb(var(--accent-${s}))` }} title={`accent-${s} #${turqHex[i]}`} />
                ))}
              </div>
            </Sub>
            <Sub title="وضعیت" className="mt-12">
              <div className="grid gap-4 sm:grid-cols-3">
                {status.map((s) => (
                  <div key={s.tone} className="border-t border-rule pt-3">
                    <Badge tone={s.tone} dot>
                      {s.label}
                    </Badge>
                    <p className="mt-2 text-sm">{s.use}</p>
                    <p className="num mt-0.5 text-xs text-muted" dir="ltr" style={{ textAlign: 'right' }}>
                      {s.hex}
                    </p>
                  </div>
                ))}
              </div>
            </Sub>
          </Section>

          <Section id="type" title="حروف‌نگاری" intro="استعداد برای فارسی، چون برای خط فارسی طراحی شده و ارقام فارسی درست دارد. لیتراتا برای زبان مقصد، با ایتالیکی گرم برای عبارت‌های نمونه. فارسی هرگز فاصله‌ی حروف نمی‌گیرد؛ اتصال حروف می‌شکند.">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="surface-tint p-6">
                <p className="text-xs text-muted">Estedad · فارسی، رابط و تیتر</p>
                <p className="mt-3 text-5xl font-extrabold leading-tight">آ ب پ ژ گ ۱۲۳</p>
                <p className="mt-3 text-sm">نازک ۴۰۰ · متوسط ۵۰۰ · ضخیم ۷۰۰ · تیتر ۸۰۰</p>
              </div>
              <div className="surface-tint p-6">
                <p className="text-xs text-muted">Literata · زبانی که یاد می‌گیری</p>
                <p lang="en" dir="ltr" className="mt-3 text-left text-5xl leading-tight text-ink">
                  Aa <i>Ğğ</i> ß é
                </p>
                <p lang="fr" dir="ltr" className="mt-3 text-left text-sm italic">
                  Enchanté, je m’appelle Reza.
                </p>
              </div>
            </div>

            <div className="mt-12 divide-y divide-rule border-y border-rule">
              {typeScale.map((t) => (
                <div key={t.token} className="grid items-baseline gap-2 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <div className="text-xs text-muted">
                    <span className="font-semibold text-ink">text-{t.token}</span>
                    <span className="num block" dir="ltr" style={{ textAlign: 'right' }}>
                      {t.px}
                    </span>
                    <span className="block">{t.use}</span>
                  </div>
                  <p className={`${t.cls} min-w-0 text-ink`}>{t.sample}</p>
                </div>
              ))}
            </div>

            <Sub title="دو خط در یک جمله" className="mt-12">
              <p className="max-w-prose text-lg">
                در جلسه‌ی سوم یاد می‌گیری بگویی{' '}
                <span lang="de" dir="ltr" className="italic">
                  <span className="mark">Ich komme aus</span> Teheran
                </span>{' '}
                و برای بخش گفتاری IELTS یک ارائه‌ی دودقیقه‌ای آماده می‌کنی.
              </p>
              <p className="mt-2 text-sm text-muted">
                «IELTS» بخشی از رابط است و با استعداد می‌ماند؛ فقط عبارتی که آموزش داده می‌شود <code dir="ltr">lang</code> می‌گیرد.
              </p>
            </Sub>
          </Section>

          <Section id="space" title="فاصله و شکل" intro="واحد پایه ۴ پیکسل است. انحنا به نقش بستگی دارد، نه یک عدد برای همه: هرچه سطح بزرگ‌تر، انحنا کمی بیشتر، ولی هیچ‌وقت بیش از ۱۴ پیکسل. سطوح با خط و ته‌رنگ از هم جدا می‌شوند؛ سایه فقط برای چیزهایی است که شناورند.">
            <Sub title="مقیاس فاصله">
              <div className="space-y-2">
                {space.map((s) => (
                  <div key={s} className="flex items-center gap-4">
                    <span className="num w-10 text-xs text-muted">{s}</span>
                    <span className="h-3 rounded-sm bg-brand-200" style={{ width: s }} />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted">ریتم بخش‌ها: ۶۴ در موبایل، ۹۶ در تبلت، ۱۲۸ در دسکتاپ. عرض محتوا حداکثر ۱۲۰۰ پیکسل.</p>
            </Sub>
            <Sub title="انحنا" className="mt-12">
              <div className="flex flex-wrap gap-6">
                {radii.map((r) => (
                  <div key={r.r} className="text-center">
                    <div className={`h-20 w-24 border border-slate-300 bg-tint ${r.r}`} />
                    <p className="num mt-2 text-sm font-semibold text-ink">{r.px}px</p>
                    <p className="text-xs text-muted">{r.use}</p>
                  </div>
                ))}
                <div className="text-center">
                  <div className="h-20 w-24 rounded-3xl bg-paper shadow-pop ring-1 ring-rule" />
                  <p className="mt-2 text-sm font-semibold text-ink">shadow-pop</p>
                  <p className="text-xs text-muted">منو، پنجره، اعلان</p>
                </div>
              </div>
            </Sub>
          </Section>

          <Section id="icons" title="آیکون‌ها" intro="فقط Lucide، با ضخامت خط ۱٫۷۵ و اندازه‌های ۱۶، ۲۰ و ۲۴ هم‌اندازه با متن کنارش. آیکون باید به پیدا کردن یا انجام کاری کمک کند؛ آیکون داخل مربع رنگی برای تزئین نداریم. ایموجی هیچ‌جا.">
            <ul className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-6">
              {icons.map(({ i: I, n }) => (
                <li key={n} className="flex flex-col items-center gap-2 bg-paper py-5 text-ink">
                  <I size={22} aria-hidden />
                  <span className="text-xs text-muted">{n}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-t border-rule pt-4">
                <p className="font-semibold text-ink">جهت‌دار، آینه‌شده</p>
                <p className="mt-1 text-sm">در راست‌به‌چپ «بعدی» و «ادامه» به چپ اشاره می‌کنند.</p>
                <div className="mt-3 flex items-center gap-3 text-ink">
                  <Button size="sm" variant="secondary" iconEnd={ArrowLeft}>
                    ادامه
                  </Button>
                  <ChevronLeft size={20} aria-hidden />
                </div>
              </div>
              <div className="border-t border-rule pt-4">
                <p className="font-semibold text-ink">زمان و رسانه، بدون آینه</p>
                <p className="mt-1 text-sm">ساعت و پخش در همه‌ی زبان‌ها یک جهت دارند.</p>
                <div className="mt-3 flex items-center gap-4 text-ink">
                  <Clock size={20} aria-hidden />
                  <Play size={20} aria-hidden />
                </div>
              </div>
            </div>
          </Section>

          <Section id="buttons" title="دکمه‌ها" intro="یک دکمه‌ی اصلی در هر بخش. برچسب دقیقاً می‌گوید چه اتفاقی می‌افتد. با فشردن کمی کوچک می‌شود تا حس شود صدا را شنیده؛ در حالت بارگذاری عرضش ثابت می‌ماند.">
            <div className="space-y-8">
              <Sub title="انواع">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>تعیین سطح رایگان</Button>
                  <Button variant="secondary">کلاس‌ها چطور برگزار می‌شوند؟</Button>
                  <Button variant="quiet">انصراف</Button>
                  <Button variant="danger" icon={Trash2}>
                    حذف دوره
                  </Button>
                </div>
              </Sub>
              <Sub title="اندازه‌ها: ۳۲، ۴۰، ۴۸">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm" icon={Plus}>
                    افزودن
                  </Button>
                  <Button icon={Video}>ورود به کلاس</Button>
                  <Button size="lg">شروع با پلن حرفه‌ای</Button>
                  <Button variant="secondary" icon={Download} aria-label="دریافت فایل" />
                </div>
              </Sub>
              <Sub title="حالت‌ها">
                <div className="flex flex-wrap items-center gap-3">
                  <Button loading>در حال ورود</Button>
                  <Button disabled>ثبت‌نام بسته است</Button>
                  <Button variant="secondary" disabled>
                    غیرفعال
                  </Button>
                </div>
              </Sub>
            </div>
          </Section>

          <Section id="forms" title="فرم‌ها" intro="برچسب همیشه دیده می‌شود و placeholder فقط نمونه است. خطا زیر همان فیلد می‌آید و می‌گوید چطور درستش کنی. لبه‌ی فیلدها دست‌کم نسبت تمایز ۳ دارد تا برای کم‌بینایان هم پیدا باشد.">
            <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
              <Field id="ds-name" label="نام و نام خانوادگی" hint="همان‌طور که روی گواهی پایان دوره می‌آید.">
                <input className="input" autoComplete="name" placeholder="مثلاً نگار طاهری" />
              </Field>
              <Field id="ds-phone" label="شماره موبایل" error="شماره باید ۱۱ رقم باشد و با ۰۹ شروع شود.">
                <input className="input" dir="ltr" inputMode="tel" autoComplete="tel" defaultValue="0912 345" />
              </Field>
              <Field id="ds-lang" label="زبان مورد نظر">
                <select className="input" defaultValue="de">
                  <option value="en">انگلیسی</option>
                  <option value="de">آلمانی</option>
                  <option value="fr">فرانسوی</option>
                  <option value="tr">ترکی استانبولی</option>
                </select>
              </Field>
              <PasswordDemo />
              <Field id="ds-goal" label="هدفت از یادگیری" hint="اختیاری؛ به استاد کمک می‌کند جلسه‌ی اول را بچیند." className="sm:col-span-2">
                <textarea className="input" placeholder="مثلاً: تا اسفند به نمره‌ی ۷ آیلتس برسم." />
              </Field>
              <Field id="ds-disabled" label="کد معرف">
                <input className="input" disabled defaultValue="بعد از تعیین سطح فعال می‌شود" />
              </Field>
              <div>
                <p className="label">نقش</p>
                <RoleDemo />
              </div>
              <label className="flex items-center gap-2.5 text-sm text-ink">
                <input type="checkbox" className="check" defaultChecked /> یادآوری کلاس را پیامک کن
              </label>
            </div>
          </Section>

          <Section id="surfaces" title="کارت، پنل و آمار" intro="کارت با خط از زمینه جدا می‌شود، نه با سایه. کارت داخل کارت نمی‌گذاریم؛ محتوای پنل با خط تقسیم می‌شود. اعداد مثل یک گزارش ردیف می‌شوند، نه یک مشت ویجت با آیکون رنگی.">
            <div className="rounded-xl bg-tint p-5 sm:p-8">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
                <StatCard icon={Clock} label="ساعت مطالعه این ماه" value="۲۶ ساعت" />
                <StatCard icon={BookOpen} label="دوره‌های فعال" value="۳" />
                <StatCard label="امتیاز کسب‌شده" value="۲٬۳۴۰" trend="+۱۲۰" />
                <StatCard label="روزهای پیاپی" value="۱۸ روز" hint="رکورد قبلی: ۱۲ روز" />
              </div>
              <div className="mt-8 grid gap-6 xl:grid-cols-5">
                <Panel title="دوره‌های در حال یادگیری" className="xl:col-span-3" action={<a href="#" className="link text-sm">همه‌ی دوره‌ها</a>}>
                  <ul className="divide-y divide-rule">
                    {[
                      ['انگلیسی عمومی B2', 'سارا محمدی، ۲۴ از ۳۶ جلسه', 68],
                      ['آمادگی IELTS Academic', 'رضا احمدی، ۱۳ از ۳۰ جلسه', 42],
                    ].map(([t, s, p]) => (
                      <li key={t as string} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="font-semibold text-ink">{t}</p>
                          <span className="num text-sm text-muted">{fa(p as number)}٪</span>
                        </div>
                        <p className="text-sm text-muted">{s}</p>
                        <Progress value={p as number} className="mt-3" label={`پیشرفت ${t}`} />
                      </li>
                    ))}
                  </ul>
                </Panel>
                <Panel title="درآمد ماهانه (میلیون تومان)" className="xl:col-span-2">
                  <BarChart
                    data={[
                      { label: 'خرداد', value: 310, display: '۳۱۰' },
                      { label: 'تیر', value: 352, display: '۳۵۲' },
                      { label: 'مرداد', value: 330, display: '۳۳۰' },
                      { label: 'شهریور', value: 401, display: '۴۰۱' },
                      { label: 'مهر', value: 468, display: '۴۶۸' },
                    ]}
                  />
                </Panel>
              </div>
            </div>
          </Section>

          <Section id="table" title="جدول" intro="سرستون کوچک و کم‌رنگ روی ته‌رنگ، ردیف‌ها با خط. متن از راست و مبلغ‌ها در یک لبه تا راحت مقایسه شوند. در صفحه‌ی کوچک خود جدول اسکرول می‌خورد، نه کل صفحه.">
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="table table-hover min-w-[560px]">
                  <thead>
                    <tr>
                      <th scope="col">زبان‌آموز</th>
                      <th scope="col">دوره</th>
                      <th scope="col">تاریخ</th>
                      <th scope="col" className="num">
                        مبلغ (تومان)
                      </th>
                      <th scope="col">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((p) => (
                      <tr key={p.name}>
                        <td>
                          <span className="flex items-center gap-3 font-medium text-ink">
                            <Avatar src={`/images/people/${p.photo}`} name="" size={28} />
                            {p.name}
                          </span>
                        </td>
                        <td>{p.course}</td>
                        <td className="whitespace-nowrap">{p.date}</td>
                        <td className="num font-medium text-ink">{p.amount}</td>
                        <td>
                          <StatusBadge status={p.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          <Section id="nav" title="ناوبری" intro="در سایت، پیوندهای متنی با خط زیر. در پنل، آیتم فعال با متن پررنگ و نواری در لبه‌ی شروع مشخص می‌شود، نه یک قرص آبی پر. زبانه‌ها با کلیدهای جهت کار می‌کنند و در راست‌به‌چپ، چپ یعنی بعدی.">
            <div className="grid gap-10 lg:grid-cols-2">
              <Sub title="پیوندهای سایت">
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  <a href="#nav" className="nav-link" aria-current="page">
                    روش کار
                  </a>
                  <a href="#nav" className="nav-link">
                    زبان‌ها
                  </a>
                  <a href="#nav" className="nav-link">
                    اساتید
                  </a>
                  <a href="#nav" className="nav-link">
                    تعرفه‌ها
                  </a>
                </div>
              </Sub>
              <Sub title="منوی کناری پنل">
                <div className="max-w-64 space-y-0.5 rounded-xl border border-rule bg-paper p-3">
                  <a href="#nav" className="side-link" aria-current="page">
                    <LayoutDashboard size={18} aria-hidden /> داشبورد
                  </a>
                  <a href="#nav" className="side-link">
                    <BookOpen size={18} aria-hidden /> دوره‌های من
                  </a>
                  <a href="#nav" className="side-link">
                    <CalendarDays size={18} aria-hidden /> برنامه‌ی کلاس‌ها
                  </a>
                </div>
              </Sub>
              <Sub title="زبانه‌ها" className="lg:col-span-2">
                <TabsDemo />
              </Sub>
            </div>
          </Section>

          <Section id="badges" title="نشان‌ها" intro="نشان کوچک است و گوشه‌ی کم‌انحنا دارد. معنا را متن می‌رساند و نقطه فقط تأکید است؛ هیچ‌وقت فقط به رنگ تکیه نمی‌کنیم.">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status="فعال" />
              <StatusBadge status="در انتظار تأیید" />
              <StatusBadge status="معلق" />
              <StatusBadge status="پیش‌نویس" />
              <Badge tone="brand">IELTS</Badge>
              <Badge tone="accent" dot>
                کلاس زنده است
              </Badge>
              <Badge tone="outline">B2</Badge>
              <span className="flex items-center gap-2 text-sm text-ink">
                <Avatar src="/images/people/3.jpg" name="" size={28} /> رضا احمدی <Badge tone="neutral">استاد</Badge>
              </span>
            </div>
          </Section>

          <Section id="states" title="وضعیت‌ها" intro="هر داده‌ای چهار حالت دارد و هر چهار طراحی می‌شوند. بارگذاری شکل محتوای نهایی را دارد تا صفحه نپرد. خالی می‌گوید چه چیزی این‌جا می‌آید و یک کار پیشنهاد می‌کند. خطا می‌گوید چه شد و حالا چه کنی، بی‌عذرخواهی. موفقیت همان فعل دکمه را تکرار می‌کند.">
            <div className="grid gap-6 lg:grid-cols-2">
              <Sub title="بارگذاری">
                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-3.5 w-40" />
                      <Skeleton className="mt-2 h-3 w-24" />
                    </div>
                  </div>
                  <SkeletonText lines={3} className="mt-5" />
                  <div className="mt-5 flex items-center gap-2 text-sm text-muted">
                    <Spinner /> در حال دریافت برنامه‌ی کلاس‌ها
                  </div>
                </div>
              </Sub>
              <Sub title="خالی">
                <div className="card">
                  <EmptyState
                    icon={CalendarDays}
                    title="این هفته کلاسی نداری"
                    action={
                      <Button size="sm" variant="secondary" icon={Plus}>
                        رزرو کلاس آزمایشی
                      </Button>
                    }
                  >
                    کلاس‌هایی که رزرو کنی با ساعت و لینک ورود این‌جا می‌آیند.
                  </EmptyState>
                </div>
              </Sub>
              <Sub title="خطا">
                <div className="space-y-4">
                  <Alert
                    tone="danger"
                    title="پرداخت انجام نشد"
                    action={
                      <Button size="sm" variant="secondary">
                        پرداخت دوباره
                      </Button>
                    }
                  >
                    بانک تراکنش را رد کرد و مبلغی از حسابت کم نشد. با کارت دیگری دوباره امتحان کن.
                  </Alert>
                  <div className="card flex items-start gap-3 p-4">
                    <WifiOff size={20} className="mt-0.5 shrink-0 text-muted" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-ink">اتصال اینترنت قطع است</p>
                      <p className="text-sm text-muted">تغییراتت روی همین دستگاه می‌ماند و بعد از اتصال ذخیره می‌شود.</p>
                    </div>
                  </div>
                </div>
              </Sub>
              <Sub title="موفقیت">
                <div className="space-y-4">
                  <Alert tone="success" title="ثبت‌نام انجام شد">
                    لینک کلاس تعیین سطح برای شنبه ساعت ۱۸ پیامک شد.
                  </Alert>
                  <div className="card p-5">
                    <SaveDemo />
                  </div>
                </div>
              </Sub>
              <Sub title="هشدار و اطلاع" className="lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Alert tone="warning" title="۲ جلسه از بسته‌ات مانده">
                    برای این‌که برنامه‌ات قطع نشود، تا ۲۰ مهر تمدید کن.
                  </Alert>
                  <Alert tone="info" title="کلاس پنجشنبه یک ساعت جلوتر است">
                    به‌خاطر تعطیلی، کلاس ساعت ۱۷ شروع می‌شود.
                  </Alert>
                </div>
              </Sub>
            </div>
          </Section>

          <Section id="motion" title="حرکت" intro="حرکت به کار کاربر پاسخ می‌دهد؛ برای تزئین نیست. بخش‌ها هنگام اسکرول محو و ظاهر نمی‌شوند. هیچ حرکتی در رابط بیش از ۳۰۰ میلی‌ثانیه نیست و با تنظیم «کاهش حرکت» فقط محوشدن‌های کوتاه می‌ماند.">
            <div className="divide-y divide-rule border-y border-rule">
              {[
                ['۱۲۰ms', 'فشردن، هاور، تغییر رنگ', 'ease-out'],
                ['۱۸۰ms', 'منو، زبانه، خط زیر پیوند', 'ease-out'],
                ['۲۴۰ms', 'پنجره، برگه‌ی کشویی', 'ease-out / ease-in-out'],
              ].map(([d, use, e]) => (
                <div key={d} className="grid grid-cols-[80px_1fr] gap-4 py-4 sm:grid-cols-[100px_1fr_200px]">
                  <span className="font-semibold text-ink">{d}</span>
                  <span>{use}</span>
                  <code dir="ltr" className="hidden text-left text-xs text-muted sm:block">
                    {e}
                  </code>
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted">
              <CircleAlert size={16} className="mt-1 shrink-0" aria-hidden /> انیمیشن را برای کارهای پرتکرار با صفحه‌کلید نمی‌گذاریم؛ آن‌جا سرعت از زیبایی مهم‌تر است.
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}
