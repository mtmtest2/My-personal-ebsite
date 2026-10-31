import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

/** A quiet, inline note for parts of the UI that are not connected to a backend yet. */
export default function DemoNotice({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p role="note" className={cn('flex items-start gap-2.5 rounded-lg border border-dashed border-rule bg-tint px-4 py-3 text-sm leading-7 text-slate-600', className)}>
      <Info size={17} className="mt-1 shrink-0 text-brand-600" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
