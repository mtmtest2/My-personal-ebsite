'use client';

import { GraduationCap, LayoutDashboard, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Role = 'student' | 'teacher' | 'admin';

const roles: { id: Role; label: string; icon: typeof Users }[] = [
  { id: 'student', label: 'دانشجو', icon: GraduationCap },
  { id: 'teacher', label: 'استاد', icon: Users },
  { id: 'admin', label: 'مدیر', icon: LayoutDashboard },
];

export default function RolePicker({ value, onChange, allowAdmin = true }: { value: Role; onChange: (r: Role) => void; allowAdmin?: boolean }) {
  const list = allowAdmin ? roles : roles.filter((r) => r.id !== 'admin');
  return (
    <div className={cn('grid gap-2 rounded-2xl bg-slate-100 p-1.5', allowAdmin ? 'grid-cols-3' : 'grid-cols-2')}>
      {list.map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => onChange(r.id)}
          className={cn(
            'flex items-center justify-center gap-2 rounded-xl py-2.5 text-[15px] font-semibold transition-colors',
            value === r.id ? 'bg-paper text-brand-700' : 'text-slate-500 hover:text-slate-800',
          )}
        >
          <r.icon size={16} /> {r.label}
        </button>
      ))}
    </div>
  );
}
