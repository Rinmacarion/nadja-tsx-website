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
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Research Areas</h1>
                
                <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-justify">
                    <p className="mb-6">
                        Adaptability begins where certainty ends: the moment when the mind decides whether to persist, let go, or shift gears. My research program develops a mechanistic science of adaptive intelligence. Namely, how humans maintain agency, infer controllability, allocate effort, and flexibly update beliefs when demands change across cognitive, affective, and social contexts. I investigate why and how these mechanisms break down, producing mental and behavioral rigidity across neurodevelopmental, anxiety, and mood disorders. Ultimately, my goal is to build a unified understanding of adaptive intelligence to explain how mind, motivation, and meaning recalibrate under uncertainty and how these processes can be strengthened to support mental health across the lifespan.
                    </p>
                    <p className="mb-6">
                        Psychiatry needs models that explain why symptoms fluctuate, when interventions work, and which mechanisms to target for each individual and for how long. My approach integrates computational cognitive modeling (reinforcement learning, hierarchical inference, sequential sampling), generative AI (deep learning, agent-based systems), and adaptive serious-game environments that dynamically reconfigure based on cognitive-affective theories. This unified framework allows me to study clinical constructs (e.g., avoidance, uncertainty intolerance, and effort-reward tradeoffs), typically examined in isolation, within a single mechanistic system. A central focus is meta-control and meta-learning: how people adapt strategies over time, how maladaptive patterns emerge, and how fragile or illusory senses of control contribute to clinical rigidity. My approach aims to generate multidimensional adaptability profiles that predict real-world symptom trajectories and guide just-in-time interventions.
                    </p>
                    <p className="mb-6">
                        What distinguishes my program is the integration of psychiatry, psychology, neuroscience, and AI into a single modeling architecture. I use generative AI not as a tool, but as an experimental model system: artificial agents that instantiate cognitive, affective, and motivational processes presumed to underlie psychopathology. These agents allow me to disentangle how interacting mechanisms jointly shape a person's sense of control in complex environments and to design adaptive interventions that strengthen the processes that falter. They also offer a principled way to formalize implicit clinical knowledge into testable computational theories. My unique integration of generative AI as model systems and computational cognitive models to dissect mental health mechanisms directly aligns with Michigan's vision for generative AI-informed computational psychiatry and the integrative nature of this cluster hire. I am excited to contribute to the department of psychiatry and to the broader interdisciplinary collaborations across psychology, cognitive science, and the Weinberg Institute.
                    </p>
                    <p className="font-medium text-academic-700 italic text-center mt-8">
                        My theory-driven and model-based research is organized into three avenues outlined below.
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
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900">Creating a multidimensional "assessment world"</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Interdisciplinary Bridging</span>
                        </div>
                    </div>
                    <div className="prose prose-slate text-slate-600 leading-relaxed text-justify max-w-none">
                        <p>
                            I am eager to develop new cognitive and social-cognitive laboratory paradigms to improve current (neuro)cognitive testing for mental health conditions. I place a strong emphasis on integrating biomarkers such as those collected with eye-tracking and electroencephalogram (EEG) and to develop paradigms suitable for the application of computational models. I also place a strong emphasis on social cognition and on incorporating the latest research from cognitive psychology. I started this line of research as part of my dissertation, and with the help of my first research grant as part of my past Swiss National Science Foundation fellowship.
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
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <BarChart size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">Utilizing and enhancing joint-modeling approaches to combine behavioral and physiological measures</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Meta-Learning & AI</span>
                        </div>
                    </div>
                    <div className="prose prose-slate text-slate-600 leading-relaxed text-justify max-w-none">
                        <p>
                            To date, the links between physiological measures (e.g., task-evoked pupil responses, EEG event-related potentials, blood-oxygen-level-dependent signals) and behavior are not well understood. Computational modeling can help to establish a link between latent mental components and neurophysiological components. In this line of research, I will use and enhance joint-modeling approaches that will integrate different sources of individual differences (e.g., genetics, environmental factors, cognitive abilities) into one modeling framework. This will initially involve using existing clinical datasets to examine how individual differences in behavior relate to individual differences in physiological measures. Aside from utilizing existing clinical datasets, I am also eager to collect data from improved neurocognitive tests as part of new studies and treatment interventions (see point 1).
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
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <Brain size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900">Assessing the practical usefulness of computational psychiatric tools</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Behavioral Adaptability</span>
                        </div>
                    </div>
                    <div className="prose prose-slate text-slate-600 leading-relaxed text-justify max-w-none">
                        <p>
                            Computational psychiatry is a nascent field that needs to prove its usefulness for medical doctors and clinicians not only for diagnostic purposes but also for selecting and tailoring treatments. Therefore, I have applied computational modeling and machine learning to existing datasets from clinical treatments to examine different phenotypes of ADHD, e.g., subjects with ADHD and depression, autism, etc. In another study, I found that cognitive components (identified by pre-treatment cognitive testing and computational modeling) predicted the efficacy of neurofeedback therapy for ADHD patients. Further research is needed to replicate these exploratory results and to examine the usefulness of these computational psychiatric tools. I look forward to eventually making these tools accessible to researchers and clinicians with different backgrounds and skill sets. However, there are multiple barriers that we first need to overcome, some of which have been summarized in a Psychological Bulletin article by me, Dr. Ratcliff, and Dr. Arnold (see: <Link to="/publications" className="text-academic-600 font-medium hover:text-academic-800 underline decoration-academic-300 underline-offset-2">publications</Link>). As part of my dissertation, I have created improved neurocognitive tests in the domain of selective attention, cognitive control, cognitive flexibility, and social cognition. I am eager to use these novel tasks in future studies, to assess the robustness of the results and to replicate them in other samples. I am always open to discuss about how to improve neurocognitive testing, and to collaborate in future studies, please <a href="#contact" onClick={scrollToContact} className="text-academic-600 font-medium hover:text-academic-800 underline decoration-academic-300 underline-offset-2">contact me</a> if you would like to hear more.
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