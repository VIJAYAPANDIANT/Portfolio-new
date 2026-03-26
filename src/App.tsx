/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Scene } from './components/Scene';
import { LoadingScreen } from './components/LoadingScreen';
import { HUD } from './components/HUD';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Audio effect logic
  const playClick = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    audio.volume = 0.1;
    audio.play().catch(() => {}); // Ignore if blocked by browser
  };

  return (
    <div 
      className="relative min-h-screen bg-black text-white selection:bg-neon-blue/30 selection:text-neon-blue hologram-effect"
      onClick={playClick}
    >
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Scene />
      <HUD />
      <Navbar />
      
      {/* Interactive Mouse Light */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 243, 255, 0.05), transparent 80%)`
        }}
      />

      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Skills />
        </SectionWrapper>

        <SectionWrapper>
          <Projects />
        </SectionWrapper>

        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, skewX: -5 }}
      whileInView={{ opacity: 1, y: 0, skewX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        stiffness: 50,
        damping: 20
      }}
      className="relative"
    >
      {/* Holographic glitch line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"
      />
      {children}
    </motion.div>
  );
}
