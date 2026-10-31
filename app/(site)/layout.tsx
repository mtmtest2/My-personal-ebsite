import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

/** Public pages: home, magazine, languages, teachers, online classes and consultation. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
