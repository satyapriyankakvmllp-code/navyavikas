import { FlaskConical, Library, Laptop, Trophy, Palette, Bus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { Marquee } from '@/components/ui/Marquee';
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
    <section id="facilities" ref={ref} className="bg-ink-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 max-w-2xl">
          <SectionLabel>Campus Life</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.facilitiesTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">
            {schoolData.facilitiesSubtitle}
          </p>
        </div>

        <Marquee duration={50} fade className="-mx-6 px-6 py-3">
          {schoolData.facilities.map((facility) => {
            const Icon = iconMap[facility.icon] ?? FlaskConical;
            return (
              <div
                key={facility.title}
                className="card-anim group flex w-[290px] items-start gap-4 rounded-xl sm:w-[340px] border border-ink-100 bg-white p-5 transition-all duration-500 hover:-translate-y-1 active:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5"
              >
                <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-700 text-white shadow-sm transition-transform duration-500 group-hover:scale-110 group-active:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">{facility.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{facility.description}</p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
