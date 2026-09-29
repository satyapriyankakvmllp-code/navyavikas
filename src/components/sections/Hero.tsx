import { ArrowRight, MapPin } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { useParallax } from '@/hooks/useParallax';
import { SplitWords } from '@/components/ui/SplitWords';
import { CountUp } from '@/components/ui/CountUp';

export function Hero() {
  const ref = useParallax<HTMLElement>();
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-cream">
      {/* soft gold glow, moves slower than the page */}
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-secondary-200/60 blur-3xl sm:h-[560px] sm:w-[560px]"
        style={{ transform: 'translate3d(0, calc(var(--py, 0) * 0.2px), 0)' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-12 pt-10 lg:grid-cols-12 lg:gap-6 lg:pb-16 lg:pt-14">
        {/* Words */}
        <div className="lg:col-span-7">
          <p className="animate-fade-down text-sm font-semibold text-primary-700 sm:text-base">
            {schoolData.affiliation.replace(' • ', ', ')} school in Visakhapatnam
          </p>

          <h1 className="hero-words mt-4 font-serif text-[2.6rem] font-bold leading-[1.05] text-primary-900 sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            <SplitWords text={schoolData.heroTitle} />
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg"
            style={{ animationDelay: '0.9s' }}
          >
            {schoolData.heroSubtitle}
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 sm:gap-4" style={{ animationDelay: '1.05s' }}>
            <button
              onClick={() => scrollTo('#admissions')}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-900 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-primary-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-800 active:-translate-y-0.5"
            >
              Enroll now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-900/20 px-7 py-3.5 text-base font-bold text-primary-900 transition-all duration-300 hover:border-primary-900 hover:bg-primary-900/5"
            >
              Discover more
            </button>
          </div>
        </div>

        {/* Arch photo */}
        <div className="lg:col-span-5" style={{ transform: 'translate3d(0, calc(var(--py, 0) * -0.05px), 0)' }}>
          <div className="relative mx-auto aspect-[400/480] w-full max-w-[380px] sm:max-w-[420px]">
            {/* offset gold outline behind the photo */}
            <div
              className="animate-fade-in absolute rounded-t-[999px] rounded-b-3xl border-2 border-secondary-500/70"
              style={{ left: '30%', right: '0%', top: '11%', bottom: '1%', animationDelay: '0.5s' }}
            />
            <div
              className="animate-scale-in absolute overflow-hidden rounded-t-[999px] rounded-b-3xl bg-primary-100 shadow-2xl shadow-primary-900/20"
              style={{ left: '26%', right: '4%', top: '14%', bottom: '4%', animationDelay: '0.2s' }}
            >
              <img
                src={schoolData.heroImage}
                alt={schoolData.heroImageAlt}
                className="h-full w-full object-cover object-[62%_center]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-950/80 to-transparent px-3 pb-3 pt-10">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-secondary-400" />
                  <p className="text-[11px] font-semibold leading-tight sm:text-xs">
                    5-Acre Green Campus
                    <span className="block font-normal text-white/80">Visakhapatnam, Andhra Pradesh</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Numbers strip */}
      <div className="relative bg-primary-900">
        <div
          className="animate-fade-up mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-6 py-7 sm:grid-cols-4 sm:py-8"
          style={{ animationDelay: '1.2s' }}
        >
          {schoolData.stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i > 0 ? 'sm:border-l sm:border-white/15' : ''}`}>
              <p className="font-serif text-3xl font-bold text-secondary-400 sm:text-4xl">
                <CountUp value={stat.value} duration={2400} />
              </p>
              <p className="mt-1 text-xs font-medium text-primary-200 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
