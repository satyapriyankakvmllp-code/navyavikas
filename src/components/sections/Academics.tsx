import { BookOpen, Pencil, Lightbulb, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Pencil,
  Lightbulb,
  GraduationCap,
};

export function Academics() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="academics" ref={ref} className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <SectionLabel className="justify-center">{schoolData.academicsLabel}</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.academicsTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">
            {schoolData.academicsSubtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schoolData.academics.map((program, i) => {
            const Icon = iconMap[program.icon] ?? BookOpen;
            return (
              <div
                key={program.title}
                className="reveal group card-anim relative overflow-hidden rounded-xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 active:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary-500 to-primary-700 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-700 transition-all duration-500 group-hover:bg-primary-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
