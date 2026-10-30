import Link from 'next/link';
import { Home } from 'lucide-react';
import Footer from '@/components/site/Footer';
import Navbar from '@/components/site/Navbar';
import { cn } from '@/lib/utils';

const notFound = [
  { code: 'en', text: 'Page not found.' },
  { code: 'de', text: 'Seite nicht gefunden.' },
  { code: 'fr', text: 'Page introuvable.' },
  { code: 'tr', text: 'Sayfa bulunamadı.' },
  { code: 'es', text: 'Página no encontrada.' },
  { code: 'ar', text: 'الصفحة غير موجودة.' },
];

const shortcuts = [
  { href: '/#how', label: 'روش کار' },
  { href: '/#languages', label: 'زبان‌ها' },
  { href: '/#pricing', label: 'تعرفه‌ها' },
  { href: '/login', label: 'ورود به پنل' },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <p className="text-sm font-medium text-muted">خطای ۴۰۴</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">این صفحه پیدا نشد.</h1>
          <p className="mt-5 max-w-prose text-lg text-body">شاید نشانی را اشتباه نوشته‌ای یا این صفحه جابه‌جا شده است. از صفحه‌ی اصلی یا یکی از بخش‌های زیر ادامه بده.</p>
          <Link href="/" className="btn-primary btn-lg mt-8">
            <Home size={20} aria-hidden /> بازگشت به صفحه‌ی اصلی
          </Link>
          <nav aria-label="بخش‌های سایت" className="mt-10 border-t border-rule pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              {shortcuts.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link inline-flex min-h-11 min-w-11 items-center justify-center">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div aria-hidden className="stage -mx-4 bg-navy px-6 py-10 text-white sm:mx-0 sm:rounded-3xl sm:px-10 lg:col-span-6">
          <ul className="space-y-1">
            {notFound.map((n, i) => (
              <li key={n.code} lang={n.code} dir={n.code === 'ar' ? 'rtl' : 'ltr'} className={cn('text-left', i === 0 ? 'mb-3 text-4xl leading-tight sm:text-5xl' : 'text-2xl leading-snug text-white/45 sm:text-3xl')}>
                {i === 0 ? <span className="rounded-sm bg-turq px-1.5 text-navy">{n.text}</span> : n.text}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
