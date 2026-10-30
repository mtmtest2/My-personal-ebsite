import type { Metadata } from 'next';
import '@fontsource-variable/vazirmatn';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'فرتاش | آموزش آنلاین زبان',
    template: '%s | فرتاش',
  },
  description: 'فرتاش؛ آموزشگاه آنلاین زبان با کلاس‌های زنده، اساتید مجرب و برنامه‌ی شخصی‌سازی‌شده برای هر زبان‌آموز.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">{children}</body>
    </html>
  );
}
