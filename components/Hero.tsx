import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-academic-50 pt-20">
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#e3e8ee" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-academic-200 text-academic-800 text-sm font-medium mb-6 tracking-wide uppercase">
            {PERSONAL_INFO.title}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Hello, I'm <br />
            <span className="text-academic-600">{PERSONAL_INFO.name}.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
            {PERSONAL_INFO.shortBio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <Link 
              to="/contact" 
              className="px-12 w-72 py-3 bg-academic-800 text-white rounded-lg font-medium hover:bg-academic-900 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Get in Touch
            </Link>
          </div>
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-academic-200 rounded-full blur-2xl opacity-50 transform translate-x-4 translate-y-4"></div>
            <img 
              src="/assets/nadja.png"
              alt={PERSONAL_INFO.name}
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-academic-400"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;