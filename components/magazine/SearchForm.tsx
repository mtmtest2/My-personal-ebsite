import { Search } from 'lucide-react';
import { languages } from '@/lib/data';
import { topics } from '@/lib/magazine';
import { cn } from '@/lib/utils';

/** GET form to /magazine/search; works without JavaScript. */
export default function SearchForm({ q = '', lang = '', topic = '', compact = false, className }: { q?: string; lang?: string; topic?: string; compact?: boolean; className?: string }) {
  return (
    <form action="/magazine/search" role="search" className={cn('flex flex-col gap-2 sm:flex-row', className)}>
      <label className="relative flex-1">
        <span className="sr-only">جست‌وجو در مجله</span>
        <Search size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden />
        <input name="q" defaultValue={q} type="search" placeholder="جست‌وجو: گرامر، IELTS، تلفظ…" className="input h-12 pr-11 text-base" />
      </label>
      {!compact && (
        <>
          <label>
            <span className="sr-only">زبان</span>
            <select name="lang" defaultValue={lang} className="input h-12 sm:w-36">
              <option value="">همه‌ی زبان‌ها</option>
              {languages.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">موضوع</span>
            <select name="topic" defaultValue={topic} className="input h-12 sm:w-44">
              <option value="">همه‌ی موضوع‌ها</option>
              {topics.map((t) => <option key={t.slug} value={t.slug}>{t.name}</option>)}
            </select>
          </label>
        </>
      )}
      <button type="submit" className="btn-primary h-12 px-6">جست‌وجو</button>
    </form>
  );
}
