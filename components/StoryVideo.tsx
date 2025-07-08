'use client';

import React from 'react';

type Props = {
  src: string;
  type?: string;
  className?: string;
};

export default function StoryVideo({ src, type = 'video/mp4', className = '' }: Props) {
  return (
    <video
      className={`w-full aspect-[7/5] rounded-xl object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}