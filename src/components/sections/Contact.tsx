import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const socialIcons: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
};

export function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const { contact } = schoolData;

  return (
    <section id="contact" ref={ref} className="bg-ink-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel className="justify-center">Get in Touch</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
            We&rsquo;d Love to Hear From You
          </h2>
          <p className="mt-3 text-base text-ink-600">
            Have questions about admissions or want to schedule a campus visit? Reach out to us.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Contact cards */}
          <div className="reveal space-y-4 lg:col-span-1">
            {/* Address */}
            <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-ink-900">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{contact.address}</p>
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  View on Map &rarr;
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-700 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-ink-900">Phone</h3>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="mt-1 block text-sm text-ink-500 hover:text-primary-600">{contact.phone}</a>
                <a href={`tel:${contact.phoneAlt.replace(/\s/g, '')}`} className="block text-sm text-ink-500 hover:text-primary-600">{contact.phoneAlt}</a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-secondary-700 transition-colors group-hover:bg-secondary-500 group-hover:text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-ink-900">Email</h3>
                <a href={`mailto:${contact.email}`} className="mt-1 block text-sm text-ink-500 hover:text-primary-600">{contact.email}</a>
              </div>
            </div>

            {/* Hours */}
            <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-ink-900">Office Hours</h3>
                <p className="mt-1 text-sm text-ink-500">Mon&ndash;Fri: 8:00 AM &ndash; 4:00 PM</p>
                <p className="text-sm text-ink-500">Sat: 8:00 AM &ndash; 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal-right lg:col-span-2">
            <div className="h-full min-h-[350px] overflow-hidden rounded-xl border border-ink-200 shadow-sm">
              <iframe
                title="School location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.123456!2d83.3182!3d17.7383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ0JzE4LjAiTiA4M8KwMTknMDUuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="reveal mt-10 flex flex-col items-center gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Follow Us</p>
          <div className="flex items-center gap-3">
            {contact.social.map((social) => {
              const Icon = socialIcons[social.icon] ?? Facebook;
              return (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-ink-500 shadow-sm transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:bg-primary-700 hover:text-white hover:shadow-lg"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
