import Link from 'next/link';
import { ArrowLeft, BookOpen, CreditCard, GraduationCap, UserCheck, Users } from 'lucide-react';
import { Avatar, BarChart, Panel, StatCard, StatusBadge } from '@/components/panel/ui';
import { adminUsers, languages, recentPayments, revenueByMonth } from '@/lib/data';
import { fa } from '@/lib/utils';

export default function AdminDashboard() {
  const totalStudents = languages.reduce((s, l) => s + l.students, 0);
  const pendingTeachers = adminUsers.filter((u) => u.status === 'در انتظار تأیید');
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">نمای کلی سایت</h1>
          <p className="mt-1 text-sm text-slate-500">گزارش عملکرد فرتاش در ۶ ماه اخیر</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-ghost">خروجی Excel</button>
          <Link href="/admin/courses" className="btn-primary">افزودن دوره</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Users} label="کل زبان‌آموزان" value={fa(totalStudents)} tone="brand" trend="+۸٪" />
        <StatCard icon={GraduationCap} label="اساتید فعال" value={fa(87)} tone="violet" trend="+۳" />
        <StatCard icon={CreditCard} label="درآمد مهر (تومان)" value="۴۶۸ م" tone="emerald" trend="+۱۴٪" />
        <StatCard icon={BookOpen} label="کلاس‌های این هفته" value={fa(342)} tone="amber" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="درآمد ماهانه (میلیون تومان)" className="xl:col-span-2">
          <BarChart data={revenueByMonth.map((r) => ({ label: r.m, value: r.v, display: fa(r.v) }))} />
        </Panel>
        <Panel title="سهم زبان‌ها">
          <ul className="space-y-4">
            {languages.map((l) => {
              const pct = Math.round((l.students / totalStudents) * 100);
              return (
                <li key={l.code}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 font-medium text-slate-700"><span className="text-lg">{l.flag}</span> {l.name}</span>
                    <span className="font-bold text-slate-900">{fa(pct)}٪</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full bg-gradient-to-l ${l.color}`} style={{ width: `${pct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="آخرین پرداخت‌ها" className="xl:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-right text-xs text-slate-500">
                  <th className="pb-3 font-medium">کاربر</th>
                  <th className="pb-3 font-medium">پلن</th>
                  <th className="pb-3 font-medium">مبلغ (تومان)</th>
                  <th className="pb-3 font-medium">زمان</th>
                  <th className="pb-3 font-medium">وضعیت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentPayments.map((p) => (
                  <tr key={p.user + p.date}>
                    <td className="py-3.5 font-semibold text-slate-800">{p.user}</td>
                    <td className="py-3.5 text-slate-600">{p.plan}</td>
                    <td className="py-3.5 font-bold text-slate-900">{fa(p.amount)}</td>
                    <td className="py-3.5 text-slate-500">{p.date}</td>
                    <td className="py-3.5"><StatusBadge status={p.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="درخواست‌های همکاری" action={<Link href="/admin/users" className="flex items-center gap-1 text-sm font-semibold text-brand-600">کاربران <ArrowLeft size={16} /></Link>}>
          <ul className="space-y-3">
            {pendingTeachers.map((u) => (
              <li key={u.email} className="rounded-xl bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <Avatar src={u.photo} name={u.name} size={40} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{u.name}</p>
                    <p className="text-xs text-slate-500">مدرس فرانسوی · ۶ سال سابقه</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button className="btn bg-emerald-600 py-1.5 text-xs text-white hover:bg-emerald-700"><UserCheck size={14} /> تأیید</button>
                  <button className="btn-ghost py-1.5 text-xs">مشاهده رزومه</button>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
