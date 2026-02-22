import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const BehavioralEconomics: React.FC = () => {
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
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Behavioral Economics
            </h1>

            <div className="space-y-4 mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-academic-700">
                PROPOSED BEHAVIORAL ECONOMICS (BE) FRAMEWORK
              </h2>
              <h3 className="text-xl font-semibold text-slate-800">
                TO SYSTEMATICALLY STUDY SOCIAL PREFERENCES
              </h3>
              <p className="text-sm text-slate-600 italic">
                (Excerpt from my Master's thesis (2017): "Situational Determinants of Social Preferences", written at the University of Zurich by Prof. Dr. Ernst Fehr.)
              </p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-white p-5 sm:p-8 rounded-xl border border-slate-100 shadow-sm">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Extensive research suggests that social behavior is influenced by various factors that existing models in economics and other social sciences have neglected thus far. Prominent examples involve robust and consistent evidence illustrating that individuals' social behaviors are affected by emotions, induced reference points or contextual frames (see for an overview Jehli, 2017, master's thesis). However, most prevalent theories take social preferences as primitives and thus implicitly assume that they are stable, a priori determined, and consistent both, over time and across contexts.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Therefore currently, the existing literature mainly proposes that the above described phenomena provide evidence for factors that depend on the decision context. However, the attempt to attribute too promptly biases in decision-making processes to contextual factors may belie the fact that underlying mechanisms would rather follow a law-like pattern that influence preferences in specific and predictable ways, across various situations.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                However, the diffusion models may provide a promising approach for the examination of these "situational factors." In particular, previous research has shown that the diffusion models (DDM, aDDM) may explain decision-making processes by providing accurate quantitative descriptions of the data for simple as well as value-based choices. Especially, these models assume that preferences are not a priori determined, before a decision has been made. Moreover, the attentional drift-diffusion model (aDDM) explains how visual attention may guide the decision-making process. Hence, with the mindset of the diffusion models it raises the question whether these models help to understand when and how decision-making processes are biased in specific ways.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Moreover, the elaborated framework below may prove helpful as a starting point. It not only illustrates how "situational determinants" may be related to the existing concepts used in economics and other social sciences, but may also serve to bridge and reconcile existing contradicting findings. Under this perspective, the word "situational" in the expression "situational determinants" can be misleading as it may prompt one to conclude that the determinants depend upon the situation in which the individual makes her decision. Rather, the term "situational" should illustrate that there are determinants of social behavior that are not yet attributable to the identified sets of determinants within the current economic framework (please see pdf for details on the economic framework and an example of the sets of determinants). Moreover, their characterization is rather difficult to grasp and they do not, on their own, form a separate, clearly distinguishable set of determinants. Therefore, it is not surprising that most of these determinants have been considered insignificant or too vague to be incorporated into an economic framework.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                However, when reviewing the existing research, it becomes apparent that these situational determinants can be characterized by the psychological channels through which they affect social preferences. A better understanding of these channels (e.g., which channels influence social preferences more than others) by using the diffusion models, allows existing models to be refined. In particular, if the determinants and characteristics of preferences are adequately captured in these models, they may provide useful insight for predictions and policy interventions.
              </p>
            </div>

            <img 
              src="/assets/Behavioral Economics.png" 
              alt="Behavioral Economics Framework" 
              className="w-full rounded-lg shadow-md mb-6 max-w-4xl mx-auto"
              style={{ objectFit: 'contain', backfaceVisibility: 'hidden' }}
            />

            <div className="text-center">
              <a
                href="/assets/ExcerptMasterthesis_Framework_NadjaJehli.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-academic-600 hover:bg-academic-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
              >
                More Details
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BehavioralEconomics;