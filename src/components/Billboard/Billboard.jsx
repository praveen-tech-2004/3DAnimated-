// Billboard.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Billboard() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    // Constant rotation
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
  });

  return (
    <mesh 
      ref={meshRef}
      onPointerEnter={() => {
        gsap.to(meshRef.current.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3 });
      }}
      onPointerLeave={() => {
        gsap.to(meshRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      }}
    >
      {/* Your geometry/material */}
    </mesh>
  );
}