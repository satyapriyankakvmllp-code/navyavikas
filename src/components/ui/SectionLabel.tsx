import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary-600 ${className}`}
    >
      <span className="h-px w-8 bg-primary-600" />
      {children}
    </span>
  );
}
