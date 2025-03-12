import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Scene from './components/Scene/Scene';
import HUD from './components/HUD/HUD';
import AIAvatar from './components/AIAvatar/AIAvatar';
import NeonGrid from './components/NeonGrid/NeonGrid';
import ParticleEffects from './components/ParticleEffects/ParticleEffects';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* 3D Scene */}
        <Scene>
          <NeonGrid />
          <AIAvatar />
          <ParticleEffects />
        </Scene>

        {/* HUD with Mini-Map */}
        <HUD />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;