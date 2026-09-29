import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

// Animates numbers like "2,800+", "98%", "40,000+" when scrolled into view.
export function CountUp({ value, duration = 2000 }: { value: string; duration?: number }) {
  const m = value.match(/^(\D*)([\d,]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const target = m ? parseInt(m[2].replace(/,/g, ''), 10) : 0;
  const count = useCountUp(target, duration, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    let seen = false;
    const go = () => {
      if (seen && !document.documentElement.classList.contains('splash-active')) setInView(true);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          seen = true;
          go();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    window.addEventListener('splash:done', go);
    return () => {
      io.disconnect();
      window.removeEventListener('splash:done', go);
    };
  }, []);

  if (!m) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {m[1]}
      {count.toLocaleString('en-US')}
      {m[3]}
    </span>
  );
}
