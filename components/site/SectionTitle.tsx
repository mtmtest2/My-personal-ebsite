import { cn } from '@/lib/utils';
import Reveal from '@/components/ui/Reveal';

export default function SectionTitle({ title, desc, as: Tag = 'h2', className }: { title: string; desc?: React.ReactNode; as?: 'h1' | 'h2'; className?: string }) {
  return (
    <Reveal className={cn('max-w-2xl', className)}>
      <Tag className="h-display text-[2.6rem] sm:text-5xl">{title}</Tag>
      {desc && <p className="mt-4 max-w-xl text-[17px] leading-8 text-slate-600">{desc}</p>}
    </Reveal>
  );
}
