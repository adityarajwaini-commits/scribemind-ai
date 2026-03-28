'use client';

import { Toaster } from 'sonner';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Generator from '../components/Generator';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import BackgroundCanvas from '../components/BackgroundCanvas';

export default function Home() {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #05050A 0%, #080A14 30%, #0A0B18 60%, #05050A 100%)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <BackgroundCanvas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0B0C15',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
            },
          }}
        />
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Generator />
          <HowItWorks />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}
