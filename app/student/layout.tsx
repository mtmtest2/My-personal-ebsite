import DashboardShell from '@/components/panel/DashboardShell';
import { student } from '@/lib/data';

export const metadata = { title: 'پنل دانشجو' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="student" user={{ name: student.name, subtitle: `زبان‌آموز، سطح ${student.level}`, photo: student.photo }}>
      {children}
    </DashboardShell>
  );
}
