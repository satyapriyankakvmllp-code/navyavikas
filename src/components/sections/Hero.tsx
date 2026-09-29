import { ArrowRight, Play, Sparkles, MapPin } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { useParallax } from '@/hooks/useParallax';
import { SplitWords } from '@/components/ui/SplitWords';
import { CountUp } from '@/components/ui/CountUp';

export function Hero() {
  const ref = useParallax<HTMLElement>();
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ transform: 'translate3d(0, calc(var(--py, 0) * 0.3px), 0) scale(1.15)', willChange: 'transform' }}
      >
        <img
          src={schoolData.heroImage}
          alt={schoolData.heroImageAlt}
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/80 to-ink-950/95" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute -left-20 top-32" style={{ transform: 'translate3d(0, calc(var(--py, 0) * -0.2px), 0)' }}>
        <div className="h-64 w-64 rounded-full bg-primary-500/20 blur-3xl animate-float" />
      </div>
      <div className="pointer-events-none absolute right-10 bottom-16" style={{ transform: 'translate3d(0, calc(var(--py, 0) * -0.35px), 0)' }}>
        <div className="h-80 w-80 rounded-full bg-secondary-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="animate-fade-down inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-secondary-400" />
              {schoolData.tagline}
            </div>

            <h1 className="hero-words mt-5 font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl text-balance" >
              <SplitWords text={schoolData.heroTitle} />
            </h1>

            <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg" style={{ animationDelay: '0.2s' }}>
              {schoolData.heroSubtitle}
            </p>

            <div className="animate-fade-up mt-7 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => scrollTo('#admissions')}
                className="group inline-flex items-center gap-2 rounded-xl bg-secondary-500 px-6 py-3.5 text-base font-bold text-ink-900 shadow-xl shadow-secondary-500/20 transition-all duration-300 hover:bg-secondary-400 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#about')}
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <Play className="h-4 w-4 fill-current" />
                Discover More
              </button>
            </div>

            <div className="animate-fade-up mt-8 flex items-center gap-6 text-sm text-ink-300" style={{ animationDelay: '0.4s' }}>
              <span className="font-semibold text-secondary-400">{schoolData.established}</span>
              <span className="h-4 w-px bg-ink-600" />
              <span>{schoolData.affiliation}</span>
            </div>
          </div>

          {/* Right floating card */}
          <div className="lg:col-span-5" style={{ transform: 'translate3d(0, calc(var(--py, 0) * 0.08px), 0)' }}>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary-500/30 to-secondary-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src={schoolData.aboutImage}
                  alt={schoolData.aboutImageAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 rounded-xl bg-white/95 px-4 py-3 backdrop-blur-md">
                    <MapPin className="h-5 w-5 text-primary-700" />
                    <div>
                      <p className="text-xs font-semibold text-ink-500">Visakhapatnam, Andhra Pradesh</p>
                      <p className="text-sm font-bold text-ink-900">5-Acre Green Campus</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -right-3 -top-3 flex h-18 w-18 animate-float items-center justify-center rounded-2xl bg-secondary-500 text-center shadow-xl" style={{ width: '4.5rem', height: '4.5rem' }}>
                <div>
                  <p className="font-display text-xl font-extrabold leading-none text-ink-900">40</p>
                  <p className="text-[10px] font-bold uppercase text-ink-700">Years</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:grid-cols-4 lg:mt-16" style={{ animationDelay: '0.5s' }}>
          {schoolData.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl"><CountUp value={stat.value} /></p>
              <p className="mt-1 text-xs font-medium text-ink-300 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none" fill="white">
          <path d="M0,60 L1440,60 L1440,20 Q720,60 0,20 Z" />
        </svg>
      </div>
    </section>
  );
}
