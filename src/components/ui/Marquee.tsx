import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  /** how many copies to render; use more when the content is narrower than the screen */
  copies?: number;
  /** soft fade at left/right edges (for card rows) */
  fade?: boolean;
  className?: string;
  itemClassName?: string;
}

// Endless auto-scrolling row. Pauses on hover / while a finger is pressed.
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  copies = 2,
  fade = false,
  className = '',
  itemClassName = 'gap-4 pr-4',
}: MarqueeProps) {
  return (
    <div
      className={`marquee overflow-hidden ${fade ? '[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]' : ''} ${className}`}
    >
      <div
        className="marquee-track flex w-max"
        style={{
          ['--copies' as string]: copies,
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} className={`flex flex-shrink-0 ${itemClassName}`} aria-hidden={i > 0 || undefined}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
