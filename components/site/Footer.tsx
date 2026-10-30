import Link from 'next/link';
import { Instagram, Send, Youtube } from 'lucide-react';
import Logo from '@/components/Logo';

const cols = [
  { title: 'فرتاش', links: [['روش کار', '/#how'], ['اساتید', '/#teachers'], ['همکاری با ما', '/register?role=teacher'], ['سوالات متداول', '/#faq']] },
  { title: 'دوره‌ها', links: [['انگلیسی', '/#languages'], ['آلمانی', '/#languages'], ['فرانسوی', '/#languages'], ['آمادگی آزمون', '/#languages'], ['تعرفه‌ها', '/#pricing']] },
  { title: 'پنل‌ها', links: [['ورود', '/login'], ['ثبت‌نام', '/register'], ['پنل زبان‌آموز', '/student'], ['پنل استاد', '/teacher'], ['پنل مدیریت', '/admin']] },
];

const social = [
  { icon: Instagram, label: 'اینستاگرام فرتاش' },
  { icon: Send, label: 'کانال تلگرام فرتاش' },
  { icon: Youtube, label: 'یوتیوب فرتاش' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-navy text-white/75">
      <div className="container-x grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7">آموزشگاه آنلاین زبان‌های خارجی، با کلاس‌های زنده و گروه‌های کوچک.</p>
          <dl className="mt-6 text-sm">
            <div className="flex items-center gap-3">
              <dt className="w-14 shrink-0 text-white/50">تلفن</dt>
              <dd>
                <a href="tel:+982191000000" dir="ltr" className="inline-flex min-h-11 items-center text-white hover:text-turq-soft">
                  021-9100 0000
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="w-14 shrink-0 text-white/50">ایمیل</dt>
              <dd>
                <a href="mailto:info@fartash.ir" className="inline-flex min-h-11 items-center text-white hover:text-turq-soft">
                  info@fartash.ir
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="w-14 shrink-0 text-white/50">نشانی</dt>
              <dd className="flex min-h-11 items-center text-white">تهران، خیابان ولیعصر</dd>
            </div>
          </dl>
        </div>
        <nav aria-label="پیوندهای پانویس" className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-1 lg:col-span-7">
          {cols.map((c) => (
            <div key={c.title}>
              <h2 className="mb-2 text-sm font-bold text-white">{c.title}</h2>
              <ul className="text-sm">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="inline-flex min-h-11 min-w-11 items-center transition-colors duration-120 hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col-reverse items-start justify-between gap-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© ۱۴۰۵ فرتاش. همه‌ی حقوق محفوظ است.</p>
          <ul className="flex gap-1">
            {social.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a href="#" aria-label={label} className="grid h-11 w-11 place-items-center rounded-md text-white/70 transition-colors duration-120 hover:bg-white/10 hover:text-white focus-visible:ring-offset-navy">
                  <Icon size={18} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
