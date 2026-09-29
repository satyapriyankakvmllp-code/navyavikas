import { CheckCircle2, ArrowRight } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function About() {
  const ref = useScrollReveal<HTMLElement>();

  const highlights = [
    'CBSE-affiliated, Nursery to Grade 12',
    '1:22 teacher-student ratio',
    '5-acre green campus in MVP Colony',
  ];

  return (
    <section id="about" ref={ref} className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Images */}
          <div className="reveal-left relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={schoolData.aboutImage}
                alt={schoolData.aboutImageAlt}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-48 overflow-hidden rounded-xl border-4 border-white shadow-2xl sm:block">
              <img
                src="https://images.pexels.com/photos/18012463/pexels-photo-18012463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                alt="Indian school boys studying"
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Est badge */}
            <div className="absolute -left-3 -top-3 rounded-xl bg-primary-700 px-4 py-2 shadow-xl">
              <p className="font-display text-xl font-extrabold text-white">1985</p>
              <p className="text-[11px] font-bold uppercase tracking-wide text-primary-200">Established</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="reveal">
              <SectionLabel>{schoolData.aboutSectionLabel}</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl text-balance">
                <SplitWords text={schoolData.aboutTitle} />
              </h2>
            </div>
            <p className="reveal mt-4 text-base leading-relaxed text-ink-600" style={{ transitionDelay: '0.1s' }}>
              {schoolData.aboutText}
            </p>

            <ul className="reveal mt-5 space-y-2" style={{ transitionDelay: '0.2s' }}>
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
                  <span className="text-sm font-medium text-ink-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-5" style={{ transitionDelay: '0.25s' }}>
              <button
                onClick={() => document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 font-bold text-primary-700 transition-colors hover:text-primary-800"
              >
                Apply for Admission
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
