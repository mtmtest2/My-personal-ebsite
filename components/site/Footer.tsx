import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone, Send, Youtube } from 'lucide-react';
import Logo from '@/components/Logo';

const cols = [
  { title: 'فرتاش', links: [['درباره ما', '/#how'], ['اساتید', '/#teachers'], ['همکاری با ما', '/register?role=teacher'], ['تماس با ما', '/#contact']] },
  { title: 'دوره‌ها', links: [['انگلیسی', '/#languages'], ['آلمانی', '/#languages'], ['فرانسوی', '/#languages'], ['آمادگی آزمون', '/#languages']] },
  { title: 'پشتیبانی', links: [['سوالات متداول', '/#faq'], ['تعرفه‌ها', '/#pricing'], ['ورود به پنل', '/login'], ['ثبت‌نام', '/register']] },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white/85">
      <div className="container-x relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            فرتاش، آموزشگاه آنلاین زبان‌های خارجی؛ با کلاس‌های زنده، اساتید مجرب و مسیری روشن از اولین کلمه تا تسلط کامل.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} className="text-sky2-400" /> <span dir="ltr">021-9100 0000</span></li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-sky2-400" /> info@fartash.ir</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-sky2-400" /> تهران، خیابان ولیعصر</li>
          </ul>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 font-bold text-white">{c.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-white/70 transition hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/60 sm:flex-row">
          <p>© ۱۴۰۵ فرتاش. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-2">
            {[Instagram, Send, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="شبکه اجتماعی" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white/85 transition hover:bg-white/15 hover:text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
