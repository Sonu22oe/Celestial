import React from 'react';

interface BillboardProps {
  alt: string;
  className?: string;
}

const Billboard: React.FC<BillboardProps> = ({ alt, className = '' }) => {
  return (
    <picture>
      <source srcSet="/desktop.png" media="(min-width: 768px)" />
      <img 
        src="/mobile.png" 
        alt={alt} 
        className={`w-full object-cover  block ${className}`} 
        loading="lazy" 
        decoding="async"
      />
    </picture>
  );
};

export default Billboard;