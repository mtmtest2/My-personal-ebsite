'use client';

import { useState } from 'react';
import { Check, ClipboardList, Save } from 'lucide-react';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import Tabs from '@/components/ui/Tabs';
import { Alert, EmptyState } from '@/components/ui/States';
import PasswordInput from '@/components/auth/PasswordInput';
import RolePicker, { type Role } from '@/components/auth/RolePicker';

/** Save button walking through idle → loading → success, as a real form would. */
export function SaveDemo() {
  const [state, setState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const save = () => {
    setState('saving');
    setTimeout(() => setState('saved'), 1200);
    setTimeout(() => setState('idle'), 3600);
  };
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button icon={state === 'saved' ? Check : Save} loading={state === 'saving'} onClick={save} className="min-w-36">
        {state === 'saved' ? 'ذخیره شد' : 'ذخیره‌ی تغییرات'}
      </Button>
      <p aria-live="polite" className="text-sm text-muted">
        {state === 'saving' ? 'در حال ذخیره…' : state === 'saved' ? 'برنامه‌ی هفتگی‌ات به‌روز شد.' : 'دکمه را بزن تا هر سه وضعیت را ببینی.'}
      </p>
    </div>
  );
}

export function PasswordDemo() {
  return (
    <Field id="ds-password" label="رمز عبور" hint="دست‌کم ۸ نویسه، با یک عدد." aside={<a href="#" className="link text-xs">فراموشی رمز</a>}>
      <PasswordInput defaultValue="fartash2025" />
    </Field>
  );
}

export function RoleDemo() {
  const [role, setRole] = useState<Role>('student');
  return <RolePicker value={role} onChange={setRole} />;
}

export function TabsDemo() {
  return (
    <Tabs
      label="تکالیف"
      items={[
        {
          id: 'open',
          label: 'باز (۲)',
          content: (
            <Alert tone="warning" title="دو تکلیف تا پنجشنبه باید تحویل شود">
              متن نوشتاری Task 2 و تمرین شنیداری فصل ۴.
            </Alert>
          ),
        },
        {
          id: 'done',
          label: 'تحویل‌شده',
          content: (
            <Alert tone="success" title="همه‌ی تکالیف هفته‌ی قبل تحویل شد">
              نمره‌ی Writing تو از ۶ به ۶٫۵ رسید.
            </Alert>
          ),
        },
        {
          id: 'graded',
          label: 'نمره‌گرفته',
          content: (
            <EmptyState icon={ClipboardList} title="هنوز نمره‌ای ثبت نشده" className="py-8">
              استاد معمولاً تا ۴۸ ساعت بعد از تحویل نمره می‌دهد.
            </EmptyState>
          ),
        },
      ]}
    />
  );
}
