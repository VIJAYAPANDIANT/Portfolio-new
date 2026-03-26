import React from 'react';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-neon-blue font-mono mb-4 tracking-[0.3em] uppercase text-xs"
          >
            [ INITIALIZING_NEURAL_INTERFACE ]
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter relative">
            <span className="relative z-10 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Vijayapandian T
            </span>
            {/* Glitch layers */}
            <span className="absolute inset-0 text-neon-blue opacity-20 blur-[2px] animate-glitch select-none pointer-events-none">
              Vijayapandian T
            </span>
          </h1>
          
          <div className="text-xl md:text-3xl text-ai-green font-mono mb-12 h-8 opacity-80">
            <span className="mr-2">&gt;</span>
            <Typewriter
              words={[
                'Aspiring Software Development Engineer',
                'AI & Backend Enthusiast',
                'Creative Problem Solver',
                'Full Stack Developer'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, letterSpacing: '0.1em' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-transparent border border-neon-blue text-neon-blue font-bold rounded-sm overflow-hidden transition-all hover:bg-neon-blue/10 hover:neon-glow"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                Access Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass text-white font-bold rounded-sm flex items-center gap-2 hover:bg-white/10 transition-all uppercase tracking-wider border border-white/10"
            >
              Data Archive <Download size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-neon-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
