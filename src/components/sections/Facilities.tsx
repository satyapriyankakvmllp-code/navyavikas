import { FlaskConical, Library, Laptop, Trophy, Palette, Bus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { SmartImage } from '@/components/ui/SmartImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  FlaskConical,
  Library,
  Laptop,
  Trophy,
  Palette,
  Bus,
};

export function Facilities() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="facilities" ref={ref} className="bg-ink-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal mb-8 max-w-2xl lg:mb-10">
          <SectionLabel>Campus Life</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.facilitiesTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">{schoolData.facilitiesSubtitle}</p>
        </div>

        {/* Mobile: compact photo-left cards. Tablet/desktop: photo-top cards in a 2 / 3 column grid. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {schoolData.facilities.map((facility, i) => {
            const Icon = iconMap[facility.icon] ?? FlaskConical;
            return (
              <article
                key={facility.title}
                className="reveal-scale card-anim group flex overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10 active:-translate-y-1 sm:flex-col"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="relative w-[38%] flex-shrink-0 overflow-hidden sm:w-full">
                  <SmartImage
                    src={facility.image}
                    alt={facility.title}
                    className="h-full min-h-[150px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-[16/10] sm:h-auto"
                    fallback={<Icon className="h-10 w-10" />}
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-700 text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="font-display text-base font-bold leading-snug text-ink-900">{facility.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{facility.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
