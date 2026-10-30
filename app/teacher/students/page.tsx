import { MessageSquare } from 'lucide-react';
import { Avatar, PageHeader, Panel, Progress, StatusBadge } from '@/components/panel/ui';
import { teacherStudents } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function TeacherStudents() {
  return (
    <>
      <PageHeader title="زبان‌آموزان" desc="عملکرد، حضور و وضعیت هر زبان‌آموز" />
      <Panel title={`${fa(teacherStudents.length)} زبان‌آموز`}>
        {/* Stacked rows on phones, a table from md. */}
        <ul className="divide-y divide-rule md:hidden">
          {teacherStudents.map((s) => (
            <li key={s.name} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                <Avatar src={s.photo} name="" size={44} />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-ink">{s.name}</p>
                  <p className="text-sm text-muted">{s.className}</p>
                </div>
                <button type="button" className="btn-quiet btn-icon" aria-label={`پیام به ${s.name}`}>
                  <MessageSquare size={18} />
                </button>
              </div>
              <dl className="mt-3 grid grid-cols-[1fr_auto_auto] items-center gap-x-5 text-sm">
                <div className="flex items-center gap-3">
                  <dt className="sr-only">حضور</dt>
                  <Progress value={s.attendance} className="flex-1" label={`حضور ${s.name}`} />
                  <dd className="num">حضور {fa(s.attendance)}٪</dd>
                </div>
                <div className="flex gap-1">
                  <dt className="text-muted">میانگین</dt>
                  <dd className="font-semibold text-ink">{fa(s.avg)}</dd>
                </div>
                <div>
                  <dt className="sr-only">وضعیت</dt>
                  <dd>
                    <StatusBadge status={s.status} />
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <div className="-mx-5 hidden overflow-x-auto sm:-mx-6 md:block">
          <table className="table table-hover min-w-[720px]">
            <thead>
              <tr>
                <th scope="col">زبان‌آموز</th>
                <th scope="col">کلاس</th>
                <th scope="col">حضور</th>
                <th scope="col" className="num">
                  میانگین نمرات
                </th>
                <th scope="col">وضعیت</th>
                <th scope="col">
                  <span className="sr-only">پیام</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {teacherStudents.map((s) => (
                <tr key={s.name}>
                  <td>
                    <span className="flex items-center gap-3 font-semibold text-ink">
                      <Avatar src={s.photo} name="" size={36} /> {s.name}
                    </span>
                  </td>
                  <td className="whitespace-nowrap">{s.className}</td>
                  <td>
                    <span className="flex items-center gap-3">
                      <Progress value={s.attendance} className="w-24" label={`حضور ${s.name}`} />
                      <span className="num w-10 text-sm">{fa(s.attendance)}٪</span>
                    </span>
                  </td>
                  <td className="num font-semibold text-ink">{fa(s.avg)}</td>
                  <td>
                    <StatusBadge status={s.status} />
                  </td>
                  <td className="text-end">
                    <button type="button" className="btn-quiet btn-icon" aria-label={`پیام به ${s.name}`}>
                      <MessageSquare size={18} />
                    </button>
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
