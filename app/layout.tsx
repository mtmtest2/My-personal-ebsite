import type { Metadata, Viewport } from 'next';
// Persian UI face, the target-language book face (with italics), and a Naskh for Arabic examples.
import '@fontsource-variable/estedad';
import '@fontsource-variable/literata/opsz.css';
import '@fontsource-variable/literata/opsz-italic.css';
import '@fontsource/markazi-text/arabic-500.css';
import '@fontsource/markazi-text/arabic-700.css';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1029' },
  ],
};

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
