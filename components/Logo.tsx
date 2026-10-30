import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className, light = false, href = '/' }: { className?: string; light?: boolean; href?: string }) {
  return (
    <Link href={href} className={cn('flex items-center gap-2', className)}>
      <Image src="/logo-mark.png" alt="لوگوی فرتاش" width={44} height={44} className="h-11 w-11 object-contain" priority />
      <span className={cn('font-display text-[1.7rem] font-bold leading-none', light ? 'text-white' : 'text-ink')}>فرتاش</span>
    </Link>
  );
}
