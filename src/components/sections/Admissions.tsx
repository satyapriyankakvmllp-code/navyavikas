import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Loader2, User, Phone, Mail, MessageSquare, GraduationCap } from 'lucide-react';
import { schoolData } from '@/data/schoolData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SplitWords } from '@/components/ui/SplitWords';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  grade?: string;
  message?: string;
}

export function Admissions() {
  const ref = useScrollReveal<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.grade) {
      newErrors.grade = 'Please select a class/grade';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API call — replace with real backend integration later
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', grade: '', message: '' });

    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputClasses = (hasError?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 pl-12 text-base text-ink-900 placeholder-ink-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
      hasError ? 'border-error-500 focus:border-error-500' : 'border-ink-200 focus:border-primary-500'
    }`;

  return (
    <section id="admissions" ref={ref} className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info + steps */}
          <div>
            <div className="reveal">
              <SectionLabel>Admissions 2027&ndash;2028</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl text-balance">
                <SplitWords text={schoolData.admissionsTitle} />
              </h2>
              <p className="mt-3 text-base text-ink-600">
                {schoolData.admissionsSubtitle}
              </p>
            </div>

            {/* Steps */}
            <div className="reveal mt-8 space-y-3" style={{ transitionDelay: '0.1s' }}>
              {schoolData.admissionSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 font-display text-base font-extrabold text-primary-700">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-ink-900">{step.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal-right">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6 shadow-lg lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent-100 text-accent-600 animate-scale-in">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">Enquiry Submitted!</h3>
                  <p className="mt-3 text-ink-600">
                    Thank you for your interest in {schoolData.shortName}. Our admissions team will contact you within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-ink-900">Enquiry Form</h3>
                  <p className="mt-2 text-sm text-ink-500">Fill in your details and we&rsquo;ll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-700">
                        Parent / Student Name <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          className={inputClasses(errors.name)}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-sm text-error-600">
                          <AlertCircle className="h-4 w-4" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone + Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink-700">
                          Phone Number <span className="text-error-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className={inputClasses(errors.phone)}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1.5 flex items-center gap-1 text-sm text-error-600">
                            <AlertCircle className="h-4 w-4" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-700">
                          Email <span className="text-error-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="you@example.com"
                            className={inputClasses(errors.email)}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1.5 flex items-center gap-1 text-sm text-error-600">
                            <AlertCircle className="h-4 w-4" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Grade */}
                    <div>
                      <label htmlFor="grade" className="mb-1.5 block text-sm font-semibold text-ink-700">
                        Class / Grade <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
                        <select
                          id="grade"
                          value={formData.grade}
                          onChange={(e) => handleChange('grade', e.target.value)}
                          className={inputClasses(errors.grade)}
                        >
                          <option value="">Select a grade</option>
                          {schoolData.grades.map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                      {errors.grade && (
                        <p className="mt-1.5 flex items-center gap-1 text-sm text-error-600">
                          <AlertCircle className="h-4 w-4" /> {errors.grade}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-700">
                        Message <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-ink-400" />
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your child and any questions you have..."
                          className={`${inputClasses(errors.message)} resize-none`}
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1.5 flex items-center gap-1 text-sm text-error-600">
                          <AlertCircle className="h-4 w-4" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition-all duration-300 hover:bg-primary-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
