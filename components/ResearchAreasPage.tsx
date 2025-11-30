import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BrainCircuit, Terminal } from 'lucide-react';
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
                        My research addresses current interconnected challenges in (social)cognitive neuroscience (CN) and computational psychiatry (CP): 1. developing multidimensional assessments across cognitive, social, and affective domains; 2. unifying computational models across analytical levels; and 3. translating research tools into clinical applications. Tackling these challenges is vital for a deeper understanding of mind-behavior relationships and the dysfunctionalities associated with mental health conditions.
                    </p>
                    <p className="mb-6">
                        From a neuroscientific perspective, my focus is on developing innovative analytical frameworks. This includes the combination of (biologically inspired) neurocomputational models with sequential sampling models of behavior. In so doing, I aim to identify new mental trade-offs and provide psychological interpretation of physiological measures.
                    </p>
                    <p className="mb-6">
                        From a clinical perspective, I apply these integrative strategies in the context of attention-deficit hyperactivity disorder (ADHD) and mood-related disorders and possible other frequent comorbidities such as substance use disorder. The complexity and co-occurrence of these disorders present unique diagnostic and therapeutic challenges. My goal is to create methodologies that not only differentiate neurocognitive dysfunctions across various phenotypes but also enable more personalized and effective treatments. I emphasize the examination of individual differences, and the advantage of linking biomedical, neuronal, and behavioral measures using computational models.
                    </p>
                    <p className="font-medium text-academic-700 italic text-center mt-8">
                        My theory-driven and model-based research is organized into three avenues outlined below.
                    </p>
                </div>
            </motion.div>

            <div className="space-y-16">
                {/* Avenue 1 */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <Compass size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900">Creating a multidimensional “assessment world”</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Compass Pointing North</span>
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <BrainCircuit size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">Utilizing and enhancing joint-modeling approaches to combine behavioral and physiological measures</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Brain Sketch</span>
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-academic-100 text-academic-700 rounded-lg">
                            <Terminal size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900">Assessing the practical usefulness of computational psychiatric tools</h2>
                            <span className="text-sm font-bold text-academic-600 uppercase tracking-wider">Programming Console</span>
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