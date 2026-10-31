import type { Language } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Foreign } from './Foreign';

/** A single phrasebook page, the static sibling of the hero's interactive Phrasebook. */
export default function PhraseCard({ lang, className }: { lang: Language; className?: string }) {
  const p = lang.phrase;
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-x-3 -bottom-2 h-full rounded-[20px] border border-rule bg-tint" aria-hidden />
      <div className="relative rounded-[20px] border border-rule bg-paper p-6 sm:p-8">
        <p className="text-sm text-slate-500">{p.fa}</p>
        <Foreign lang={lang.code} className="mt-5 block text-left font-display text-[2.1rem] font-semibold leading-[1.35] text-ink sm:text-[2.5rem]">
          {p.before}
          <span className="mark">{p.marked}</span>
          {p.after}
        </Foreign>
      </div>
    </div>
  );
}
