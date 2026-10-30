import { MessageSquare } from 'lucide-react';
import { Avatar, PageHeader, Panel, Progress, StatusBadge } from '@/components/panel/ui';
import { teacherStudents } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function TeacherStudents() {
  return (
    <>
      <PageHeader title="زبان‌آموزان" desc="عملکرد، حضور و وضعیت هر زبان‌آموز" />
      <Panel title={`${fa(teacherStudents.length)} زبان‌آموز`}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-right text-xs text-slate-500">
                <th className="pb-3 font-medium">زبان‌آموز</th>
                <th className="pb-3 font-medium">کلاس</th>
                <th className="pb-3 font-medium">حضور</th>
                <th className="pb-3 font-medium">میانگین نمرات</th>
                <th className="pb-3 font-medium">وضعیت</th>
                <th className="pb-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {teacherStudents.map((s) => (
                <tr key={s.name}>
                  <td className="py-3.5"><span className="flex items-center gap-3 font-semibold text-slate-800"><Avatar src={s.photo} name={s.name} size={36} /> {s.name}</span></td>
                  <td className="py-3.5 text-slate-600">{s.className}</td>
                  <td className="w-40 py-3.5">
                    <div className="flex items-center gap-2"><Progress value={s.attendance} className="w-20" /> <span className="text-xs text-slate-600">{fa(s.attendance)}٪</span></div>
                  </td>
                  <td className="py-3.5 font-bold text-slate-900">{fa(s.avg)}</td>
                  <td className="py-3.5"><StatusBadge status={s.status} /></td>
                  <td className="py-3.5 text-left"><button className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-brand-50 hover:text-brand-600" aria-label="پیام"><MessageSquare size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}
