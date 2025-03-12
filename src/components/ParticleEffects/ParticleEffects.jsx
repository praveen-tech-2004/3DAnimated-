// ParticleEffects.jsx
import React, { useRef, useMemo } from 'react';
import { Points } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function ParticleEffects() {
  const pointsRef = useRef();
  const count = 1000;
  
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for(let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    // Glitch movement
    pointsRef.current.rotation.z += 0.001;
    pointsRef.current.position.x = Math.sin(Date.now() * 0.001) * 0.1;
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="cyan"
        transparent
        opacity={0.8}
      />
    </Points>
  );
}