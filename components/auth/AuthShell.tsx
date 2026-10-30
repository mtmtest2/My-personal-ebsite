import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

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
          <div className="mt-8">{children}</div>
        </div>
      </div>
      <div className="relative hidden overflow-hidden bg-navy lg:flex lg:flex-col lg:justify-center lg:p-16">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-md text-white">
          <Image src="/logo-mark.png" alt="فرتاش" width={96} height={96} className="h-24 w-24" />
          <h2 className="mt-8 font-display text-5xl font-bold leading-tight">یادگیری زبان، این بار با برنامه</h2>
          <ul className="mt-8 space-y-4">
            {['کلاس‌های زنده با اساتید گزینش‌شده', 'تعیین سطح و مشاوره‌ی رایگان', 'پنل اختصاصی و گزارش پیشرفت', 'گواهی معتبر پایان دوره'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/90"><CheckCircle2 size={20} className="text-sky2-300" /> {t}</li>
            ))}
          </ul>
          <div className="mt-12 rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="leading-8 text-white/90">«در ۵ ماه از نمره ۵.۵ به ۷.۵ رسیدم. برنامه‌ی هفتگی و فیدبک دقیق استاد همه چیز را تغییر داد.»</p>
            <div className="mt-4 flex items-center gap-3">
              <Image src="/images/people/9.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              <div className="text-sm"><p className="font-bold">نگار طاهری</p><p className="text-white/70">IELTS 7.5</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
