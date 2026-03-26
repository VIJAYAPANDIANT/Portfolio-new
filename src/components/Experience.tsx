import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: 'Software Development Intern',
    company: 'Tech Solutions Inc.',
    period: '2024 - Present',
    desc: 'Developing scalable microservices using Spring Boot and optimizing database queries.',
    icon: Briefcase
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    company: 'University of Technology',
    period: '2021 - 2025',
    desc: 'Specializing in Artificial Intelligence and Data Structures.',
    icon: GraduationCap
  },
  {
    type: 'work',
    title: 'Open Source Contributor',
    company: 'GitHub Community',
    period: '2022 - 2023',
    desc: 'Contributed to various React and Node.js libraries, improving documentation and fixing bugs.',
    icon: Briefcase
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-neon-blue" />
          <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
            <span className="text-neon-blue">04.</span> Timeline_Log
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neon-blue/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`glass p-6 rounded-sm border-t border-neon-blue/20 relative ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="text-neon-blue font-mono text-[10px] mb-2 block uppercase tracking-widest">
                      [ {item.period} ]
                    </span>
                    <h3 className="text-xl font-bold mb-1 font-mono uppercase">{item.title}</h3>
                    <h4 className="text-gray-500 font-mono text-xs mb-4">{item.company}</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-sm bg-black border border-neon-blue/50 rotate-45 group hover:neon-glow transition-all">
                  <item.icon size={16} className="text-neon-blue -rotate-45" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
