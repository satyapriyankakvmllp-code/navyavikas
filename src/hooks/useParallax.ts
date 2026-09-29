import { useEffect, useRef } from 'react';

// Writes window scroll position into a CSS variable (--py) on the element.
// Children use calc(var(--py) * 0.25px) etc. to move at different speeds.
export function useParallax<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      // stop working once hero is off-screen
      if (y < el.offsetHeight + 100) el.style.setProperty('--py', String(y));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
