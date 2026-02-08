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
            <p className="mb-6 text-lg text-slate-700">
              My work contributes to an emerging research ecosystem centered on meta-learning, behavioral adaptability, and perceived controllability as core drivers of human and machine intelligence - unifying approaches from neuroscience, psychiatry, AI, and behavioral economics. My mission is threefold:
            </p>
            <ol className="mb-6 list-decimal pl-6 text-slate-700 text-base">
              <li>Advance a mechanistic understanding of how humans and agents adapt in uncertain, dynamic environments — with a focus on how cognitive, affective, and social signals shape learning and control.</li>
              <li>Develop a next-generation platform for experimental, computational, and translational science — that embeds structure learning, meta-reasoning, and ecological complexity.</li>
              <li>Translate these innovations into scalable, real-world systems that improve mental health care, support clinical decision-making, and inform human-aligned AI.</li>
            </ol>
            <p className="text-lg text-slate-700">
              Through <Link to="/gearshift" className="text-academic-600 font-semibold underline hover:text-academic-800 transition-colors">Gearshift Fellowship</Link>, I aim to build not just a platform, but an ecosystem for co-evolving adaptive minds — bridging scientific discovery, clinical application, and responsible technology.
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-justify">
            <ul className="mb-8 pl-0">
              <li className="flex items-center gap-3 mb-4">
                <Brain className="text-academic-600 w-6 h-6" />
                <span>Researcher in computational psychiatry and model-based neuroscience</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <Microscope className="text-academic-600 w-6 h-6" />
                <span>Bridging clinical neuroscience, mathematical psychology, and behavioral economics</span>
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
                <span>Entrepreneurially inclined with a decade of industry experience in finance and consulting</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-academic-600 w-6 h-6" />
                <span>Self-driven first-generation academic and college student</span>
              </li>
            </ul>
            <p className="mb-6">
              My unique combination of expertise in computational modeling, neuroscience, psychology, and game-theory economics, supplemented by clinical experience and industry-honed leadership and project management skills, positions me distinctively for spearheading innovative research in Cognitive Neuroscience and Computational Psychiatry. Throughout my graduate studies, I have effectively self-funded my research through multiple fellowships. My work has primarily focused on bridging gaps in neurocognitive testing for ADHD, where I have developed and piloted mechanistic tasks integrating physiological measures such as eye-tracking and EEG. This endeavor also involved the creation of custom hardware and software solutions. My research endeavors are evidenced by a robust publication record, underscoring my dedication to ADHD research alongside my postdoctoral responsibilities.
            </p>
            <p className="mb-6">
              In my postdoctoral role, I have applied my computational modeling expertise to multiple Conte Center grants focused on neurocognitive testing for depression, bipolar disorder, and obsessive-compulsive disorder. Additionally, my work with intracranial recordings in Parkinson’s disease patients has significantly deepened my understanding of the basal ganglia's role in cognitive control. Overall, I have gained experience in various computational modeling approaches across multiple cognitive domains and from clinical and non-clinical datasets and across species.
            </p>
            <p className="mb-6">
              As dedicated first-generation academic, I focus on theory-driven and model-based research with foundational and applied components. I am aspiring to a professorship where I can lead cross-disciplinary research teams. My program will bridge various academic fields and foster partnerships across different departments and institutions. It will also extend to collaborations with industry and societal stakeholders to translate research into practical solutions.
            </p>
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
                <span className="block text-3xl font-bold text-academic-600">17+</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Peer-Reviewed Publications</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">22</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Conference Proceedings</span>
              </div>
              <div className="flex-1 min-w-[180px] text-center">
                <span className="block text-3xl font-bold text-academic-600">17</span>
                <span className="block text-base text-slate-500 font-medium mt-1">Prestigious Awards & Fellowships</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;