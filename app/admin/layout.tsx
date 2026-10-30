import DashboardShell from '@/components/panel/DashboardShell';

export const metadata = { title: 'پنل مدیریت' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="admin" user={{ name: 'مدیر سایت', subtitle: 'دسترسی کامل', photo: '/logo-mark.png' }}>
      {children}
    </DashboardShell>
  );
}
