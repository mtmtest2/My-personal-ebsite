import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className, light = false, href = '/' }: { className?: string; light?: boolean; href?: string }) {
  return (
    <Link href={href} className={cn('flex items-center gap-2', className)}>
      <Image src="/logo-mark.png" alt="لوگوی فرتاش" width={44} height={44} className="h-11 w-11 object-contain" priority />
      <span className="leading-tight">
        <span className={cn('block text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>فرتاش</span>
        <span className={cn('block text-[10px] font-semibold tracking-[0.2em]', light ? 'text-sky2-300' : 'text-sky2-500')}>FARTASH</span>
      </span>
    </Link>
  );
}
