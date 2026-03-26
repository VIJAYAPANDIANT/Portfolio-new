import React from 'react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <p className="text-gray-500">
            Built with <span className="text-neon-pink">❤️</span> by <span className="text-white font-bold">Vijayapandian</span>
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
          </div>
          <p className="text-xs text-gray-700 mt-8">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
