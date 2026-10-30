import { Upload } from 'lucide-react';
import { PageHeader, Panel } from '@/components/panel/ui';
import Badge from '@/components/ui/Badge';
import { assignments } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function StudentAssignments() {
  return (
    <>
      <PageHeader title="تکالیف و آزمون‌ها" desc="تکالیف را به موقع تحویل بده و نتیجه‌ی تصحیح را ببین" />
      <Panel title="لیست تکالیف">
        {/* A table from md; on phones each row stacks into title, status and action. */}
        <div className="hidden md:block">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">عنوان</th>
                <th scope="col">دوره</th>
                <th scope="col">مهلت یا وضعیت</th>
                <th scope="col" className="num">
                  نمره
                </th>
                <th scope="col">
                  <span className="sr-only">عملیات</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr key={a.title}>
                  <td className="font-semibold text-ink">
                    <bdi>{a.title}</bdi>
                  </td>
                  <td>{a.course}</td>
                  <td>
                    <Status a={a} />
                  </td>
                  <td className="num font-semibold text-ink">{'score' in a && a.score ? `${fa(a.score)} از ۱۰۰` : '—'}</td>
                  <td className="text-end">
                    {a.status === 'pending' && (
                      <button type="button" className="btn-primary btn-sm">
                        <Upload size={16} aria-hidden /> ارسال
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="divide-y divide-rule md:hidden">
          {assignments.map((a) => (
            <li key={a.title} className="py-4 first:pt-0 last:pb-0">
              <p className="font-semibold text-ink">
                <bdi>{a.title}</bdi>
              </p>
              <p className="text-sm text-muted">{a.course}</p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-3">
                  <Status a={a} />
                  {'score' in a && a.score ? <span className="text-sm font-semibold text-ink">{fa(a.score)} از ۱۰۰</span> : null}
                </span>
                {a.status === 'pending' && (
                  <button type="button" className="btn-primary">
                    <Upload size={18} aria-hidden /> ارسال
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}

function Status({ a }: { a: (typeof assignments)[number] }) {
  if (a.status === 'pending')
    return (
      <Badge tone="warning" dot>
        {a.due}
      </Badge>
    );
  return (
    <Badge tone="success" dot>
      {a.status === 'graded' ? 'تصحیح شد' : 'تحویل شد'}
    </Badge>
  );
}
