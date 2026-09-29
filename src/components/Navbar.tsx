import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Marquee } from '@/components/ui/Marquee';
import { schoolData } from '@/data/schoolData';

const menuItemStyle = (open: boolean, i: number) => ({
  opacity: open ? 1 : 0,
  transform: open ? 'translateX(0)' : 'translateX(24px)',
  transition: 'opacity 0.35s ease, transform 0.35s ease',
  transitionDelay: open ? `${120 + i * 45}ms` : '0ms',
});

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = schoolData.navLinks.map((l) => l.href);
      const scrollPos = window.scrollY + 120;
      for (const href of sections) {
        const el = document.querySelector(href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const bottom = top + el.getBoundingClientRect().height;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(href);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Esc closes the menu; leaving mobile size closes it too
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const menuLinks = schoolData.navLinks.filter((l) => l.href !== '#admissions');

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'} bg-primary-950 text-ink-200`}>
        <Marquee duration={40} copies={3} reverse itemClassName="" className="py-2 text-sm">
          <span className="mx-8 whitespace-nowrap font-semibold text-secondary-400">{schoolData.established}</span>
          <span className="mx-8 whitespace-nowrap">{schoolData.affiliation}</span>
          <a href={`tel:${schoolData.contact.phone.replace(/\s/g, '')}`} className="mx-8 whitespace-nowrap transition-colors hover:text-white">{schoolData.contact.phone}</a>
          <a href={`mailto:${schoolData.contact.email}`} className="mx-8 whitespace-nowrap transition-colors hover:text-white">{schoolData.contact.email}</a>
        </Marquee>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-lg shadow-ink-900/5 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <button onClick={() => handleNavClick('#home')} aria-label="Go to top">
            <Logo />
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {schoolData.navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 text-[15px] xl:px-4 font-semibold transition-colors duration-200 ${
                    activeSection === link.href ? 'text-primary-800' : 'text-ink-600 hover:text-primary-800'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-primary-700 transition-all duration-300 ${
                      activeSection === link.href ? 'w-6' : 'w-0'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('#admissions')}
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-primary-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary-700/20 transition-all duration-300 hover:bg-primary-800 hover:shadow-xl hover:shadow-primary-700/30 hover:-translate-y-0.5"
            >
              Admissions 2027&ndash;28
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl text-ink-800 transition-colors hover:bg-primary-50 active:bg-primary-100 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu: slide-in panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? 'visible' : 'invisible delay-300'}`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-100 px-5 py-3.5">
            <Logo />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl text-ink-600 transition-colors hover:bg-ink-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
            {/* Admissions: always first and clearly visible */}
            <button
              onClick={() => handleNavClick('#admissions')}
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-5 text-left text-white shadow-lg shadow-primary-900/25"
              style={menuItemStyle(menuOpen, 0)}
            >
              <span>
                <span className="block text-xs font-semibold text-secondary-300">Now open</span>
                <span className="mt-0.5 block font-display text-xl font-extrabold leading-tight">Admissions 2027&ndash;2028</span>
                <span className="mt-1 block text-sm text-primary-100">Nursery to Grade 12</span>
              </span>
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform group-active:translate-x-1">
                <ArrowRight className="h-5 w-5" />
              </span>
            </button>

            <ul className="mt-4 flex flex-col gap-1">
              {menuLinks.map((link, i) => {
                const active = activeSection === link.href;
                return (
                  <li key={link.href} style={menuItemStyle(menuOpen, i + 1)}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-semibold transition-colors ${
                        active ? 'bg-primary-50 text-primary-800' : 'text-ink-700 hover:bg-ink-50 active:bg-primary-50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`h-5 w-1 rounded-full ${active ? 'bg-primary-700' : 'bg-transparent'}`} />
                        {link.label}
                      </span>
                      <ChevronDown className="h-4 w-4 -rotate-90 text-ink-400" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-ink-100 bg-ink-50 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <a
              href={`tel:${schoolData.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-semibold text-primary-700"
            >
              <Phone className="h-4 w-4" />
              {schoolData.contact.phone}
            </a>
            <p className="mt-2 text-xs leading-relaxed text-ink-500">{schoolData.contact.address}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
