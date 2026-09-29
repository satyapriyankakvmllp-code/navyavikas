import { Eye, Target } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function VisionMission() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary-950 py-14 lg:py-16">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-8 text-center">
          <SectionLabel className="justify-center text-primary-300">Who We Are</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
            Our Vision &amp; Mission
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Vision */}
          <div className="reveal-left group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary-400/30 hover:bg-white/10">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500/20 text-primary-300">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {schoolData.visionTitle}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              {schoolData.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="reveal-right group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-secondary-400/30 hover:bg-white/10">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-500/20 text-secondary-300">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {schoolData.missionTitle}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              {schoolData.missionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
