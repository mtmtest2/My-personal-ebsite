import Link from 'next/link';
import { contact } from '@/lib/data';

type Action = { href: string; label: string };

/** The solid navy invitation block that closes a page. One per page, never more. */
export default function CtaBand({ title, desc, primary, secondary }: { title: string; desc?: string; primary: Action; secondary?: Action }) {
  return (
    <section className="container-x pb-24">
      <div className="grid items-center gap-8 rounded-[20px] bg-navy px-8 py-14 text-white sm:px-14 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
          {desc && <p className="mt-3 max-w-xl leading-8 text-white/80">{desc}</p>}
          <p className="mt-4 text-sm text-white/80">
            یا تماس بگیر: <a href={contact.phoneHref} dir="ltr" className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">{contact.phone}</a>
          </p>
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
