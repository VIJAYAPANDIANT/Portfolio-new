import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple opacity-50 blur-2xl"
              />
              <img
                src="https://picsum.photos/seed/dev/400/400"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-neon-blue" />
              <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
                <span className="text-neon-blue">01.</span> User_Profile
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              I am a passionate Software Development Engineer with a strong focus on building robust backend systems and exploring the frontiers of Artificial Intelligence. My journey in tech is driven by a curiosity to solve complex problems and a commitment to writing clean, efficient code.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              With expertise in Java, JavaScript, and modern web technologies, I strive to create impactful digital experiences. Whether it's architecting scalable APIs or developing intuitive user interfaces, I bring a blend of technical skill and creative thinking to every project.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-4 rounded-sm border-l-2 border-neon-blue">
                <h4 className="text-neon-blue font-mono font-bold text-2xl">2+</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Years_Experience</p>
              </div>
              <div className="glass p-4 rounded-sm border-l-2 border-neon-purple">
                <h4 className="text-neon-purple font-mono font-bold text-2xl">15+</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Projects_Deployed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
