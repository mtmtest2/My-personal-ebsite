import { UserPlus } from 'lucide-react';
import { PageHeader } from '@/components/panel/ui';
import UsersTable from './UsersTable';

export default function AdminUsers() {
  return (
    <>
      <PageHeader title="مدیریت کاربران" desc="زبان‌آموزان، اساتید و درخواست‌های همکاری" action={<button className="btn-primary"><UserPlus size={16} /> افزودن کاربر</button>} />
      <UsersTable />
    </>
  );
}
