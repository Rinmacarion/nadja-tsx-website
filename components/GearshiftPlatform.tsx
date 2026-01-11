import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Heart, Lightbulb } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PERSONAL_INFO } from '../constants';

const GearshiftPlatform: React.FC = () => {
  const handleEmailClick = (subject: string) => {
    const emailAddress = PERSONAL_INFO.email;
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="md:w-56 flex-shrink-0">
                <img 
                  src="/assets/gearshift fellowship.jpg" 
                  alt="Gearshift Fellowship" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6">Gearshift Platform</h1>
              </div>
              <div className="md:w-56 flex-shrink-0">
                <img 
                  src="/assets/gearshift fellowship.jpg" 
                  alt="Gearshift Fellowship" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">One Platform. Three Missions.</h2>
              <p className="text-xl text-academic-700 font-medium mb-4">
                Advancing science. Empowering clinicians. Driving real-world impact.
              </p>
            </div>

            <div className="space-y-6 text-left">
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">How do humans and AI agents adapt in a fast, ever-changing world?</span>
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">How do we decide when to persist, when to let go, and when to shift gears?</span>
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Why do we sometimes get stuck - and when does that evolve into rigidity linked to psychiatric conditions - and how do we best cope with it?</span>
              </p>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 bg-white p-8 rounded-xl border border-slate-100 shadow-sm"
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <span className="font-semibold text-slate-900">Answering these questions requires a new kind of integrative platform.</span>
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A next-generation digital ecosystem at the intersection of computational psychiatry, neuroscience, AI, and economics. It opens new frontiers for understanding the mechanisms of adaptive minds, shaping co-evolving human-AI interactions, and translating these insights into more effective mental health care.
            </p>

            <p className="text-slate-600 italic">
              This 2-minute video introduces a novel digital platform designed to support clinicians, accelerate scientific discovery, and open new frontiers for mental health innovation.
            </p>
          </motion.div>

          {/* Learn More Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Learn more:</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-slate-700 leading-relaxed">
                  While the front-end is gamified, this platform is designed as an experimental tool for probing and modeling neurocognitive mechanisms across cognitive and social contexts. It is not intended as a standalone intervention, but rather as a modular testbed that can be integrated with other digital approaches.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-slate-700 leading-relaxed">
                  This platform is "computationally engineered"- meaning it is specifically tailored to dissect neurocomputational mechanisms in a rich, yet controlled environment. It is suitable for studying cognitive-affective processes across multiple frameworks (e.g., cognitive control, reinforcement learning, avoidance behavior, effort-based or risky decision-making).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-slate-700 leading-relaxed">
                  I'm using this platform to pursue my research program centered on the neurocomputational mechanisms of adaptive behavior in natural and artificial intelligence, with a particular focus on how uncertainty, stress, and controllability influence mental and behavioral flexibility across cognitive and social contexts.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Disclaimer:</span> This is an early-stage scientific and translational concept under active development. All concepts and designs are original and protected by applicable intellectual property rights. Please contact before reuse or citation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Three Missions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* For Scientists */}
              <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-academic-600" />
                  <h3 className="text-xl font-semibold text-slate-900">For Scientists</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Interested in computational psychiatry, cognitive modeling, and deep learning?
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  I'm looking for collaborators to help advance the theoretical and empirical foundation of this platform. Let's publish, build, and explore the mechanisms together.
                </p>
                <button 
                  onClick={() => handleEmailClick('Collaboration on Gearshift Platform')}
                  className="w-full bg-academic-600 hover:bg-academic-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Let's collaborate!
                </button>
              </div>

              {/* For Clinicians */}
              <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-900">For Clinicians</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Want to pilot a digital tool that supports personalized care, adaptive timing, and mechanism-based insight?
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  I'm looking for clinical partners interested in validation studies, pilot testing, or integration into care workflows.
                </p>
                <button 
                  onClick={() => handleEmailClick('Pilot Interest - Gearshift Platform')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Join a Pilot!
                </button>
              </div>

              {/* For Institutions & Funders */}
              <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-slate-900">For Institutions & Funders</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Interested in supporting innovation in mental health?
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Whether through seed funding, research partnerships, or a faculty position - I'm building long-term, impact-driven collaborations.
                </p>
                <button 
                  onClick={() => handleEmailClick('Partnership & Funding Interest - Gearshift Platform')}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Let's connect!
                </button>
              </div>
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-8">My Vision</h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              A digital platform designed to holistically assess and enhance mental flexibility, advancing neuropsychological science and fostering mental resilience. By integrating state-of-the-art AI and computational modeling, we bring together scientists, the public, and healthcare professionals to improve productivity and coping skills in everyone, particularly those with ADHD and co-occurring anxiety and mood conditions.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-6">Our platform aims to:</h3>

            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Advance the study of mental flexibility</span> by exploring the biopsychological characteristics of behavioral adaptability across various contexts and varying timescales.
              </li>
              <li className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Enhance research</span> in neuroscience, psychology and computational psychiatry by addressing current barriers of traditional neurocognitive tests and modeling tool applications.
              </li>
              <li className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Integrate users and empower participants</span> by giving affected individuals a voice, with the long-term goal of creating personalized and autonomous digital coaching.
              </li>
            </ol>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GearshiftPlatform;
