import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="my-4 flex flex-col items-center justify-center text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm px-6 py-6 w-full max-w-3xl">
              <Quote className="text-academic-200 mb-4 h-8 w-8 rotate-180 mx-auto" />
              <blockquote className="font-serif text-2xl md:text-3xl italic text-academic-700 mb-4 leading-relaxed">
                "Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity."
              </blockquote>
              <cite className="text-slate-500 font-medium not-italic">— Albert Einstein</cite>
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-justify">
             {PERSONAL_INFO.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
             ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-center text-xl md:text-2xl font-semibold text-academic-700 mb-8 tracking-tight">
              A Bridge Between Academia and Industry
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 border-t border-slate-100 pt-8">
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">12 <span className='text-lg font-normal'>Years</span></span>
                <span className="block text-base text-slate-500 font-medium mt-1">Academic Research & Teaching</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">8 <span className='text-lg font-normal'>Years</span></span>
                <span className="block text-base text-slate-500 font-medium mt-1">Industry Leadership & Consulting</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">35+</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Peer-Reviewed Publications</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">17</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Prestigious Awards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;