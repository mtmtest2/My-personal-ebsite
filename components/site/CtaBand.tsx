import Link from 'next/link';

type Action = { href: string; label: string };

/** The solid navy invitation block that closes a page. One per page, never more. */
export default function CtaBand({ title, desc, primary, secondary }: { title: string; desc?: string; primary: Action; secondary?: Action }) {
  return (
    <section className="container-x pb-24">
      <div className="grid items-center gap-8 rounded-[20px] bg-navy px-8 py-14 text-white sm:px-14 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
          {desc && <p className="mt-3 max-w-xl leading-8 text-white/75">{desc}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="btn bg-white px-7 py-3.5 text-base text-navy hover:bg-white/90">{primary.label}</Link>
          {secondary && (
            <Link href={secondary.href} className="btn border border-white/30 px-6 py-3.5 text-base text-white hover:bg-white/10">{secondary.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
