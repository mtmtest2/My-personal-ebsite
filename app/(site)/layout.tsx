import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

/** Public pages: home, magazine, languages, teachers, online classes and consultation. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:right-4 focus:top-4">پرش به محتوای اصلی</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">{children}</main>
      <Footer />
    </>
  );
}
