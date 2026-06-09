import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const NAIADELLab: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">NAIADEL Lab</h1>
              <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
                <p>
                  NAIADEL is a research lab studying how adaptive intelligence and agency emerge, are sustained, and break down across neural, psychological, computational, and social systems.
                </p>
                <p>
                  Starting Fall 2026, I join the Department of Psychology at the University of Arizona, where NAIADEL will be housed within the Cognition & Neural Systems program. Our work sits at the intersection of computational cognitive neuroscience, reinforcement learning, dynamical systems, and human–AI interaction – with translational reach into mental health and the design of adaptive artificial systems.
                </p>
                <p>
                  The full lab website is in development. Until then, the extended flyer below gives an overview of our scientific vision, research directions, and opportunities to join.
                </p>
                <p className="font-semibold">Interested in joining or collaborating?</p>
                <p>
                  Reach out at <a href="mailto:nadjaging@arizona.edu" className="text-academic-700 underline">nadjaging@arizona.edu</a> [see flyer below]
                </p>
                <p className="font-semibold">More to come soon.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-100 px-6 py-4">
                <h2 className="text-2xl font-semibold text-slate-900">NAIADEL Flyer</h2>
                <p className="text-sm text-slate-600 mt-1">The flyer is displayed directly here so visitors can quickly review our vision without needing to download it first.</p>
              </div>
              <div className="w-full">
                <iframe
                  title="NAIADEL Flyer"
                  src="/assets/NAIADEL_Flyer_vertical.pdf"
                  className="w-full min-h-[80vh]"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NAIADELLab;
