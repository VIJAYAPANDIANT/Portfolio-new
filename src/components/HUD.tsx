import React from 'react';
import { motion } from 'motion/react';

export const HUD = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 grid-bg opacity-20"
      />

      {/* Floating HUD Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-neon-blue/20 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-48 h-1 border-t border-neon-blue/30" />
      <div className="absolute bottom-20 left-20 w-1 h-48 border-l border-neon-blue/30" />
      
      {/* Corner Brackets */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-neon-blue/40" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-neon-blue/40" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-neon-blue/40" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-neon-blue/40" />

      {/* Floating Data Bits */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 text-[10px] font-mono text-neon-blue"
      >
        SYSTEM_STATUS: ACTIVE<br />
        CORE_TEMP: 32.4°C<br />
        LATENCY: 12ms
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-1/4 text-[10px] font-mono text-neon-blue"
      >
        AI_MODULE: LOADED<br />
        NEURAL_NET: SYNCED<br />
        ENCRYPTION: AES-256
      </motion.div>
    </div>
  );
};
