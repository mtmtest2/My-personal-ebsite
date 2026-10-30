import Link from 'next/link';
import { CalendarDays, ClipboardCheck, Clock, Star, Users, Video } from 'lucide-react';
import NextClass, { onInk } from '@/components/panel/NextClass';
import { Avatar, PageHeader, Panel, SeeAll, StatCard, StatusBadge } from '@/components/panel/ui';
import Badge from '@/components/ui/Badge';
import { submissions, teacher, teacherClasses, teacherStudents } from '@/lib/data';
import { cn, fa } from '@/lib/utils';

export default function TeacherDashboard() {
  const [today, ...later] = teacherClasses;
  return (
    <div className="space-y-10">
      <PageHeader title={`روز بخیر، ${teacher.name}`} desc="امروز ۲ کلاس و ۳ تکلیف برای تصحیح داری." />

      <NextClass
        when={today.next}
        title={today.title}
        meta={
          <>
            <span className="flex items-center gap-2">
              <Users size={16} aria-hidden /> {fa(today.students)} زبان‌آموز
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} aria-hidden /> {today.time}
            </span>
          </>
        }
        actions={
          <button type="button" className={onInk.primary}>
            <Video size={18} aria-hidden /> شروع کلاس
          </button>
        }
      />

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        <StatCard icon={Users} label="زبان‌آموزان فعال" value={fa(33)} />
        <StatCard icon={CalendarDays} label="کلاس‌های این هفته" value={fa(7)} />
        <StatCard icon={ClipboardCheck} label="تکالیف در انتظار" value={fa(submissions.length)} />
        <StatCard icon={Star} label="امتیاز رضایت" value="۴٫۹" trend="+۰٫۱" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="جلسه‌های بعدی" className="xl:col-span-2" action={<SeeAll href="/teacher/classes">همه‌ی کلاس‌ها</SeeAll>}>
          {/* Every class after the one in the ink panel, in the order of their next session. */}
          <ol className="divide-y divide-rule">
            {later.map((c) => (
              <li key={c.id} className="grid grid-cols-[6.5rem_1fr] items-start gap-x-4 gap-y-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-x-6">
                <p className={cn('font-bold', c.next.startsWith('امروز') ? 'text-accent-700' : 'text-ink')}>{c.next}</p>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-semibold text-ink">{c.title}</p>
                    <Badge tone="brand">{c.level}</Badge>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">
                    {c.time}، {fa(c.students)} نفر
                  </p>
                </div>
                <Link href="/teacher/classes" className="btn-secondary col-span-2 sm:col-span-1">
                  جزئیات کلاس
                </Link>
              </li>
            ))}
          </ol>
        </Panel>

        <Panel title="تکالیف جدید برای تصحیح">
          <ul className="divide-y divide-rule">
            {submissions.map((s) => {
              const st = teacherStudents.find((t) => t.name === s.student)!;
              return (
                <li key={s.title} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                  <Avatar src={st.photo} name="" size={40} />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{s.student}</p>
                    <p className="truncate text-sm text-body">
                      <bdi>{s.title}</bdi>
                    </p>
                    <p className="text-sm text-muted">{s.time}</p>
                  </div>
                  <button type="button" className="btn-secondary">
                    تصحیح
                  </button>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>

      <Panel title="زبان‌آموزانی که نیاز به توجه دارند" action={<SeeAll href="/teacher/students">همه‌ی زبان‌آموزان</SeeAll>}>
        <ul className="divide-y divide-rule">
          {teacherStudents.slice(2, 5).map((s) => (
            <li key={s.name} className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4 first:pt-0 last:pb-0">
              <Avatar src={s.photo} name="" size={44} />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink">{s.name}</p>
                <p className="text-sm text-muted">
                  {s.className}، حضور {fa(s.attendance)}٪، میانگین {fa(s.avg)}
                </p>
              </div>
              <StatusBadge status={s.status} />
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
