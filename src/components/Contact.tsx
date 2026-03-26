import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-neon-blue" />
          <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
            <span className="text-neon-blue">05.</span> Comms_Channel
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div className="glass p-6 rounded-sm space-y-6 border-l-2 border-neon-blue">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-blue/10 rounded-sm text-neon-blue">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Protocol: SMTP</h4>
                  <p className="text-lg font-mono">hello@vijay.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-purple/10 rounded-sm text-neon-purple">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Protocol: VOIP</h4>
                  <p className="text-lg font-mono">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-pink/10 rounded-sm text-neon-pink">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Location: GEO</h4>
                  <p className="text-lg font-mono">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                  className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5]"
          >
            <form className="glass p-8 rounded-sm space-y-6 border-t border-neon-blue/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Input_Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="IDENTIFY_YOURSELF"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Input_Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="RETURN_ADDRESS"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Transmission_Body</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors resize-none"
                  placeholder="ENTER_MESSAGE_DATA..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.01, letterSpacing: '0.2em' }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-neon-blue text-black font-mono font-bold rounded-sm flex items-center justify-center gap-2 hover:neon-glow transition-all uppercase tracking-widest"
              >
                Execute Transmission <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
