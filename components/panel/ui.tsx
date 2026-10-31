import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PageHeader({ title, desc, action }: { title: string; desc?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">{title}</h1>
        {desc && <p className="mt-1 text-sm text-slate-500">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

const tones = {
  brand: 'bg-brand-50 text-brand-600',
  sky: 'bg-cyan-50 text-cyan-600',
  violet: 'bg-brand-50 text-brand-700',
  amber: 'bg-amber-50 text-amber-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  rose: 'bg-rose-50 text-rose-600',
};
export type Tone = keyof typeof tones;

export function StatCard({ icon: Icon, label, value, hint, tone = 'brand', trend }: { icon: LucideIcon; label: string; value: string; hint?: string; tone?: Tone; trend?: string }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <span className={cn('grid h-11 w-11 place-items-center rounded-xl', tones[tone])}><Icon size={22} /></span>
        {trend && <span className="badge bg-emerald-50 text-emerald-600">{trend}</span>}
      </div>
      <p className="mt-4 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-extrabold text-slate-900">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

export function Panel({ title, action, children, className }: { title: string; action?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('card min-w-0 p-5 sm:p-6', className)}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="font-bold text-slate-900">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Progress({ value, className, barClass = 'bg-brand-600' }: { value: number; className?: string; barClass?: string }) {
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-100', className)}>
      <div className={cn('h-full rounded-full', barClass)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function Avatar({ src, name, size = 40 }: { src: string; name: string; size?: number }) {
  return <Image src={src} alt={name} width={size} height={size} className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />;
}

/** Simple vertical bar chart; values are rendered relative to the max. */
export function BarChart({ data, unit = '' }: { data: { label: string; value: number; display?: string }[]; unit?: string }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex h-56 items-end gap-3 sm:gap-5">
      {data.map((d, i) => (
        <div key={d.label} className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
          <span className="text-xs font-bold text-slate-700 opacity-0 transition group-hover:opacity-100">{d.display ?? d.value}{unit}</span>
          <div
            className={cn('w-full max-w-12 rounded-t-xl transition-all', i === data.length - 1 ? 'bg-brand-600' : 'bg-brand-100 group-hover:bg-brand-300')}
            style={{ height: `${(d.value / max) * 80}%` }}
          />
          <span className="text-[11px] text-slate-500">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

const statusTones: Record<string, string> = {
  'فعال': 'bg-emerald-50 text-emerald-700',
  'موفق': 'bg-emerald-50 text-emerald-700',
  'منتشر شده': 'bg-emerald-50 text-emerald-700',
  'عالی': 'bg-emerald-50 text-emerald-700',
  'خوب': 'bg-brand-50 text-brand-700',
  'معلق': 'bg-rose-50 text-rose-700',
  'ناموفق': 'bg-rose-50 text-rose-700',
  'نیاز به توجه': 'bg-amber-50 text-amber-700',
  'در انتظار تأیید': 'bg-amber-50 text-amber-700',
  'پیش‌نویس': 'bg-slate-100 text-slate-600',
};

export function StatusBadge({ status }: { status: string }) {
  return <span className={cn('badge', statusTones[status] ?? 'bg-slate-100 text-slate-600')}>{status}</span>;
}
