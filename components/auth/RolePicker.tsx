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
    <div role="group" aria-label="نقش" className={cn('segmented w-full', allowAdmin ? 'grid-cols-3' : 'grid-cols-2')}>
      {list.map((r) => (
        <button key={r.id} type="button" aria-pressed={value === r.id} onClick={() => onChange(r.id)}>
          <r.icon size={16} aria-hidden /> {r.label}
        </button>
      ))}
    </div>
  );
}
