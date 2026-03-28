// CollapsibleSection component (must be top-level, before all imports)
import React, { useEffect, useState } from 'react';
const CollapsibleSection: React.FC<{ question: string; className?: string; children: React.ReactNode }> = ({ question, className = '', children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-6 transition-all ${className}`}>
      <button
        className="w-full text-left flex items-center justify-between font-semibold text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-academic-600 py-2"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`ml-2 transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
      </button>
      {open && <div className="mt-4 text-slate-800 text-base">{children}</div>}
    </div>
  );
};
import { motion } from 'framer-motion';
import { Zap, Users, Heart, Lightbulb } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PERSONAL_INFO } from '../constants';

const GearshiftFellowship: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Gearshift Fellowship | Nadja Ging-Jehli';

    const descriptionContent = 'Gearshift Fellowship is an independently developed research ecosystem integrating computational modeling, serious-game environments, and adaptive AI for adaptive intelligence and mental health research.';
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    const previousDescription = metaDescription.getAttribute('content') || '';
    metaDescription.setAttribute('content', descriptionContent);

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        metaDescription?.setAttribute('content', previousDescription);
      } else {
        metaDescription?.removeAttribute('content');
      }
    };
  }, []);

  const handleEmailClick = (subject: string) => {
    const emailAddress = "gearshiftfellowship@gmail.com";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Header Bar with Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Small Logo */}
            <div className="flex-shrink-0">
              <img
                src="/assets/gearshift%20fellowship.jpg"
                alt="Gearshift Fellowship"
                className="w-24 sm:w-32 rounded-xl shadow-md border-2 border-white"
                loading="eager"
              />
            </div>
            {/* Tagline Content */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">One Platform. Three Missions.</h2>
              <p className="text-lg md:text-xl text-academic-700 font-medium">
                Advancing science. Empowering clinicians. Driving real-world impact.
              </p>
            </div>
          </motion.div>

          {/* Hero Section with Mission Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            {/* Three Missions as Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center border border-slate-100">
                <Lightbulb className="w-8 h-8 text-academic-600 mb-2" />
                <span className="font-semibold text-slate-900 mb-1">Adaptation</span>
                <span className="text-slate-700 text-sm">How do humans and AI agents adapt in a fast, ever-changing world?</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center border border-slate-100">
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <span className="font-semibold text-slate-900 mb-1">Decision-Making</span>
                <span className="text-slate-700 text-sm">How do we decide when to persist, let go, or shift gears?</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center border border-slate-100">
                <Heart className="w-8 h-8 text-red-500 mb-2" />
                <span className="font-semibold text-slate-900 mb-1">Resilience</span>
                <span className="text-slate-700 text-sm">Why do we get stuck, and how do we best cope with it?</span>
              </div>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 bg-white p-5 sm:p-8 rounded-xl border border-slate-100 shadow-sm"
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <span className="font-semibold text-slate-900">Answering these questions requires a new kind of integrative platform.</span>
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A next-generation digital ecosystem at the intersection of computational psychiatry, neuroscience, AI, and economics. It opens new frontiers for understanding the mechanisms of adaptive minds, shaping co-evolving human-AI interactions, and translating these insights into more effective mental health care.
            </p>

            <p className="text-slate-600 italic">
              This 5-minute video introduces a novel digital platform designed to support clinicians, accelerate scientific discovery, and open new frontiers for mental health innovation.
            </p>
            <div className="flex justify-center my-6">
              <video
                src="/assets/GF01_VersionClinical_GingJehli.mp4"
                controls
                className="rounded-xl shadow-lg w-full max-w-2xl"
                poster="/assets/gearshift%20fellowship.jpg"
              >
                Your browser does not support the video tag.
              </video>
            </div>

          </motion.div>

          {/* Collapsible Info Sections after Video */}
          <div className="max-w-3xl mx-auto mb-12">
            {/* What is GF Collapsible */}
            <CollapsibleSection
              question="What is Gearshift Fellowship (GF)?"
              className="mb-4"
            >
              <p>
                <strong>Gearshift Fellowship (GF)</strong> is an independently developed research ecosystem that integrates computational modeling, serious-game environments, and adaptive AI agents to study how humans learn to adapt across cognitive, affective, and social challenges.
              </p>
              <p className="mt-4">
                The platform combines mechanistic neurocomputational models with interactive digital tasks that can be reconfigured in real time, enabling precise measurement of adaptability, controllability inference, and meta-learning across both healthy and clinical populations. Designed as a bridge between basic science and real-world application, Gearshift supports scalable online experiments, clinical studies, and translational partnerships, providing a shared infrastructure for researchers, clinicians, and engineers to collaboratively develop mechanism-based assessments and interventions.  GF is used in academic and clinical collaborations across institutions and serves as the core foundation of Nadja Ging-Jehli’s independent research program on adaptive intelligence and computational psychiatry.
              </p>
            </CollapsibleSection>

            {/* Leadership Collapsible */}
            <CollapsibleSection
              question="Who leads Gearshift Fellowship?"
            >
              <h3 className="text-xl font-semibold mb-2">Nadja Ging-Jehli, PhD</h3>
              <p className="italic mb-2">Founder & Scientific Director, Gearshift Fellowship (GF)</p>
              <p>
                Nadja is the creator and principal investigator of the Gearshift Fellowship platform. She leads its scientific vision, experimental architecture, and interdisciplinary integration, guiding the development of an independently built research ecosystem for studying and shaping cognitive–affective co-adaptation between humans and adaptive agents.
              </p>
              <p className="mt-4">
                To enable sustainable technical development and future translational applications, she established supporting entities that provide engineering infrastructure and steward the platform’s intellectual property.
              </p>
            </CollapsibleSection>
          </div>

          {/* Learn More Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">Learn more:</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100">
                <p className="text-slate-700 leading-relaxed">
                  While the front-end is gamified, this platform is designed as an experimental tool for probing and modeling neurocognitive mechanisms across cognitive and social contexts. It is not intended as a standalone intervention, but rather as a modular testbed that can be integrated with other digital approaches.
                </p>
              </div>

              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100">
                <p className="text-slate-700 leading-relaxed">
                  This platform is "computationally engineered"- meaning it is specifically tailored to dissect neurocomputational mechanisms in a rich, yet controlled environment. It is suitable for studying cognitive-affective processes across multiple frameworks (e.g., cognitive control, reinforcement learning, avoidance behavior, effort-based or risky decision-making).
                </p>
              </div>

              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100">
                <p className="text-slate-700 leading-relaxed">
                  I'm using this platform to pursue my research program centered on the neurocomputational mechanisms of adaptive behavior in natural and artificial intelligence, with a particular focus on how uncertainty, stress, and controllability influence mental and behavioral flexibility across cognitive and social contexts.
                </p>
              </div>

              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-100">
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
              <div className="bg-white p-5 sm:p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
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
                  onClick={() => handleEmailClick('Collaboration on Gearshift Fellowship')}
                  className="w-full bg-academic-600 hover:bg-academic-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Let's collaborate!
                </button>
              </div>

              {/* For Clinicians */}
              <div className="bg-white p-5 sm:p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
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
                  onClick={() => handleEmailClick('Pilot Interest - Gearshift Fellowship')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Join a Pilot!
                </button>
              </div>

              {/* For Institutions & Funders */}
              <div className="bg-white p-5 sm:p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
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
                  onClick={() => handleEmailClick('Partnership & Funding Interest - Gearshift Fellowship')}
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

export default GearshiftFellowship;
