import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Zap } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ComputationalPsychiatry: React.FC = () => {
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
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Computational Psychiatry
            </h1>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-semibold text-academic-700">
                Using computational psychiatry to characterize the neuropsychological pathways of ADHD
              </h2>
              <h3 className="text-xl font-semibold text-slate-800">
                Novel tools for personalizing assessments and treatments
              </h3>
            </div>
          </motion.div>

          {/* Objectives Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Objectives and Approach</h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The purpose of my research program is to better understand the neuropsychological pathways of child and adult attention-deficit hyperactivity disorder (ADHD) as well as other mental health conditions such as mood disorders. Specifically, I pursue the following three aims:
            </p>

            <ol className="space-y-4 list-decimal list-inside mb-8">
              <li className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Characterizing the neurocognitive processes of ADHD</span> by considering different symptom profiles (e.g., inattention, hyperactivity-impulsivity) and co-occurring mental disorders (e.g., depression, anxiety) to which I refer to as "comorbidities"
              </li>
              <li className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Predicting the development of ADHD over time</span>
              </li>
              <li className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Providing tools to personalize treatment</span>
              </li>
            </ol>

            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm mb-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To pursue these aims, I am using a multidisciplinary approach that consists of clinical questionnaires, behavioral tests, and physiological measures such as electroencephalography (EEG) and eye tracking. To integrate these different measures into one framework, I am using computational modeling and machine learning. In so doing, I am implementing the Research Domain Criteria (RDoC) approach of the National Institute of Mental Health into practice.
              </p>

              <p className="text-sm text-slate-600 italic mb-6">
                Figure 1 summarizes the objectives and the methodological approach of my research program.
              </p>

              <img 
                src="/assets/Objectives and methodological approach of my research program.jpg" 
                alt="Figure 1: Objectives and methodological approach of my research program" 
                className="w-full rounded-lg shadow-md mb-6 max-w-4xl mx-auto"
                style={{ objectFit: 'contain', backfaceVisibility: 'hidden' }}
              />

              <p className="text-sm text-slate-600 font-semibold mb-4">
                Figure 1. Objectives and methodological approach of my research program.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 mb-8">
              <p className="text-slate-700 leading-relaxed text-sm">
                <span className="font-semibold">"Comorbidities":</span> ADHD and frequently co-occurring disorders such as anxiety and depression. <span className="font-semibold">"Persistor":</span> a child, diagnosed with ADHD, who maintains an ADHD diagnosis into adulthood. <span className="font-semibold">"Desistor":</span> a child, diagnosed with ADHD, who sufficiently improves to not maintain an ADHD diagnosis into adulthood. <span className="font-semibold">"Controls":</span> a child without ADHD.
              </p>
            </div>
          </motion.div>

          {/* Significance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Significance of My Research Program</h2>

            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <p className="text-slate-700 leading-relaxed mb-4">
                Characterizing ADHD from a multidisciplinary perspective can help in the search for effective, tailored assessments and treatments, especially identification of subgroups responsive to specific treatments. Developing an integrative modeling tool allows psychologically meaningful interpretations of neurocognitive and EEG measures, as well as eye-tracking patterns.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Providing this tool also sets the groundwork to eventually incorporate other measures (e.g., genetics, microbiome). My research thus far focused on child as well as adult ADHD. I also put a stronger emphasis on comorbidities because the neurocognitive characteristics of ADHD and comorbidities (particularly adults) remain unclear.
              </p>
            </div>
          </motion.div>

          {/* Components Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Components of My Research Program</h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              My research program involves multiple (ongoing/completed) projects. Each completed project helped me to develop the integrative approach outlined in Figure 1. Currently, I am implementing this integrative approach as part of my dissertation.
            </p>

            {/* Dissertation Project */}
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Dissertation Project</h3>

              <p className="text-slate-700 leading-relaxed mb-6">
                In my review article, I found that young adults with ADHD (particularly females) represent an understudied population. Studying the neurocognitive characteristics of this population is important given that the number of young adults diagnosed with ADHD is increasing. For my dissertation, I use a novel test environment (composed of self-developed cognitive and social-cognitive tasks, physiological and clinical measures) to pursue the following aims:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">
                <li>Characterize neurocognitive processes of ADHD comorbidities</li>
                <li>Study how individual differences relate to symptom severity</li>
                <li>Develop new methods for assigning psychological interpretation to physiological measures</li>
              </ul>

              <p className="text-slate-700 leading-relaxed mb-4">
                The novel test environment provides a better understanding of the neuropsychological characteristics of adulthood ADHD (including comorbidities). I use a joint-modeling approach to link behavioral and physiological measures. Ultimately, I will apply this modeling approach to the data of randomized clinical trials to index different developmental courses of ADHD.
              </p>
            </div>
          </motion.div>

          {/* Methodological Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-8">Explanation of Methodological Approach</h2>

            {/* Computational Modeling */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Computational Modeling</h3>

              <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                <p className="text-slate-700 leading-relaxed mb-6">
                  So far, I mostly focused on the diffusion decision model which belongs to the class of sequential sampling models (SSMs). These models can be used to decompose behavioral performance into distinct mental components involved in cognitive processing. SSMs are based on the most dominant theory of how people make decisions: Specifically, decisions (such as those in cognitive tests) are a result of processes that have a starting point and that evolve by sequentially accumulating (noisy) evidence for response options up to a criterion at which a choice is initiated.
                </p>

                <p className="text-slate-700 leading-relaxed mb-6">
                  SSMs are well-established and account for behavior from a range of tests. They utilize more information than conventional statistics (e.g., average reaction times) because parameters are derived from the simultaneous consideration of accuracy and the entire reaction time (RT) distributions for corrects and errors.
                </p>
              </div>
            </div>

            {/* Joint-Modeling Approach */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Joint-Modeling Approach</h3>

              <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                <p className="text-slate-700 leading-relaxed mb-6">
                  I use a hierarchical Bayesian framework to establish a link between clinical, behavioral and physiological measures. For example: if one hypothesizes a direct link between physiological and behavioral data, the observed physiological patterns are then used to replace the model parameters. This creates a model with predictions about the behavioral data.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  There exist different possible linking functions; each function assumes a different brain-behavior interaction and is tested as to how well it accounts for empirical data. I focus on gaussian process regression and single-trial logistic regression (machine learning algorithms) as possible linking functions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">References</h2>

            <ol className="space-y-3 text-slate-700 text-sm leading-relaxed list-decimal list-inside">
              <li>National Institute of Mental Health. The National Institute of Mental Health (NIMH) Research Domain Criteria (RDoC) initiative. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/index.shtml</li>
              <li>Wahlstedt, C., Thorell, L. B., & Bohlin, G. (2009). Heterogeneity in ADHD: Neuropsychological pathways, comorbidity and symptom domains. Journal of abnormal child psychology, 37(4), 551-564.</li>
              <li>Ging-Jehli NR, Ratcliff R, Arnold LE. Improving neurocognitive testing using computational psychiatry-A systematic review for ADHD. Psychol Bull. 2021 Feb;147(2):169-231.</li>
              <li>Nigg, J. T., Willcutt, E. G., Doyle, A. E., & Sonuga-Barke, E. J. (2005). Causal heterogeneity in attention-deficit/hyperactivity disorder: do we need neuropsychologically impaired subtypes?. Biological psychiatry, 57(11), 1224-1230.</li>
              <li>Nikolas, M. A., Marshall, P., & Hoelzle, J. B. (2019). The role of neurocognitive tests in the assessment of adult attention-deficit/hyperactivity disorder. Psychological assessment, 31(5), 685-698.</li>
              <li>Bennett D, Silverstein SM, Niv Y. The Two Cultures of Computational Psychiatry. JAMA Psychiatry. 2019 Jun 1;76(6):563-564.</li>
              <li>Huys QJM. Advancing Clinical Improvements for Patients Using the Theory-Driven and Data-Driven Branches of Computational Psychiatry. JAMA Psychiatry. 2018 Mar 1;75(3):225-226.</li>
              <li>Liu S, Dolan RJ, Heinz A. Translation of Computational Psychiatry in the Context of Addiction. JAMA Psychiatry. 2020 Jul 1.</li>
              <li>Ratcliff R. A theory of memory retrieval. Psychological Review. 1978; 85:59–108.</li>
              <li>Kofler, M. J., Irwin, L. N., Soto, E. F., Groves, N. B., Harmon, S. L., & Sarver, D. E. (2019). Executive functioning heterogeneity in pediatric ADHD. Journal of Abnormal Child Psychology, 47(2), 273–286.</li>
              <li>Woods, S. P., Lovejoy, D. W., and Ball, J. D. (2002). Neuropsychological characteristics of adults with ADHD: A comprehensive review of initial studies. The Clinical Neuropsychologist, 16(1), 12-34.</li>
              <li>Forstmann, B. U., Ratcliff, R., & Wagenmakers, E. J. (2016). Sequential sampling models in cognitive neuroscience: Advantages, applications, and extensions. Annual review of psychology, 67.</li>
              <li>Turner, B. M., Palestro, J. J., Miletić, S., & Forstmann, B. U. (2019). Advances in techniques for imposing reciprocity in brain-behavior relations. Neuroscience & Biobehavioral Reviews, 102, 327-336.</li>
              <li>Busemeyer, J. R., & Townsend, J. T. (1992). Fundamental derivations from decision field theory. Mathematical Social Sciences, 23, 255–282.</li>
              <li>Logan, G. D., Van Zandt, T., Verbruggen, F., & Wagenmakers, E.-J. (2014). On the ability to inhibit thought and action: General and special theories of an act of control. Psychological Review,121(1),66-95.</li>
              <li>Ratcliff, R., & Smith, P. L. (2004). A comparison of sequential sampling models for two-choice reaction time. Psychological review, 111(2), 333.</li>
              <li>Van Zandt, T., & Ratcliff, R. (1995). Statistical mimicking of reaction time data: Single-process models, parameter variability, and mixtures. Psychonomic Bulletin & Review, 2(1), 20-54.</li>
              <li>Ziegler, S., Pedersen, M. L., Mowinckel, A. M., & Biele, G. (2016). Modelling ADHD: a review of ADHD theories through their predictions for computational models of decision-making and reinforcement learning. Neuroscience & Biobehavioral Reviews, 71, 633-656.</li>
              <li>Turner, B. M., Forstmann, B. U., Love, B. C., Palmeri, T. J., & Van Maanen, L. (2017). Approaches to analysis in model-based cognitive neuroscience. Journal of Mathematical Psychology, 76, 65-79.</li>
              <li>Turner, B. M., Palestro, J. J., Miletić, S., & Forstmann, B. U. (2019). Advances in techniques for imposing reciprocity in brain-behavior relations. Neuroscience & Biobehavioral Reviews, 102, 327-336.</li>
              <li>Turner, B. M., & Van Zandt, T. (2018). Approximating Bayesian inference through model simulation. Trends in Cognitive Sciences, 22(9), 826-840.</li>
              <li>Turner, B. M., Van Maanen, L., & Forstmann, B. U. (2015). Informing cognitive abstractions through neuroimaging: The neural drift diffusion model. Psychological review, 122(2), 312.</li>
              <li>Bahg, G., Evans, D. G., Galdo, M., & Turner, B. M. (2020). Gaussian process linking functions for mind, brain, and behavior. Proceedings of the National Academy of Sciences, 117(47), 29398-29406.</li>
            </ol>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComputationalPsychiatry;
