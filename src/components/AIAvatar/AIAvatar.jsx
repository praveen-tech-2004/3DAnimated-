// AIAvatar.jsx
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

function AIAvatar() {
  const { scene } = useGLTF('/ai-avatar.glb');
  const avatarRef = useRef();

  useEffect(() => {
    // Floating animation
    gsap.to(avatarRef.current.position, {
      y: 1,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut'
    });
  }, []);

  return <primitive object={scene} ref={avatarRef} />;
}