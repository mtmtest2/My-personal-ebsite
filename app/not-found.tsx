import Link from 'next/link';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-tint px-4 text-center">
      <div>
        <Logo className="justify-center" />
        <p className="mt-10 font-display text-9xl font-bold text-brand-600">۴۰۴</p>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">صفحه‌ای که دنبالش بودی پیدا نشد</h1>
        <p className="mt-2 text-slate-500">شاید آدرس اشتباه است یا صفحه جابه‌جا شده.</p>
        <Link href="/" className="btn-gradient mt-8">بازگشت به خانه</Link>
      </div>
    </div>
  );
}
