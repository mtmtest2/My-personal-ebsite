import { Clock, FileUp, Users, Video } from 'lucide-react';
import { PageHeader, Progress } from '@/components/panel/ui';
import Badge from '@/components/ui/Badge';
import { teacherClasses } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function TeacherClasses() {
  return (
    <>
      <PageHeader title="کلاس‌های من" desc="مدیریت جلسات، حضور و غیاب و منابع هر کلاس" action={<button type="button" className="btn-primary">درخواست کلاس جدید</button>} />
      <ul className="grid gap-5 lg:grid-cols-2">
        {teacherClasses.map((c) => (
          <li key={c.id} className="card flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-bold text-ink">{c.title}</h2>
              <Badge tone="brand">سطح {c.level}</Badge>
            </div>
            <p className="mt-1 flex items-center gap-2 text-sm text-body">
              <Clock size={16} className="text-muted" aria-hidden /> {c.time}
            </p>
            <dl className="mt-6 grid grid-cols-3 divide-x divide-x-reverse divide-rule border-y border-rule py-4 text-center">
              <div>
                <dt className="text-sm text-muted">زبان‌آموز</dt>
                <dd className="mt-1 text-lg font-bold text-ink">{fa(c.students)}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">پیشرفت</dt>
                <dd className="mt-1 text-lg font-bold text-ink">{fa(c.progress)}٪</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">جلسه‌ی بعد</dt>
                <dd className="mt-1 text-base font-bold text-ink">{c.next}</dd>
              </div>
            </dl>
            <Progress value={c.progress} className="mt-5" label={`پیشرفت ${c.title}`} />
            <div className="mt-6 flex flex-wrap gap-2">
              <button type="button" className="btn-primary flex-1">
                <Video size={18} aria-hidden /> شروع کلاس
              </button>
              <button type="button" className="btn-secondary">
                <Users size={18} aria-hidden /> حضور و غیاب
              </button>
              <button type="button" className="btn-secondary">
                <FileUp size={18} aria-hidden /> منابع
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
