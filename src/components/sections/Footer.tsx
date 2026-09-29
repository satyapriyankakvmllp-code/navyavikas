import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, ArrowUp, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { Logo } from '@/components/Logo';

const socialIcons: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
};

export function Footer() {
  const { contact, navLinks } = schoolData;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary-600/10 blur-3xl" />

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              {schoolData.tagline}. A premier CBSE co-educational school in Visakhapatnam, nurturing academic excellence and character since 1985.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {contact.social.map((social) => {
                const Icon = socialIcons[social.icon] ?? Facebook;
                return (
                  <a
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-400 transition-all duration-300 hover:bg-primary-700 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-ink-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Programs</h4>
            <ul className="mt-5 space-y-3">
              {schoolData.academics.map((program) => (
                <li key={program.title}>
                  <button
                    onClick={() => scrollTo('#academics')}
                    className="text-left text-sm text-ink-400 transition-colors hover:text-primary-400"
                  >
                    {program.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
                {contact.address}
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-primary-400">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary-500" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-primary-400">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary-500" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} {schoolData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-ink-500">
            Made with <Heart className="h-4 w-4 fill-error-500 text-error-500" /> for education
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-400 transition-all duration-300 hover:bg-primary-700 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
