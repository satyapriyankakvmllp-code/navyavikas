import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Gallery() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="gallery" ref={ref} className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <SectionLabel className="justify-center">Gallery</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            <SplitWords text={schoolData.galleryTitle} />
          </h2>
          <p className="mt-3 text-base text-ink-600">
            {schoolData.gallerySubtitle}
          </p>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {schoolData.gallery.map((item, i) => (
            <div
              key={i}
              className={`reveal-scale group relative cursor-pointer overflow-hidden rounded-xl shadow-sm ${item.span ? 'col-span-2 row-span-2' : ''}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent opacity-0 touch:opacity-100 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-3 touch:translate-y-0 p-3 opacity-0 touch:opacity-100 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold text-white sm:text-sm">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
