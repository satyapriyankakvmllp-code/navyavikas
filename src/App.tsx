import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { VisionMission } from '@/components/sections/VisionMission';
import { Academics } from '@/components/sections/Academics';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Facilities } from '@/components/sections/Facilities';
import { Activities } from '@/components/sections/Activities';
import { Gallery } from '@/components/sections/Gallery';
import { Achievements } from '@/components/sections/Achievements';
import { Testimonials } from '@/components/sections/Testimonials';
import { Admissions } from '@/components/sections/Admissions';
import { Contact } from '@/components/sections/Contact';
import { Marquee } from '@/components/ui/Marquee';
import { Footer } from '@/components/sections/Footer';

function AnnouncementBar() {
  const messages = [
    'Admissions Open for 2027\u20132028 \u2014 Limited Seats Available',
    '100% Board Results in 2025 \u2014 Congratulations to all our students!',
    'Now accepting applications for Nursery through Grade 12',
    'Annual Sports Day \u2014 November 20, 2025 \u2014 All parents invited',
  ];

  return (
    <div className="flex items-center bg-secondary-500 py-2 text-sm font-semibold text-ink-900">
      <Sparkles className="ml-4 h-4 w-4 flex-shrink-0" />
      <Marquee duration={45} copies={3} itemClassName="" className="min-w-0 flex-1">
        {messages.map((msg, i) => (
          <span key={i} className="mx-8 whitespace-nowrap">
            {msg}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

// Launch screen lives in index.html so it shows instantly, before JavaScript loads.
// Here we just decide when to lift it: after the logo animation has played
// (at least ~2.3s) and the page + photos have finished loading (max 6s).
function useLaunchScreen() {
  useEffect(() => {
    const MIN = 2300;
    const MAX = 6000;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const el = document.getElementById('splash');
      if (!el) return;
      el.classList.add('sp-done');
      window.setTimeout(() => {
        el.classList.add('splash-out');
        document.documentElement.classList.remove('splash-active');
        window.dispatchEvent(new Event('splash:done'));
        window.setTimeout(() => el.remove(), 1000);
      }, 350);
    };

    const started = performance.now();
    const whenLoaded = () => {
      const wait = Math.max(0, MIN - (performance.now() - started));
      window.setTimeout(finish, wait);
    };

    if (document.readyState === 'complete') whenLoaded();
    else window.addEventListener('load', whenLoaded, { once: true });
    const cap = window.setTimeout(finish, MAX);

    return () => {
      window.removeEventListener('load', whenLoaded);
      window.clearTimeout(cap);
    };
  }, []);
}

function App() {
  useLaunchScreen();
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Academics />
        <WhyChooseUs />
        <Facilities />
        <Activities />
        <Gallery />
        <Achievements />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
