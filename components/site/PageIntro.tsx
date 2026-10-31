import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

/** Opening block for inner pages: breadcrumbs, a display title, a short lead and, optionally, a picture beside them. */
export default function PageIntro({
  crumbs,
  title,
  lead,
  media,
  children,
}: {
  crumbs: { href?: string; label: string }[];
  title: React.ReactNode;
  lead?: React.ReactNode;
  media?: { src: string; alt: string; position?: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="container-x pb-14 pt-8 lg:pb-20 lg:pt-12">
      <Breadcrumbs items={crumbs} />
      <div className={cn(media && 'mt-2 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14')}>
        <div>
          <Reveal>
            <h1 className="h-display mt-8 max-w-3xl text-[3rem] sm:text-6xl lg:text-[4.4rem]">{title}</h1>
          </Reveal>
          {lead && (
            <Reveal delay={90}>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700">{lead}</p>
            </Reveal>
          )}
          {children}
        </div>
        {media && (
          <Reveal image delay={120} className="relative aspect-[3/2] overflow-hidden rounded-[20px] lg:mt-8">
            <Image src={media.src} alt={media.alt} fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" style={{ objectPosition: media.position }} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
