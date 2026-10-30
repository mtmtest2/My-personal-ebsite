'use client';

import { useMemo, useState } from 'react';
import { MoreHorizontal, Search, SearchX } from 'lucide-react';
import { Avatar, StatusBadge } from '@/components/panel/ui';
import Badge from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/States';
import { adminUsers } from '@/lib/data';
import { fa } from '@/lib/utils';

const filters = ['همه', 'دانشجو', 'معلم'] as const;

export default function UsersTable() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('همه');
  const [q, setQ] = useState('');

  const rows = useMemo(() => adminUsers.filter((u) => (filter === 'همه' || u.role === filter) && (u.name.includes(q) || u.email.includes(q))), [filter, q]);

  return (
    <section className="card min-w-0" aria-label="فهرست کاربران">
      <div className="flex flex-col gap-3 border-b border-rule p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div role="group" aria-label="نقش" className="segmented">
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="relative sm:w-80">
          <Search size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" aria-hidden />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} className="input pr-10" placeholder="جستجوی نام یا ایمیل" aria-label="جستجوی نام یا ایمیل" />
        </div>
      </div>

      {rows.length === 0 ? (
        <EmptyState
          icon={SearchX}
          title="کاربری پیدا نشد"
          action={
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setQ('');
                setFilter('همه');
              }}
            >
              پاک کردن جستجو
            </button>
          }
        >
          هیچ کاربری با «{q}» در این نقش نیست. املای نام یا ایمیل را بررسی کن.
        </EmptyState>
      ) : (
        <>
          {/* Stacked rows on phones, a table from md. */}
          <ul className="divide-y divide-rule md:hidden">
            {rows.map((u) => (
              <li key={u.email} className="flex items-center gap-3 px-5 py-4">
                <Avatar src={u.photo} name="" size={44} />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-ink">{u.name}</p>
                  <p className="truncate text-sm text-muted" dir="ltr" style={{ textAlign: 'right' }}>
                    {u.email}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Badge tone={u.role === 'معلم' ? 'brand' : 'neutral'}>{u.role}</Badge>
                    <StatusBadge status={u.status} />
                    <span className="text-sm text-muted">از {u.joined}</span>
                  </div>
                </div>
                <button type="button" className="btn-quiet btn-icon" aria-label={`عملیات برای ${u.name}`}>
                  <MoreHorizontal size={18} />
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden overflow-x-auto md:block">
            <table className="table table-hover min-w-[720px]">
              <thead>
                <tr>
                  <th scope="col">کاربر</th>
                  <th scope="col">نقش</th>
                  <th scope="col">تاریخ عضویت</th>
                  <th scope="col">وضعیت</th>
                  <th scope="col">
                    <span className="sr-only">عملیات</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((u) => (
                  <tr key={u.email}>
                    <td>
                      <span className="flex items-center gap-3">
                        <Avatar src={u.photo} name="" size={36} />
                        <span>
                          <span className="block font-semibold text-ink">{u.name}</span>
                          <span className="block text-sm text-muted" dir="ltr">
                            {u.email}
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <Badge tone={u.role === 'معلم' ? 'brand' : 'neutral'}>{u.role}</Badge>
                    </td>
                    <td className="num text-muted">{u.joined}</td>
                    <td>
                      <StatusBadge status={u.status} />
                    </td>
                    <td className="text-end">
                      <button type="button" className="btn-quiet btn-icon" aria-label={`عملیات برای ${u.name}`}>
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <p className="border-t border-rule px-5 py-3 text-sm text-muted sm:px-6" aria-live="polite">
        {fa(rows.length)} کاربر از {fa(adminUsers.length)}
      </p>
    </section>
  );
}
