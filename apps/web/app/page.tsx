import Usage from '@/components/usage';
import Hero from '@/components/hero-section';
import Installation from '@/components/installation';
import Examples from '@/components/examples';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />

      <Installation />

      <Usage />

      <Examples />

      <Footer />
    </main>
  );
}
