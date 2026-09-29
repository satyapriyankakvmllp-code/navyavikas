import { brand } from '@/data/brand';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

// Emblem + name, always on ONE horizontal line (never wraps), desktop and mobile.
export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const light = variant === 'light';
  return (
    <div className={`flex items-center gap-2.5 whitespace-nowrap sm:gap-3 ${className}`}>
      <span className={`flex-shrink-0 ${light ? 'rounded-xl bg-white p-1' : ''}`}>
        <img src={brand.logoSrc} alt="" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />
      </span>
      <span className="flex flex-col text-left leading-none">
        <span
          className={`font-display text-[1.15rem] font-extrabold uppercase tracking-[0.04em] sm:text-[1.35rem] ${
            light ? 'text-white' : 'text-primary-700'
          }`}
        >
          {brand.logoText}
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] ${
            light ? 'text-ink-300' : 'text-secondary-600'
          }`}
        >
          {brand.logoSubtext}
        </span>
      </span>
    </div>
  );
}
