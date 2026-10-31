import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1224' },
  ],
};

const themeScript = `document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'فرتاش',
  description: 'آموزشگاه آنلاین زبان انگلیسی، آلمانی و فرانسوی با کلاس‌های زنده.',
  telephone: '+989050318909',
  address: { '@type': 'PostalAddress', streetAddress: 'طبرسی جنوبی ۶۰، فتاح ۲', addressLocality: 'مشهد', addressCountry: 'IR' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Applies the saved (or system) theme before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
