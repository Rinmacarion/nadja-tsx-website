import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ResearchAreasPage: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Research Areas</h1>
                
                <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-left md:text-justify">
                    <p className="mb-6 font-medium text-academic-700 italic text-center">
                        Adaptability begins where certainty ends: in the moment the mind decides whether to persist, let go, or shift gears.
                    </p>
                    <p className="mb-6">
                        My research develops a mechanistic science of adaptive intelligence: how humans maintain agency, infer controllability, allocate effort, and update beliefs as cognitive, affective, and social demands change. I study why these processes sometimes fail, producing rigidity in thought and behavior across neurodevelopmental, anxiety, and mood conditions. My goal is to understand how minds recalibrate under uncertainty; and how those mechanisms can be strengthened to support mental health across the lifespan.
                    </p>
                    <p className="mb-6">
                        Real-world applications, for example psychiatry, needs models that explain not just what symptoms look like, but why they fluctuate, when interventions work, and which mechanisms to target for each individual. To address this, I integrate computational cognitive modeling (reinforcement learning, hierarchical inference, sequential sampling), generative AI, and adaptive serious-game environments that dynamically reconfigure based on theory. This unified framework allows me to study processes like avoidance, uncertainty intolerance, and effort–reward trade-offs within a single mechanistic system rather than in isolation.
                    </p>
                    <p className="mb-6">
                        What distinguishes my program is treating generative AI as an experimental model system, not just a tool. I build artificial agents that instantiate cognitive, affective, and motivational processes, allowing interacting mechanisms to be tested, perturbed, and translated into adaptive interventions. Together, this approach generates multidimensional adaptability profiles that predict real-world outcomes and guide personalized, just-in-time care.
                    </p>
                    <p className="font-medium text-academic-700 italic text-center mt-8">
                        My theory-driven and model-based research is organized into three complementary areas below.
                    </p>
                </div>
            </motion.div>

            <div className="space-y-16">
                {/* Avenue 1 */}
                <motion.section 
                    id="assessment-world"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                >
                    <div className="md:hidden px-5 py-3 bg-gradient-to-r from-academic-800 to-academic-600 mb-6">
                        <h2 className="text-2xl font-serif font-bold text-white leading-tight">From Integrative Theory to Real-World Utility</h2>
                        <span className="text-sm font-bold text-academic-100 uppercase tracking-wider">Behavioral Adaptability & Agency</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 mb-6 px-10 pt-10">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <Brain size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900">From Integrative Theory to Real-World Utility</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Behavioral Adaptability & Agency</span>
                        </div>
                    </div>
                    <div className="prose prose-slate text-slate-600 leading-relaxed text-left md:text-justify max-w-none px-5 pb-5 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
                        <p>
                            At the core of my work is a fundamental question: How do minds decide when to persist, let go, or shift strategies as the world changes? How do cognitive, affective, and meta-cognitive processes together construct a sense of agency under uncertainty?
                        </p>
                        <p>
                            I develop integrative theories of agency that explain how motivation, learning, and meta-cognition interact to shape controllability beliefs and guide adaptive behavior. In this framework, adaptability is not a fixed trait, but a dynamic process that emerges from interacting neurocomputational mechanisms. This framework treats adaptability not as a trait, but as a dynamic process that emerges from interacting neurocomputational mechanisms. Building on this foundation, I use computational modeling, machine learning, and generative AI to identify mechanistic phenotypes across clinical populations, linking latent cognitive–affective processes to symptoms and treatment response in mood, anxiety, and neurodevelopmental conditions. These approaches enable computational psychiatry to move beyond descriptive categories toward actionable, mechanism-based markers that inform personalized care.
                        </p>
                    </div>
                </motion.section>

                {/* Avenue 2 */}
                <motion.section 
                    id="joint-modeling"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                >
                    <div className="md:hidden px-5 py-3 bg-gradient-to-r from-academic-800 to-academic-600 mb-6">
                        <h2 className="text-2xl font-serif font-bold text-white leading-tight">Joint Modeling of Brain, Behavior & Physiology</h2>
                        <span className="text-sm font-bold text-academic-100 uppercase tracking-wider">Meta-Learning & Agentic AI</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 mb-6 px-10 pt-10">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <BarChart size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">Joint Modeling of Brain, Behavior & Physiology</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Meta-Learning & Agentic AI</span>
                        </div>
                    </div>
                    <div className="prose prose-slate text-slate-600 leading-relaxed text-left md:text-justify max-w-none px-5 pb-5 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
                        <p>
                            Understanding adaptive behavior requires models that explain not only what choices people make, but how they learn to learn. Namely, how they infer structure, update strategies, and regulate control across changing environments. I develop mechanistic computational models and generative AI agents that formalize these meta-learning processes, treating artificial agents as experimental model systems for cognitive, affective, and motivational mechanisms.
                        </p>
                        <p>
                            This approach allows interacting processes (e.g., learning, uncertainty estimation, effort allocation, and controllability inference) to be tested, perturbed, and combined within a unified computational architecture. By instantiating theory directly in generative systems, I aim to define a new, mechanism-based paradigm for computational psychiatry that links formal models of adaptive intelligence to real-world behavior.
                        </p>
                        <p>
                            To ground these models biologically, I further integrate behavioral data with neural and physiological signals, including EEG, eye-tracking, and pupillometry, using joint generative frameworks that connect latent cognitive processes to observable biomarkers. Together, these multimodal models provide a holistic account of how individual differences emerge across brain, behavior, and mental health.
                        </p>
                    </div>
                </motion.section>

                {/* Avenue 3 */}
                <motion.section 
                    id="psychiatric-tools"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                >
                    <div className="md:hidden px-5 py-3 bg-gradient-to-r from-academic-800 to-academic-600 mb-6">
                        <h2 className="text-2xl font-serif font-bold text-white leading-tight">Ecological Assessment Platforms</h2>
                        <span className="text-sm font-bold text-academic-100 uppercase tracking-wider">Translational Systems & Clinical Integration</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 mb-6 px-10 pt-10">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900">Ecological Assessment Platforms</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Translational Systems & Clinical Integration</span>
                        </div>
                    </div>
                    <div className="prose prose-slate text-slate-600 leading-relaxed text-left md:text-justify max-w-none px-5 pb-5 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
                        <p>
                            Traditional neurocognitive tests focus on single constructs and are not suited to study dynamics between them. Consequently, they miss to capture how people function in real-world, dynamic environments. I design ecologically valid behavioral and social-cognitive environments that integrate computational models with biomarkers, enabling adaptability to be measured as it unfolds in realistic contexts.
                        </p>
                        <p>
                            These environments form the foundation of scalable digital assessment platforms, including Gearshift Fellowship, that function as research infrastructure rather than isolated tasks. By embedding mechanistic models directly into interactive systems, this work supports continuous, multidimensional phenotyping, personalized intervention, and real-time adaptation. Together, these platforms translate theory into practice, bridging neuroscience, psychiatry, psychology, and AI to enable mechanism-driven mental health care at scale.
                        </p>
                    </div>
                </motion.section>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchAreasPage;