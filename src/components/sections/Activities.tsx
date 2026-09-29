import { ArrowRight } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { SmartImage } from '@/components/ui/SmartImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Activities() {
  const ref = useScrollReveal<HTMLElement>();
  const explore = () => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={ref} className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal mb-8 max-w-2xl lg:mb-10">
          <SectionLabel>Co-Curricular</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.activitiesTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">{schoolData.activitiesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {schoolData.activities.map((activity, i) => (
            <article
              key={activity.title}
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10 active:-translate-y-1 sm:last:col-span-2 lg:last:col-span-1"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <SmartImage
                  src={activity.image}
                  alt={activity.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:group-last:aspect-[16/9] lg:group-last:aspect-[4/3]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold leading-snug text-ink-900">{activity.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{activity.description}</p>
                <button
                  onClick={explore}
                  className="group/btn mt-4 inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary-700 px-5 py-2 text-sm font-bold text-primary-700 transition-all duration-300 hover:bg-primary-700 hover:text-white active:bg-primary-700 active:text-white"
                >
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
