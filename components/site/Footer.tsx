import Link from 'next/link';
import Logo from '@/components/Logo';
import { languages } from '@/lib/data';
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
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            فرتاش، آموزشگاه آنلاین انگلیسی، آلمانی و فرانسوی؛ همه‌ی کلاس‌ها زنده‌اند و با استاد برگزار می‌شوند.
          </p>
          <Link href="/consultation" className="mt-6 inline-flex rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15">
            درخواست مشاوره و تعیین سطح
          </Link>
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
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>© ۱۴۰۵ فرتاش. تمامی حقوق محفوظ است.</p>
          <Link href="/login" className="hover:text-white">ورود به پنل</Link>
        </div>
      </div>
    </footer>
  );
}
