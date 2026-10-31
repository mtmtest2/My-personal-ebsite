import { CheckCircle2, Clock, FileText, Upload } from 'lucide-react';
import { PageHeader, Panel } from '@/components/panel/ui';
import { assignments } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function StudentAssignments() {
  return (
    <>
      <PageHeader title="تکالیف و آزمون‌ها" desc="تکالیف را به موقع تحویل بده و نتیجه‌ی تصحیح را ببین" />
      <Panel title="لیست تکالیف">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-right text-xs text-slate-500">
                <th className="pb-3 font-medium">عنوان</th>
                <th className="pb-3 font-medium">کلاس</th>
                <th className="pb-3 font-medium">مهلت / وضعیت</th>
                <th className="pb-3 font-medium">نمره</th>
                <th className="pb-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {assignments.map((a) => (
                <tr key={a.title}>
                  <td className="py-4">
                    <span className="flex items-center gap-3 font-semibold text-slate-800">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600"><FileText size={16} /></span>
                      <span dir="ltr">{a.title}</span>
                    </span>
                  </td>
                  <td className="py-4 text-slate-600">{a.course}</td>
                  <td className="py-4">
                    {a.status === 'pending' ? (
                      <span className="badge bg-amber-50 text-amber-700"><Clock size={12} /> {a.due}</span>
                    ) : (
                      <span className="badge bg-emerald-50 text-emerald-700"><CheckCircle2 size={12} /> {a.status === 'graded' ? 'تصحیح شد' : 'تحویل شد'}</span>
                    )}
                  </td>
                  <td className="py-4 font-bold text-slate-900">{'score' in a && a.score ? `${fa(a.score)} / ۱۰۰` : '—'}</td>
                  <td className="py-4 text-left">
                    {a.status === 'pending' && <button className="btn-primary px-3 py-1.5 text-xs"><Upload size={14} /> ارسال</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}
