import { Trophy, Star, Users, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { CountUp } from '@/components/ui/CountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Star,
  Users,
  TrendingUp,
};

export function Achievements() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary-800 py-14 lg:py-16">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-500/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-8 text-center">
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            Our Achievements
          </h2>
          <p className="mt-2 text-base text-primary-200">
            Four decades of excellence, measured in milestones.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {schoolData.achievements.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Trophy;
            return (
              <div
                key={item.label}
                className="reveal group text-center"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-secondary-400 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-active:scale-110 group-hover:bg-white/20">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl transition-transform duration-300 group-hover:scale-105">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-1 text-xs font-medium text-primary-200 sm:text-sm">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
