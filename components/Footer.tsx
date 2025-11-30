import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">{PERSONAL_INFO.name}</h3>
            <p className="mb-6 max-w-md text-slate-400">
              {PERSONAL_INFO.department}<br />
              {PERSONAL_INFO.university}
            </p>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="inline-block py-2 px-6 border border-slate-700 text-white rounded hover:bg-white hover:text-slate-900 transition-all"
            >
              Contact Me
            </a>
          </div>
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-col md:items-end gap-2">
              <a href={PERSONAL_INFO.socials.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
              <a href={PERSONAL_INFO.socials.twitter} className="hover:text-white transition-colors">Twitter / X</a>
              <a href={PERSONAL_INFO.socials.scholar} className="hover:text-white transition-colors">Google Scholar</a>
              <a href="#" className="hover:text-white transition-colors">ResearchGate</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;