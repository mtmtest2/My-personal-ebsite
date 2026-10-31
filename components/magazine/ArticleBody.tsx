import type { Article, Block } from '@/lib/magazine';
import { getLanguage } from '@/lib/data';
import { Foreign, Inline } from '@/components/site/Foreign';
import { cn } from '@/lib/utils';
import Reveal from '@/components/ui/Reveal';

/** Renders article blocks with the magazine's reading typography. */
export default function ArticleBody({ article }: { article: Article }) {
  const code = getLanguage(article.lang)!.code;
  return <div className="article-body">{article.body.map((b, i) => <BlockView key={i} b={b} code={code} />)}</div>;
}

function BlockView({ b, code }: { b: Block; code: string }) {
  switch (b.type) {
    case 'p':
      return <p><Inline text={b.text} /></p>;
    case 'h2':
      return <h2 id={b.id}>{b.text}</h2>;
    case 'h3':
      return <h3 id={b.id}>{b.text}</h3>;
    case 'list': {
      const L = b.ordered ? 'ol' : 'ul';
      return <L>{b.items.map((it) => <li key={it}><Inline text={it} /></li>)}</L>;
    }
    case 'example': {
      const i = b.marked ? b.text.indexOf(b.marked) : -1;
      return (
        <Reveal as="figure" className="my-8 rounded-[20px] bg-tint p-6">
          <Foreign lang={code} className={cn('block text-left font-display font-semibold text-ink', b.text.length > 90 ? 'text-xl leading-[1.6]' : 'text-[1.6rem] leading-[1.45] sm:text-[1.9rem]')}>
            {i >= 0 ? (
              <>
                {b.text.slice(0, i)}
                <span className="mark">{b.marked}</span>
                {b.text.slice(i + b.marked!.length)}
              </>
            ) : (
              b.text
            )}
          </Foreign>
          <figcaption className="mt-3 text-[15px] leading-7 text-slate-600">{b.fa}</figcaption>
        </Reveal>
      );
    }
    case 'table':
      return (
        <Reveal className="my-8 overflow-x-auto rounded-[20px] border border-rule">
          <table className="w-full min-w-[420px] text-[15px]">
            <thead className="bg-tint text-right text-sm text-slate-600">
              <tr>{b.head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody /* taste-skill-ignore: real table */ className="divide-y divide-rule">
              {b.rows.map((r) => (
                <tr key={r.join()}>
                  {r.map((c, ci) => (
                    <td key={ci} className="px-4 py-3 align-top leading-7">
                      {b.foreignCols?.includes(ci) ? <Foreign lang={code} className={cn('font-medium text-ink', ci === 0 && 'font-display text-lg')}>{c}</Foreign> : c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      );
    case 'tip':
      return (
        <aside className="my-8 flex gap-3 border-r-[3px] border-brand-600 pr-5">
          <div>
            <p className="text-sm font-bold text-brand-700">نکته</p>
            <p className="mt-1 !my-0"><Inline text={b.text} /></p>
          </div>
        </aside>
      );
  }
}
