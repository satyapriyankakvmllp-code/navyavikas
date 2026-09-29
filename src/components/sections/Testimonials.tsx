import { Star, Quote } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Each testimonial is rendered exactly once (no looping / duplicated cards).
export function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-ink-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <SectionLabel className="justify-center">Testimonials</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.testimonialsTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">{schoolData.testimonialsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {schoolData.testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal card-anim flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:-translate-y-1"
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-secondary-400 text-secondary-400" />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-primary-200" />
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 font-display text-sm font-bold text-white">
                  {t.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-bold text-ink-900">{t.name}</span>
                  <span className="block text-xs text-ink-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
