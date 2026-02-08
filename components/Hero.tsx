<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Link } from 'react-router-dom';
import EinsteinQuote from './EinsteinQuote';

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
          {/* Removed top banner as requested */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            <span className="text-academic-600">Nadja R Ging-Jehli</span>
            <div className="text-academic-600 text-2xl font-serif font-normal mt-2">Ph.D., Psychology and Neuroscience</div>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
            I build theories and tools that help humans and intelligent systems adapt when the world is uncertain. My work sits at the intersection of neuroscience, psychology, psychiatry, and artificial intelligence, guided by one central question: How do minds maintain agency, staying flexible, resilient, and in control as the world changes?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <a
              href="/assets/CV_GingJehli_011826.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 w-72 py-3 bg-academic-200 text-academic-800 rounded-lg font-medium hover:bg-academic-300 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              onClick={e => { e.stopPropagation(); }}
            >
              <span role="img" aria-label="Resume">📄</span>
              View CV
            </a>
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
              style={{ objectPosition: 'center top' }}
            />
            {/* EinsteinQuote removed as requested */}
            <div className="flex justify-center gap-4 mt-6">
              <a href="https://x.com/NadjaGingJehli" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <img src="https://img.freepik.com/premium-vector/twitter-new-logo-twitter-icons-twitter-x-logo_1036746-408.jpg?w=826" alt="X (Twitter)" width="32" height="32" className="rounded transition-transform hover:scale-110" style={{ background: 'white' }} />
              </a>
              <a href="https://www.linkedin.com/in/nadja-ging-jehli-phd-7b1539a9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700 hover:text-academic-600 transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              </a>
              <a href="https://scholar.google.com/citations?user=V8zeDrIAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                <img src="https://listimg.pinclipart.com/picdir/s/485-4850859_free-png-google-icon-google-plus-logo-blanco.png" alt="Google Scholar" width="32" height="32" className="rounded transition-transform hover:scale-110" style={{ background: 'white' }} />
              </a>
              <a href="https://orcid.org/0000-0002-1071-0693" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/960px-ORCID_iD.svg.png?20190308043226" alt="ORCID" width="32" height="32" className="rounded transition-transform hover:scale-110" style={{ background: 'white' }} />
              </a>
              <a href="https://bsky.app/profile/nadjagingjehli.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
                <img src="/assets/Bluesky_Logo.jpg" alt="Bluesky" width="32" height="32" className="rounded transition-transform hover:scale-110" />
              </a>
              <a href="https://www.researchgate.net/profile/Nadja-Ging-Jehli" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg" alt="ResearchGate" width="32" height="32" className="rounded transition-transform hover:scale-110" style={{ background: 'white' }} />
              </a>
            </div>
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
=======
How minds, biological and artificial, navigate uncertainty and change
>>>>>>> parent of f6f6b6f (Restore Hero.tsx to working React component format)
