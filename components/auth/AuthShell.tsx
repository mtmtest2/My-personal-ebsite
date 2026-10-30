import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { cn, fa } from '@/lib/utils';

const welcomes = [
  { code: 'en', text: 'Welcome back.' },
  { code: 'de', text: 'Willkommen zurück.' },
  { code: 'fr', text: 'Bon retour.' },
  { code: 'tr', text: 'Tekrar hoş geldin.' },
  { code: 'es', text: 'Bienvenido de nuevo.' },
  { code: 'ar', text: 'أهلاً بعودتك.' },
];

const steps = [
  { title: 'آزمون تعیین سطح', note: '۲۰ دقیقه، آنلاین و رایگان' },
  { title: 'گفتگو با مشاور', note: 'تماس ۱۵ دقیقه‌ای و رایگان' },
  { title: 'کلاس زنده', note: '۲ یا ۳ جلسه در هفته' },
  { title: 'آزمون پایان سطح', note: 'هر ۱۰ تا ۱۲ هفته' },
];

/**
 * Form on the start side, a fixed-ink brand panel on the other (desktop only).
 * Login greets in the six taught languages; register shows what happens next.
 */
export default function AuthShell({ title, subtitle, aside, children }: { title: string; subtitle: string; aside: 'login' | 'register'; children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr_minmax(0,0.85fr)]">
      <div className="flex flex-col px-4 pb-10 pt-4 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <Logo />
          <ThemeToggle />
        </header>
        <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base text-body">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </main>
      </div>

      <aside className="stage hidden bg-navy px-16 py-16 text-white lg:flex lg:flex-col lg:justify-center">
        {aside === 'login' ? (
          <div className="max-w-md">
            <ul className="space-y-1">
              {welcomes.map((w, i) => (
                <li
                  key={w.code}
                  lang={w.code}
                  dir={w.code === 'ar' ? 'rtl' : 'ltr'}
                  className={cn('text-left', i === 0 ? 'mb-3 text-5xl leading-tight text-white' : 'text-3xl leading-snug text-white/45')}
                >
                  {i === 0 ? <span className="rounded-sm bg-turq px-1.5 text-navy [box-decoration-break:clone]">{w.text}</span> : w.text}
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-white/15 pt-6 text-sm leading-7 text-white/70">
              کلاس‌ها، تکالیف و ویدیوی جلسه‌هایت در پنل منتظرت هستند.
            </p>
          </div>
        ) : (
          <div className="max-w-md">
            <p className="text-sm text-white/60">بعد از ثبت‌نام</p>
            <ol className="relative mt-6 space-y-8 before:absolute before:bottom-3 before:right-[15px] before:top-3 before:w-px before:bg-white/15">
              {steps.map((s, i) => (
                <li key={s.title} className="relative grid grid-cols-[2rem_1fr] items-start gap-x-5">
                  <span
                    aria-hidden
                    className={cn('relative grid h-8 w-8 place-items-center rounded-full text-sm font-bold', i === 0 ? 'bg-turq text-navy' : 'border border-turq/60 bg-navy text-turq-soft')}
                  >
                    {fa(i + 1)}
                  </span>
                  <div>
                    <p className="text-lg font-bold">{s.title}</p>
                    <p className="mt-0.5 text-sm text-white/65">{s.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </aside>
    </div>
  );
}
