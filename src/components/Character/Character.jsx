// Character.jsx
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

function Character() {
  const { scene } = useGLTF('/character.glb');
  const charRef = useRef();

  useEffect(() => {
    // Entrance animation
    gsap.from(charRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)'
    });
  }, []);

  return <primitive object={scene} ref={charRef} />;
}