import { useState } from 'react';
import type { ReactNode } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}

// Photo that never looks broken: if the file fails to load, a soft maroon tile shows instead.
export function SmartImage({ src, alt, className = '', fallback }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-700 ${className}`}>
        {fallback}
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
