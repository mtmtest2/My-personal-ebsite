import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className, light = false, href = '/' }: { className?: string; light?: boolean; href?: string }) {
  return (
    <Link href={href} className={cn('flex items-center gap-2.5', className)}>
      <span className={cn('grid h-10 w-10 place-items-center overflow-hidden rounded-xl', light ? 'bg-white' : 'bg-white ring-1 ring-slate-100')}>
        <Image src="/logo-mark.png" alt="لوگوی فرتاش" width={40} height={40} className="h-9 w-9 object-contain" priority />
      </span>
      <span className="leading-tight">
        <span className={cn('block text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-brand-800')}>فرتاش</span>
        <span className={cn('block text-[10px] font-semibold tracking-[0.2em]', light ? 'text-brand-100' : 'text-sky2-500')}>FARTASH</span>
      </span>
    </Link>
  );
}
