import DashboardShell from '@/components/panel/DashboardShell';
import { teacher } from '@/lib/data';

export const metadata = { title: 'پنل استاد' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="teacher" user={{ name: teacher.name, subtitle: teacher.title, photo: teacher.photo }}>
      {children}
    </DashboardShell>
  );
}
