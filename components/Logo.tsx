import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className, light = false, href = '/' }: { className?: string; light?: boolean; href?: string }) {
  return (
    <Link href={href} aria-label="فرتاش، صفحه‌ی اصلی" className={cn('flex items-center gap-2', className)}>
      <Image src="/logo-mark.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" priority />
      <span className={cn('text-[1.4rem] font-extrabold leading-none', light ? 'text-white' : 'text-ink')}>فرتاش</span>
    </Link>
  );
}
