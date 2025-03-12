// NeonGrid.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function NeonGrid() {
  const gridRef = useRef();

  useEffect(() => {
    // Start above screen
    gsap.from(gridRef.current.position, {
      y: 10,
      duration: 2,
      ease: 'bounce.out'
    });
  }, []);

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="cyan" wireframe />
    </mesh>
  );
}