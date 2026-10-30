import Link from 'next/link';
import { BookOpen, CreditCard, Download, GraduationCap, Plus, UserCheck, Users } from 'lucide-react';
import { Avatar, BarChart, PageHeader, Panel, SeeAll, StatCard, StatusBadge } from '@/components/panel/ui';
import { adminUsers, languages, recentPayments, revenueByMonth } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function AdminDashboard() {
  const totalStudents = languages.reduce((s, l) => s + l.students, 0);
  const pendingTeachers = adminUsers.filter((u) => u.status === 'در انتظار تأیید');
  return (
    <div className="space-y-10">
      <PageHeader
        title="نمای کلی سایت"
        desc="گزارش عملکرد فرتاش در ۶ ماه اخیر"
        action={
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-secondary">
              <Download size={18} aria-hidden /> خروجی Excel
            </button>
            <Link href="/admin/courses" className="btn-primary">
              <Plus size={18} aria-hidden /> افزودن دوره
            </Link>
          </div>
        }
      />

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        <StatCard icon={Users} label="کل زبان‌آموزان" value={fa(totalStudents)} trend="+۸٪" />
        <StatCard icon={GraduationCap} label="اساتید فعال" value={fa(87)} trend="+۳" />
        <StatCard icon={CreditCard} label="درآمد مهر (تومان)" value="۴۶۸ م" trend="+۱۴٪" />
        <StatCard icon={BookOpen} label="کلاس‌های این هفته" value={fa(342)} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="درآمد ماهانه (میلیون تومان)" className="xl:col-span-2">
          <BarChart data={revenueByMonth.map((r) => ({ label: r.m, value: r.v, display: fa(r.v) }))} />
        </Panel>
        <Panel title="سهم زبان‌ها از زبان‌آموزان">
          <ul className="space-y-4">
            {languages.map((l) => {
              const pct = Math.round((l.students / totalStudents) * 100);
              return (
                <li key={l.code}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{l.name}</span>
                    <span className="num font-semibold text-ink">{fa(pct)}٪</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-200" role="img" aria-label={`${l.name}: ${fa(pct)} درصد`}>
                    <div className="h-full rounded-full bg-brand-600" style={{ width: `${pct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="آخرین پرداخت‌ها" className="xl:col-span-2">
          <div className="-mx-5 overflow-x-auto sm:-mx-6">
            <table className="table min-w-[560px]">
              <thead>
                <tr>
                  <th scope="col">کاربر</th>
                  <th scope="col">پلن</th>
                  <th scope="col" className="num">
                    مبلغ (تومان)
                  </th>
                  <th scope="col">زمان</th>
                  <th scope="col">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((p) => (
                  <tr key={p.user + p.date}>
                    <td className="font-semibold text-ink">{p.user}</td>
                    <td>{p.plan}</td>
                    <td className="num font-semibold text-ink">{fa(p.amount)}</td>
                    <td className="whitespace-nowrap text-muted">{p.date}</td>
                    <td>
                      <StatusBadge status={p.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="درخواست‌های همکاری" action={<SeeAll href="/admin/users">همه‌ی کاربران</SeeAll>}>
          <ul className="divide-y divide-rule">
            {pendingTeachers.map((u) => (
              <li key={u.email} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <Avatar src={u.photo} name="" size={44} />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{u.name}</p>
                    <p className="text-sm text-muted">مدرس فرانسوی، ۶ سال سابقه</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button type="button" className="btn-primary">
                    <UserCheck size={18} aria-hidden /> تأیید
                  </button>
                  <button type="button" className="btn-secondary">
                    مشاهده رزومه
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
