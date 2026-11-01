import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { contact, languages } from '@/lib/data';
import { topics } from '@/lib/magazine';

const cols: { title: string; links: [string, string][] }[] = [
  { title: 'فرتاش', links: [['کلاس‌های آنلاین', '/online-classes'], ['اساتید', '/teachers'], ['همکاری با ما', '/register?role=teacher'], ['سوالات متداول', '/#faq']] },
  { title: 'زبان‌ها', links: languages.map((l) => [l.name, `/languages/${l.slug}`] as [string, string]) },
  { title: 'مجله', links: [['همه‌ی مقاله‌ها', '/magazine'], ...topics.slice(0, 3).map((t) => [t.name, `/magazine/topics/${t.slug}`] as [string, string])] },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/85">
      <div className="container-x relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-[15px] leading-7 text-white/80">
            فرتاش، آموزشگاه آنلاین انگلیسی، آلمانی و فرانسوی؛ همه‌ی کلاس‌ها زنده‌اند و با استاد برگزار می‌شوند.
          </p>
          <ul className="mt-6 space-y-3 text-[15px]">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-sky2-300" aria-hidden />
              <a href={contact.phoneHref} dir="ltr" className="font-semibold text-white hover:underline">{contact.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sky2-300" aria-hidden />
              <span>{contact.address}</span>
            </li>
          </ul>
          <Link href="/consultation" className="btn mt-6 bg-white/10 text-white hover:bg-white/15">
            درخواست مشاوره و تعیین سطح
          </Link>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 font-semibold text-white">{c.title}</h4>
            <ul className="space-y-2.5 text-[15px]">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-white/80 transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative bg-black/15">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-[13px] text-white/75 sm:flex-row">
          <p>© ۱۴۰۵ فرتاش. تمامی حقوق محفوظ است.</p>
          <Link href="/login" className="hover:text-white">ورود به پنل</Link>
        </div>
      </div>
    </footer>
  );
}
