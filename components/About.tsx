import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Quote, Brain, Microscope, Users, Eye, BarChart2, Sigma, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div className="bg-academic-50 border border-academic-200 rounded-xl shadow-md p-8 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-academic-700 mb-6 text-center">My Mission</h2>
            <p className="mb-6 text-base text-slate-700">
              I build theories and tools that help humans and intelligent systems adapt when the world is uncertain. My work sits at the intersection of neuroscience, psychology, psychiatry, and artificial intelligence, guided by one central question:
              <br />
              <span className="font-semibold text-academic-700">How do minds maintain agency, staying flexible, resilient, and in control as the world changes?</span>
              <br /><br />
              My mission is threefold:
              <br /><br />
              <span className="font-bold">1. Reveal mechanisms.</span> Understand how cognitive and affective processes are instantiated in neurocomputational systems, and how they shape learning, reasoning, and decision-making under uncertainty. Enabling people to form, update, and act on meaningful models of the world.
              <br /><br />
              <span className="font-bold">2. Build ecological environments.</span> Create next-generation experimental and computational platforms that embed structure learning, meta-reasoning, and real-world complexity, allowing adaptive behavior to be measured and modeled at scale.
              <br /><br />
              <span className="font-bold">3. Translate impact.</span> Transform these insights into scalable systems that improve mental health care, support clinical decision-making, and enable human-aligned AI.
              <br /><br />
              Through <Link to="/gearshift" className="text-academic-600 font-semibold underline hover:text-academic-800 transition-colors">Gearshift Fellowship</Link>, I am building not just a research tool, but an ecosystem where scientists, clinicians, engineers, and participants co-evolve adaptive intelligence together.
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-justify">
            <ul className="mb-8 pl-0">
              <li className="flex items-center gap-3 mb-4">
                <Brain className="text-academic-600 w-6 h-6" />
                <span>Computational neuroscientist, psychologist, and economist studying the neurocomputational mechanisms of learning, decision-making, and adaptability</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <Microscope className="text-academic-600 w-6 h-6" />
                <span>Founder and Principal Investigator of Gearshift Fellowship, a scalable experimental and computational platform integrating neuroscience, psychiatry, and AI</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <Users className="text-academic-600 w-6 h-6" />
                <span>Skilled in integrative testing across cognitive and social-cognitive domains</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <Eye className="text-academic-600 w-6 h-6" />
                <span>Proficient in combining EEG and eye-tracking with advanced modeling techniques and experiments</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <BarChart2 className="text-academic-600 w-6 h-6" />
                <span>Versatile in analyzing experimental data across clinical and non-clinical settings and across species</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <Sigma className="text-academic-600 w-6 h-6" />
                <span>Deep expertise in statistics (Bayesian & Frequentist), machine learning, and modeling across analytical levels</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <Briefcase className="text-academic-600 w-6 h-6" />
                <span>Entrepreneurially inclined with a decade of industry experience in banking and consulting informs a strong focus on implementation, scalability, and real-world impact</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-academic-600 w-6 h-6" />
                <span>Self-driven first-generation academic and college student</span>
              </li>
            </ul>
            {/* Removed biographical paragraphs as requested */}
          </div>

          <div className="mt-12">
            <h3 className="text-center text-xl md:text-2xl font-semibold text-academic-700 mb-8 tracking-tight">
              A Bridge Between Academia and Industry
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 border-t border-slate-100 pt-8">
              {/* Removed: 12 Years Academic Research & Teaching */}
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">17+</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Peer-Reviewed Publications</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">22</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Conference Proceedings</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">17</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Awards & Fellowships</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">8 <span className="text-lg font-normal">Years</span></span>
                <span className="block text-base text-slate-500 font-medium mt-1">Industry Leadership & Consulting</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;