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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-justify">
             {PERSONAL_INFO.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
             ))}
          </div>
          
          <div className="my-16 flex flex-col items-center justify-center text-center">
            <Quote className="text-academic-200 mb-4 h-8 w-8 rotate-180" />
            <blockquote className="font-serif text-2xl md:text-3xl italic text-academic-700 mb-4 max-w-3xl leading-relaxed">
              "Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity."
            </blockquote>
            <cite className="text-slate-500 font-medium not-italic">— Albert Einstein</cite>
          </div>
          
          <div className="mt-12 flex justify-center gap-12 border-t border-slate-100 pt-8">
             <div className="text-center">
                <span className="block text-3xl font-bold text-academic-600">30+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Publications</span>
             </div>
             <div className="text-center">
                <span className="block text-3xl font-bold text-academic-600">12</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Years Exp</span>
             </div>
             <div className="text-center">
                <span className="block text-3xl font-bold text-academic-600">8</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Awards</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;