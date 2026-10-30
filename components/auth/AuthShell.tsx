import Image from 'next/image';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { testimonials } from '@/lib/data';

export default function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const quote = testimonials[1];
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
      <div className="hidden bg-navy lg:flex lg:flex-col lg:justify-center lg:p-16">
        <figure className="mx-auto max-w-md text-white">
          <blockquote className="font-display text-[2.2rem] font-semibold leading-[1.5]">«{quote.text}»</blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <Image src={quote.photo} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
            <div className="text-sm">
              <p className="font-bold">{quote.name}</p>
              <p className="text-white/70">{quote.role}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
