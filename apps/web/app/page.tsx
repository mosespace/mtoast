import Usage from '@/components/usage';
import Hero from '@/components/hero-section';
import Installation from '@/components/installation';
import Examples from '@/components/examples';
import Footer from '@/components/footer';
import { CtaSection } from '@/components/cta-section';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />

      <Installation />

      <Usage />

      <Examples />

      <CtaSection />

      <Footer />
    </main>
  );
}
