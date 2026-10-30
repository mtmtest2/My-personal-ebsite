import { Suspense } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import RegisterForm from './RegisterForm';

export const metadata = { title: 'ثبت‌نام' };

export default function RegisterPage() {
  return (
    <AuthShell title="ثبت‌نام در فرتاش" subtitle="تعیین سطح و جلسه‌ی مشاوره‌ی اول رایگان است.">
      <Suspense>
        <RegisterForm />
      </Suspense>
    </AuthShell>
  );
}
