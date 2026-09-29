import { ArrowRight } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { Marquee } from '@/components/ui/Marquee';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Activities() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-ink-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 max-w-2xl">
          <SectionLabel>Co-Curricular</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.activitiesTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">
            {schoolData.activitiesSubtitle}
          </p>
        </div>

        <Marquee duration={45} copies={4} reverse fade className="-mx-6 px-6 py-3">
          {schoolData.activities.map((activity) => (
            <div
              key={activity.title}
              className="group relative w-[280px] cursor-pointer overflow-hidden rounded-xl shadow-md sm:w-[380px]"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-bold text-white">{activity.title}</h3>
                <p className="mt-2 max-h-0 touch:max-h-24 overflow-hidden text-sm leading-relaxed text-ink-200 opacity-0 touch:opacity-100 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {activity.description}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-secondary-400 opacity-0 touch:opacity-100 transition-all duration-300 group-hover:opacity-100">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
