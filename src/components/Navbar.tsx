import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Marquee } from '@/components/ui/Marquee';
import { schoolData } from '@/data/schoolData';

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
          <button onClick={() => handleNavClick('#home')}>
            <Logo />
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {schoolData.navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-[15px] font-semibold transition-colors duration-200 ${
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
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-700/20 transition-all duration-300 hover:bg-primary-800 hover:shadow-xl hover:shadow-primary-700/30 hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative h-6 w-6">
              <Menu className={`absolute inset-0 h-6 w-6 text-ink-800 transition-all duration-300 ${menuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`absolute inset-0 h-6 w-6 text-ink-800 transition-all duration-300 ${menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-100 px-6 py-4">
            <Logo />
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-ink-600" />
            </button>
          </div>
          <ul className="flex flex-col px-4 py-4">
            {schoolData.navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-ink-700 transition-colors hover:bg-primary-50 hover:text-primary-800"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 -rotate-90 text-ink-400" />
                </button>
              </li>
            ))}
          </ul>
          <div className="px-6 pt-2">
            <button
              onClick={() => handleNavClick('#admissions')}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition-all hover:bg-primary-800"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-auto px-6 py-6">
            <p className="text-sm text-ink-500">{schoolData.contact.address}</p>
            <a href={`tel:${schoolData.contact.phone.replace(/\s/g, '')}`} className="mt-2 block text-sm font-semibold text-primary-700">{schoolData.contact.phone}</a>
          </div>
        </div>
      </div>
    </>
  );
}
