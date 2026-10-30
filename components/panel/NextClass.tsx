/**
 * The one ink surface on a dashboard: what's happening next. Turquoise marks
 * the live/upcoming time, matching its "learning is happening" role.
 */
export default function NextClass({
  when,
  title,
  meta,
  actions,
  label = 'کلاس بعدی',
}: {
  when: string;
  title: string;
  meta: React.ReactNode;
  actions: React.ReactNode;
  label?: string;
}) {
  return (
    <section aria-label={label} className="stage flex flex-col justify-between gap-6 rounded-3xl bg-navy p-6 text-white sm:p-8 lg:flex-row lg:items-end">
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/65">
          {label}
          <span className="inline-flex items-center gap-2 font-medium text-turq-soft">
            <span className="h-2 w-2 rounded-full bg-turq" aria-hidden />
            {when}
          </span>
        </p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">{meta}</div>
      </div>
      <div className="flex shrink-0 flex-wrap gap-3 [&>*]:grow sm:[&>*]:grow-0">{actions}</div>
    </section>
  );
}

/** Button styles for use on the ink panel. */
export const onInk = {
  primary: 'btn btn-lg bg-white text-navy hover:bg-white/90 focus-visible:ring-offset-navy',
  secondary: 'btn btn-lg border border-white/30 text-white hover:border-white/60 hover:bg-white/10 focus-visible:ring-offset-navy',
};
