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
                To pursue these aims, I am using a multidisciplinary approach that consists of clinical questionnaires, behavioral tests, and physiological measures such as electroencephalography (EEG) and eye tracking. To integrate these different measures into one framework, I am using computational modeling and machine learning. In so doing, I am implementing the Research Domain Criteria (RDoC) approach of the National Institute of Mental Health into practice. Figure 1 summarizes the objectives and the methodological approach of my research program.
              </p>

              <img 
                src="/assets/holistic test environment.png" 
                alt="Figure 1: Objectives and methodological approach of my research program" 
                className="w-full rounded-lg shadow-md mb-6 max-w-4xl mx-auto"
                style={{ objectFit: 'contain', backfaceVisibility: 'hidden' }}
              />

              <p className="text-sm text-slate-600 font-semibold mb-4">
                Figure 1. Objectives and methodological approach of my research program.
              </p>

              <p className="text-slate-700 leading-relaxed text-sm mb-4">
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
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <p className="text-slate-700 leading-relaxed mb-6">
                      So far, I mostly focused on the diffusion decision model which belongs to the class of sequential sampling models (SSMs). These models can be used to decompose behavioral performance into distinct mental components involved in cognitive processing. SSMs are based on the most dominant theory of how people make decisions: Specifically, decisions (such as those in cognitive tests) are a result of processes that have a starting point and that evolve by sequentially accumulating (noisy) evidence for response options up to a criterion at which a choice is initiated.
                    </p>

                    <p className="text-slate-700 leading-relaxed mb-6">
                      SSMs are well-established and account for behavior from a range of tests. They utilize more information than conventional statistics (e.g., average reaction times) because parameters are derived from the simultaneous consideration of accuracy and the entire reaction time (RT) distributions for corrects and errors.
                    </p>
                  </div>

                  <div className="flex-1">
                    <img 
                      src="/assets/the diffusion decision model.jpg" 
                      alt="Figure 2: The diffusion decision model" 
                      className="w-full rounded-lg shadow-md mb-4"
                      style={{ objectFit: 'contain', backfaceVisibility: 'hidden' }}
                    />

                    <p className="text-sm text-slate-600 font-semibold">
                      Figure 2. The diffusion decision model.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Joint-Modeling Approach */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Joint-Modeling Approach</h3>

              <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <p className="text-slate-700 leading-relaxed mb-6">
                      I use a hierarchical Bayesian framework to establish a link between clinical, behavioral and physiological measures. For example: if one hypothesizes a direct link between physiological and behavioral data, the observed physiological patterns are then used to replace the model parameters. This creates a model with predictions about the behavioral data.
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      There exist different possible linking functions; each function assumes a different brain-behavior interaction and is tested as to how well it accounts for empirical data. I focus on gaussian process regression and single-trial logistic regression (machine learning algorithms) as possible linking functions.
                    </p>
                  </div>

                  <div className="flex-1">
                    <img 
                      src="/assets/joint modeling approach.png" 
                      alt="Figure 3: Joint-modeling approach" 
                      className="w-full rounded-lg shadow-md mb-4"
                      style={{ objectFit: 'contain', backfaceVisibility: 'hidden' }}
                    />

                    <p className="text-sm text-slate-600 font-semibold">
                      Figure 3. Joint-modeling approach.
                    </p>
                  </div>
                </div>
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

            <ol className="list-none ml-0 space-y-2 text-sm">
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[1]</span><div><span className="italic">The National Institute of Mental Health (NIMH) Research Domain Criteria (RDoC) initiative</span>. National Institute of Mental Health. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/index.shtml</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[2]</span><div><span className="italic">Heterogeneity in ADHD: Neuropsychological pathways, comorbidity and symptom domains</span>. Wahlstedt, C., Thorell, L. B., & Bohlin, G. (2009). Journal of abnormal child psychology, 37(4), 551-564.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[3]</span><div><span className="italic">Improving neurocognitive testing using computational psychiatry—A systematic review for ADHD</span>. Ging-Jehli NR, Ratcliff R, Arnold LE. (2021). Psychological Bulletin, 147(2), 169-231.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[4]</span><div><span className="italic">Causal heterogeneity in attention-deficit/hyperactivity disorder: do we need neuropsychologically impaired subtypes?</span>. Nigg, J. T., Willcutt, E. G., Doyle, A. E., & Sonuga-Barke, E. J. (2005). Biological psychiatry, 57(11), 1224-1230.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[5]</span><div><span className="italic">The role of neurocognitive tests in the assessment of adult attention-deficit/hyperactivity disorder</span>. Nikolas, M. A., Marshall, P., & Hoelzle, J. B. (2019). Psychological assessment, 31(5), 685-698.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[6]</span><div><span className="italic">The Two Cultures of Computational Psychiatry</span>. Bennett D, Silverstein SM, Niv Y. (2019). JAMA Psychiatry, 76(6), 563-564.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[7]</span><div><span className="italic">Advancing Clinical Improvements for Patients Using the Theory-Driven and Data-Driven Branches of Computational Psychiatry</span>. Huys QJM. (2018). JAMA Psychiatry, 75(3), 225-226.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[8]</span><div><span className="italic">Translation of Computational Psychiatry in the Context of Addiction</span>. Liu S, Dolan RJ, Heinz A. (2020). JAMA Psychiatry.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[9]</span><div><span className="italic">A theory of memory retrieval</span>. Ratcliff R. (1978). Psychological Review, 85, 59–108.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[10]</span><div><span className="italic">Executive functioning heterogeneity in pediatric ADHD</span>. Kofler, M. J., Irwin, L. N., Soto, E. F., Groves, N. B., Harmon, S. L., & Sarver, D. E. (2019). Journal of Abnormal Child Psychology, 47(2), 273–286.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[11]</span><div><span className="italic">Neuropsychological characteristics of adults with ADHD: A comprehensive review of initial studies</span>. Woods, S. P., Lovejoy, D. W., and Ball, J. D. (2002). The Clinical Neuropsychologist, 16(1), 12-34.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[12]</span><div><span className="italic">Sequential sampling models in cognitive neuroscience: Advantages, applications, and extensions</span>. Forstmann, B. U., Ratcliff, R., & Wagenmakers, E. J. (2016). Annual review of psychology, 67.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[13]</span><div><span className="italic">Advances in techniques for imposing reciprocity in brain-behavior relations</span>. Turner, B. M., Palestro, J. J., Miletić, S., & Forstmann, B. U. (2019). Neuroscience & Biobehavioral Reviews, 102, 327-336.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[14]</span><div><span className="italic">Fundamental derivations from decision field theory</span>. Busemeyer, J. R., & Townsend, J. T. (1992). Mathematical Social Sciences, 23, 255–282.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[15]</span><div><span className="italic">On the ability to inhibit thought and action: General and special theories of an act of control</span>. Logan, G. D., Van Zandt, T., Verbruggen, F., & Wagenmakers, E.-J. (2014). Psychological Review,121(1),66-95.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[16]</span><div><span className="italic">A comparison of sequential sampling models for two-choice reaction time</span>. Ratcliff, R., & Smith, P. L. (2004). Psychological review, 111(2), 333.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[17]</span><div><span className="italic">Statistical mimicking of reaction time data: Single-process models, parameter variability, and mixtures</span>. Van Zandt, T., & Ratcliff, R. (1995). Psychonomic Bulletin & Review, 2(1), 20-54.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[18]</span><div><span className="italic">Modelling ADHD: a review of ADHD theories through their predictions for computational models of decision-making and reinforcement learning</span>. Ziegler, S., Pedersen, M. L., Mowinckel, A. M., & Biele, G. (2016). Neuroscience & Biobehavioral Reviews, 71, 633-656.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[19]</span><div><span className="italic">Approaches to analysis in model-based cognitive neuroscience</span>. Turner, B. M., Forstmann, B. U., Love, B. C., Palmeri, T. J., & Van Maanen, L. (2017). Journal of Mathematical Psychology, 76, 65-79.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[20]</span><div><span className="italic">Advances in techniques for imposing reciprocity in brain-behavior relations</span>. Turner, B. M., Palestro, J. J., Miletić, S., & Forstmann, B. U. (2019). Neuroscience & Biobehavioral Reviews, 102, 327-336.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[21]</span><div><span className="italic">Approximating Bayesian inference through model simulation</span>. Turner, B. M., & Van Zandt, T. (2018). Trends in Cognitive Sciences, 22(9), 826-840.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[22]</span><div><span className="italic">Informing cognitive abstractions through neuroimaging: The neural drift diffusion model</span>. Turner, B. M., Van Maanen, L., & Forstmann, B. U. (2015). Psychological review, 122(2), 312.</div></li>
              <li className="flex"><span className="mr-3 font-mono text-sm text-slate-700">[23]</span><div><span className="italic">Gaussian process linking functions for mind, brain, and behavior</span>. Bahg, G., Evans, D. G., Galdo, M., & Turner, B. M. (2020). Proceedings of the National Academy of Sciences, 117(47), 29398-29406.</div></li>
            </ol>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComputationalPsychiatry;
