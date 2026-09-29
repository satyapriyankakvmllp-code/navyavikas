import { Star, Quote } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { Marquee } from '@/components/ui/Marquee';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="overflow-hidden bg-ink-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <SectionLabel className="justify-center">Testimonials</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.testimonialsTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">{schoolData.testimonialsSubtitle}</p>
        </div>
      </div>

      <Marquee duration={60} copies={4} fade className="py-3" itemClassName="gap-5 pr-5">
        {schoolData.testimonials.map((t) => (
          <figure
            key={t.name}
            className="card-anim flex w-[300px] flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-[380px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary-400 text-secondary-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-primary-200" />
            </div>
            <blockquote className="mt-4 flex-1 whitespace-normal text-sm leading-relaxed text-ink-700 sm:text-base">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 font-display text-sm font-bold text-white">
                {t.initials}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-ink-900">{t.name}</p>
                <p className="text-xs text-ink-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
