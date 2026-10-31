import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import DemoNotice from '@/components/site/DemoNotice';
import { languages } from '@/lib/data';

export default function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-4 py-8 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <Logo />
          <ThemeToggle />
        </div>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <h1 className="font-display text-5xl font-bold text-ink">{title}</h1>
          <p className="mt-2 text-slate-500">{subtitle}</p>
          <DemoNotice className="mt-6">
            نسخه‌ی نمایشی: ورود و ثبت‌نام هنوز به سرور وصل نیست و اطلاعاتی ذخیره نمی‌شود. دکمه‌ی فرم فقط پنل نمونه را باز می‌کند.
          </DemoNotice>
          <div className="mt-8">{children}</div>
        </div>
      </div>
      {/* The three languages, set like phrasebook lines. */}
      <div className="hidden bg-navy lg:flex lg:flex-col lg:justify-center lg:p-16">
        <div className="mx-auto w-full max-w-md text-white">
          <ul className="space-y-8">
            {languages.map((l) => (
              <li key={l.slug} className="border-b border-white/15 pb-8 last:border-0">
                <p lang={l.code} dir="ltr" className="text-left font-display text-[2.2rem] font-semibold leading-[1.35]">
                  {l.phrase.before}
                  <span className="rounded-[4px] bg-marker px-1 text-navy">{l.phrase.marked}</span>
                  {l.phrase.after}
                </p>
                <p className="mt-2 text-sm text-white/65">{l.name}: {l.phrase.fa}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
