import Breadcrumbs from './Breadcrumbs';

/** Opening block for inner pages: breadcrumbs, a display title and a short lead. */
export default function PageIntro({ crumbs, title, lead, children }: { crumbs: { href?: string; label: string }[]; title: React.ReactNode; lead?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="container-x pb-14 pt-8 lg:pb-20 lg:pt-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="h-display mt-8 max-w-3xl text-[3rem] sm:text-6xl lg:text-[4.4rem]">{title}</h1>
      {lead && <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">{lead}</p>}
      {children}
    </section>
  );
}
