import { Pencil, Plus } from 'lucide-react';
import { PageHeader, StatusBadge } from '@/components/panel/ui';
import { adminCourses } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function AdminCourses() {
  return (
    <>
      <PageHeader
        title="مدیریت دوره‌ها"
        desc="ایجاد، ویرایش و انتشار دوره‌ها"
        action={
          <button type="button" className="btn-primary">
            <Plus size={18} aria-hidden /> دوره‌ی جدید
          </button>
        }
      />
      <section className="card min-w-0 overflow-hidden" aria-label="فهرست دوره‌ها">
        <div className="overflow-x-auto">
          <table className="table table-hover min-w-[760px]">
            <thead>
              <tr>
                <th scope="col">دوره</th>
                <th scope="col">زبان</th>
                <th scope="col" className="num">
                  اساتید
                </th>
                <th scope="col" className="num">
                  زبان‌آموزان
                </th>
                <th scope="col" className="num">
                  شهریه (تومان)
                </th>
                <th scope="col">وضعیت</th>
                <th scope="col">
                  <span className="sr-only">ویرایش</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {adminCourses.map((c) => (
                <tr key={c.title}>
                  <td className="font-semibold text-ink">
                    <bdi>{c.title}</bdi>
                  </td>
                  <td>{c.lang}</td>
                  <td className="num">{fa(c.teachers)}</td>
                  <td className="num">{fa(c.students)}</td>
                  <td className="num font-semibold text-ink">{fa(c.price)}</td>
                  <td>
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="text-end">
                    <button type="button" className="btn-secondary">
                      <Pencil size={18} aria-hidden /> ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
