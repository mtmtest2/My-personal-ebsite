import type { Metadata } from 'next';
import '@fontsource-variable/vazirmatn';
import '@fontsource/markazi-text/500.css';
import '@fontsource/markazi-text/600.css';
import '@fontsource/markazi-text/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'فرتاش | آموزش آنلاین زبان',
    template: '%s | فرتاش',
  },
  description: 'فرتاش؛ آموزشگاه آنلاین زبان با کلاس‌های زنده، اساتید مجرب و برنامه‌ی شخصی‌سازی‌شده برای هر زبان‌آموز.',
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Applies the saved (or system) theme before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
