'use client';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three';
import * as THREE from 'three';

type Props = {
  src: string;
};

function ZoomImagePlane({ src }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, src);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Scale the entire image plane based on scroll position
      const zoom = 1 + (scrollY / window.innerHeight) * 0.5; // Adjust multiplier for zoom strength
      meshRef.current.scale.set(zoom, zoom, zoom);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function ZoomImageCanvas({ src }: Props) {
  return (
    <div className="h-[200vh] w-full relative">
      <div className="sticky top-0 h-screen w-full">
        <Canvas>
          <ambientLight />
          <ZoomImagePlane src={src} />
        </Canvas>
      </div>
    </div>
  );
}