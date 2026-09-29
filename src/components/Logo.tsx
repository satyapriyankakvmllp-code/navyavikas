import { brand } from '@/data/brand';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

// Logo image already contains the school wordmark. On dark backgrounds
// (variant="light") it sits on a white chip so the navy text stays readable.
export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const img = <img src={brand.logoSrc} alt={brand.name} className="h-12 w-auto" />;
  if (variant === 'light') {
    return <div className={`inline-flex rounded-xl bg-white px-3 py-2 ${className}`}>{img}</div>;
  }
  return <div className={`flex items-center ${className}`}>{img}</div>;
}
