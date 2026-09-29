import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-[0.97]';
  const variants = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5',
    secondary:
      'bg-secondary-500 text-ink-900 hover:bg-secondary-400 shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:-translate-y-0.5',
    outline:
      'border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white hover:-translate-y-0.5',
    ghost: 'text-ink-700 hover:bg-ink-100 hover:text-primary-700',
    white:
      'bg-white text-primary-700 hover:bg-ink-100 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
