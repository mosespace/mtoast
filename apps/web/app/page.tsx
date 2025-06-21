import { CtaSection } from '@/components/cta-section';
import Examples from '@/components/examples';
import Footer from '@/components/footer';
import Hero from '@/components/hero-section';
import Installation from '@/components/installation';
import Usage from '@/components/usage';

export default function Home() {
  return (
    <main className="relative px-8 md:px-0 flex min-h-screen flex-col">
      <Hero />

      <Installation />

      <Usage />

      <Examples />

      {/* working on this for now */}
      {/* <Positions /> */}

      <CtaSection />

      <Footer />
    </main>
  );
}
