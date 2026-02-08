import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-24 bg-gradient-to-b from-academic-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-academic-700 font-medium mb-8">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            How minds, biological and artificial, navigate uncertainty and change
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
