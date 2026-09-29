import { Award, Users, HeartHandshake, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SplitWords } from '@/components/ui/SplitWords';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Award,
  Users,
  HeartHandshake,
  Globe,
  ShieldCheck,
  Sparkles,
};

export function WhyChooseUs() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.whyChooseTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">
            {schoolData.whyChooseSubtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schoolData.whyChoose.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <div
                key={item.title}
                className="reveal group card-anim flex gap-4 rounded-xl border border-ink-100 bg-ink-50 p-5 transition-all duration-500 hover:-translate-y-1 active:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-ink-900/5"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-sm transition-transform duration-500 group-hover:scale-110 group-active:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
