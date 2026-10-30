'use client';

import { useMemo, useState } from 'react';
import { MoreHorizontal, Search } from 'lucide-react';
import { Avatar, StatusBadge } from '@/components/panel/ui';
import { adminUsers } from '@/lib/data';
import { cn } from '@/lib/utils';

const filters = ['همه', 'دانشجو', 'معلم'] as const;

export default function UsersTable() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('همه');
  const [q, setQ] = useState('');

  const rows = useMemo(
    () => adminUsers.filter((u) => (filter === 'همه' || u.role === filter) && (u.name.includes(q) || u.email.includes(q))),
    [filter, q],
  );

  return (
    <div className="card p-5 sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-1 rounded-xl bg-slate-100 p-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn('rounded-lg px-4 py-1.5 text-sm font-semibold transition', filter === f ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-500 hover:text-slate-800')}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative sm:w-72">
          <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} className="input pr-9" placeholder="جستجوی نام یا ایمیل…" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-right text-xs text-slate-500">
              <th className="pb-3 font-medium">کاربر</th>
              <th className="pb-3 font-medium">نقش</th>
              <th className="pb-3 font-medium">تاریخ عضویت</th>
              <th className="pb-3 font-medium">وضعیت</th>
              <th className="pb-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((u) => (
              <tr key={u.email}>
                <td className="py-3.5">
                  <span className="flex items-center gap-3">
                    <Avatar src={u.photo} name={u.name} size={38} />
                    <span>
                      <span className="block font-semibold text-slate-800">{u.name}</span>
                      <span className="block text-xs text-slate-500" dir="ltr">{u.email}</span>
                    </span>
                  </span>
                </td>
                <td className="py-3.5">
                  <span className={cn('badge', u.role === 'معلم' ? 'bg-violet-50 text-violet-700' : 'bg-cyan-50 text-cyan-700')}>{u.role}</span>
                </td>
                <td className="py-3.5 text-slate-500">{u.joined}</td>
                <td className="py-3.5"><StatusBadge status={u.status} /></td>
                <td className="py-3.5 text-left">
                  <button className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="عملیات"><MoreHorizontal size={18} /></button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={5} className="py-10 text-center text-slate-400">کاربری یافت نشد.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
