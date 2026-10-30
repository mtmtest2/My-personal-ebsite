import { GraduationCap, Pencil, Plus, Users } from 'lucide-react';
import { PageHeader, StatusBadge } from '@/components/panel/ui';
import { adminCourses } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function AdminCourses() {
  return (
    <>
      <PageHeader title="مدیریت دوره‌ها" desc="ایجاد، ویرایش و انتشار دوره‌ها" action={<button className="btn-primary"><Plus size={16} /> دوره‌ی جدید</button>} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {adminCourses.map((c) => (
          <div key={c.title} className="card p-5">
            <div className="flex items-start justify-between gap-2">
              <span className="badge bg-brand-50 text-brand-700">{c.lang}</span>
              <StatusBadge status={c.status} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
            <div className="mt-4 flex gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><GraduationCap size={16} /> {fa(c.teachers)} استاد</span>
              <span className="flex items-center gap-1.5"><Users size={16} /> {fa(c.students)} زبان‌آموز</span>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <p className="text-sm"><span className="text-lg font-extrabold text-slate-900">{fa(c.price)}</span> <span className="text-slate-500">تومان</span></p>
              <button className="btn-ghost px-3 py-1.5 text-xs"><Pencil size={14} /> ویرایش</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
