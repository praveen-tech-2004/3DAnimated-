// Scene.jsx
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import AIAvatar from './components/AIAvatar/AIAvatar';
import NeonGrid from './components/NeonGrid/NeonGrid';
import ParticleEffects from './components/ParticleEffects/ParticleEffects';

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />
      
      {/* Components with effects */}
      <AIAvatar />
      <Character />
      <Billboard />
      <NeonGrid />
      <ParticleEffects />
      
      <OrbitControls />
    </Canvas>
  );
}