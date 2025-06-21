import Usage from '@/components/usage';
import Hero from '@/components/hero-section';
import Installation from '@/components/installation';
import Examples from '@/components/examples';
import Footer from '@/components/footer';
import { CtaSection } from '@/components/cta-section';
import Positions from '@/components/positions';

export default function Home() {
  return (
    <main className="relative px-8 md:px-0 flex min-h-screen flex-col">
      <Hero />

      <Installation />

      <Usage />

      <Examples />

      <Positions />

      <CtaSection />

      <Footer />
    </main>
  );
}
