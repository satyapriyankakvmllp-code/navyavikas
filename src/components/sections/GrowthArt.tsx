import { useLayoutEffect, useRef, useState } from 'react';

// The brand idea drawn live: a navy arrow climbs, gold leaves open along it,
// and each school stage sits on the path. Points are measured from the path itself.
const PATH = 'M 14 456 C 40 340, 120 330, 170 250 C 220 170, 300 150, 366 46';
const STAGES = ['Nursery', 'Primary', 'Middle', 'Senior'];
const T = [0.2, 0.43, 0.66, 0.87];
const DRAW_DELAY = 0.4;
const DRAW_TIME = 2.4;

interface Pt {
  x: number;
  y: number;
  angle: number; // degrees, direction of travel
  nx: number; // unit normal pointing down-right
  ny: number;
}

export function GrowthArt() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pts, setPts] = useState<Pt[]>([]);
  const [end, setEnd] = useState<Pt | null>(null);

  useLayoutEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const len = p.getTotalLength();
    const at = (t: number): Pt => {
      const a = p.getPointAtLength(len * t);
      const b = p.getPointAtLength(len * Math.min(1, t + 0.01));
      const c = p.getPointAtLength(len * Math.max(0, t - 0.01));
      const dx = b.x - c.x;
      const dy = b.y - c.y;
      const m = Math.hypot(dx, dy) || 1;
      return { x: a.x, y: a.y, angle: (Math.atan2(dy, dx) * 180) / Math.PI, nx: -dy / m, ny: dx / m };
    };
    setPts(T.map(at));
    setEnd(at(1));
  }, []);

  return (
    <svg viewBox="0 0 400 480" className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
      {/* cream halo keeps the line readable over the photo */}
      <path d={PATH} stroke="#f8f5ec" strokeWidth="11" strokeLinecap="round" pathLength={1} className="grow-line" />
      <path ref={pathRef} d={PATH} stroke="#042351" strokeWidth="5" strokeLinecap="round" pathLength={1} className="grow-line" />

      {pts.map((p, i) => {
        const delay = DRAW_DELAY + DRAW_TIME * T[i] * 0.85;
        const s = 1.2 + i * 0.14;
        return (
          <g key={STAGES[i]}>
            {/* gold leaf on the up-left side of the stem */}
            <g transform={`translate(${p.x} ${p.y}) rotate(${p.angle - 55}) scale(${s})`}>
              <g className="grow-pop" style={{ animationDelay: `${delay}s` }}>
                <g className="leaf-sway" style={{ animationDelay: `${i * -0.9}s` }}>
                  <path d="M0 0 C 8 -15, 28 -15, 40 0 C 28 15, 8 15, 0 0 Z" fill="#c3a160" />
                  <path d="M4 0 L 34 0" stroke="#f8f5ec" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
                </g>
              </g>
            </g>
            {/* stage chip on the down-right side */}
            <g transform={`translate(${p.x + p.nx * 40} ${p.y + p.ny * 40})`}>
              <g className="grow-pop grow-pop-center" style={{ animationDelay: `${delay + 0.15}s` }}>
                <rect x="-36" y="-13" width="72" height="26" rx="13" fill="#f8f5ec" stroke="#c3a160" strokeWidth="1.5" />
                <text x="0" y="4.5" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#042351" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif">
                  {STAGES[i]}
                </text>
              </g>
            </g>
          </g>
        );
      })}

      {end && (
        <g transform={`translate(${end.x} ${end.y}) rotate(${end.angle})`}>
          <g className="grow-pop grow-pop-center" style={{ animationDelay: `${DRAW_DELAY + DRAW_TIME - 0.15}s` }}>
            <path d="M 10 0 L -14 -13 L -8 0 L -14 13 Z" fill="#042351" stroke="#042351" strokeWidth="2" strokeLinejoin="round" />
          </g>
        </g>
      )}
    </svg>
  );
}
