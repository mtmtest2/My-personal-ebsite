import Link from 'next/link';
import { BookOpen, CalendarClock, Clock, Flame, Trophy, User, Video } from 'lucide-react';
import NextClass, { onInk } from '@/components/panel/NextClass';
import { BarChart, PageHeader, Panel, Progress, SeeAll, StatCard } from '@/components/panel/ui';
import Badge from '@/components/ui/Badge';
import { assignments, skills, student, studentCourses, studentSchedule, weeklyStudy } from '@/lib/data';
import { fa } from '@/lib/utils';

const days = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

export default function StudentDashboard() {
  const next = studentSchedule[0];
  const upcoming = assignments.filter((a) => a.status === 'pending').concat(assignments.slice(2, 3));

  return (
    <div className="space-y-10">
      <PageHeader
        title={`سلام ${student.name.split(' ')[0]}`}
        desc="این هفته ۸۰٪ برنامه‌ی مطالعه‌ات را انجام دادی. فقط ۲ تمرین دیگر تا رسیدن به هدف هفتگی مانده."
      />

      <NextClass
        when="۲ ساعت دیگر"
        title={next.title}
        meta={
          <>
            <span className="flex items-center gap-2">
              <User size={16} aria-hidden /> {next.teacher}
            </span>
            <span className="flex items-center gap-2">
              <CalendarClock size={16} aria-hidden /> {next.day}، {next.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} aria-hidden /> {next.time}
            </span>
          </>
        }
        actions={
          <>
            <Link href="/student/schedule" className={onInk.primary}>
              <Video size={18} aria-hidden /> ورود به کلاس بعدی
            </Link>
            <button type="button" className={onInk.secondary}>
              یادآوری برای من
            </button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        <StatCard icon={Flame} label="روزهای پیاپی مطالعه" value={`${fa(student.streak)} روز`} />
        <StatCard icon={Trophy} label="امتیاز کسب‌شده" value={fa(student.xp)} trend="+۱۲۰" />
        <StatCard icon={BookOpen} label="دوره‌های فعال" value={fa(studentCourses.length)} />
        <StatCard icon={Clock} label="ساعت مطالعه این ماه" value={`${fa(26)} ساعت`} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="دوره‌های در حال یادگیری" className="xl:col-span-2" action={<SeeAll href="/student/courses">همه‌ی دوره‌ها</SeeAll>}>
          <ul className="divide-y divide-rule">
            {studentCourses.map((c) => (
              <li key={c.id} className="py-5 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-bold text-ink">{c.title}</p>
                  <span className="num text-sm font-semibold text-accent-700">{fa(c.progress)}٪</span>
                </div>
                <p className="mt-0.5 text-sm text-muted">
                  {c.teacher}، {fa(c.done)} از {fa(c.lessons)} جلسه
                </p>
                <Progress value={c.progress} className="mt-3" label={`پیشرفت ${c.title}`} />
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="مهارت‌های من">
          <ul className="space-y-5">
            {skills.map((s) => (
              <li key={s.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-ink">
                    <bdi>{s.name}</bdi>
                  </span>
                  <span className="num font-semibold text-ink">{fa(s.value)}٪</span>
                </div>
                <Progress value={s.value} label={s.name} barClass={s.value < 65 ? 'bg-warning' : 'bg-accent-600'} />
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-rule pt-4 text-sm leading-7 text-body">
            <span className="font-semibold text-warning">پیشنهاد:</span> مهارت <bdi>Writing</bdi> ضعیف‌تر است. شرکت در ورکشاپ رایتینگ این هفته را از دست نده.
          </p>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="زمان مطالعه‌ی این هفته (دقیقه)">
          <BarChart data={weeklyStudy.map((v, i) => ({ label: days[i], value: v, display: fa(v) }))} highlight={5} />
        </Panel>
        <Panel title="تکالیف پیش رو" action={<SeeAll href="/student/assignments">همه‌ی تکالیف</SeeAll>}>
          <ul className="divide-y divide-rule">
            {upcoming.map((a) => (
              <li key={a.title} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-ink">
                    <bdi>{a.title}</bdi>
                  </p>
                  <p className="text-sm text-muted">{a.course}</p>
                </div>
                <Badge tone={a.status === 'pending' ? 'warning' : 'success'} dot>
                  {a.due}
                </Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
