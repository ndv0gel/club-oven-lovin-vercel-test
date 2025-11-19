'use client';

import HeroSection from '@/components/HeroSection';
import QuickStats from '@/components/QuickStats';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickStats />
    </>
  );
}
import { HeroSection } from '@/components/marketing/HeroSection';

/** The Home page. */
const Home = () => (
  <main>
    <HeroSection />
  </main>
);

export default Home;
