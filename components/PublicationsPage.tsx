import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Download, ExternalLink } from 'lucide-react';
import { PUBLICATIONS } from '../constants';
import Navbar from './Navbar';
import Footer from './Footer';

const PublicationsPage: React.FC = () => {
  // Group publications by year
  const pubsByYear = PUBLICATIONS.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof PUBLICATIONS>);

  // Sort years descending
  const years = Object.keys(pubsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center md:text-left"
            >
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4">Publications</h1>
                <p className="text-lg md:text-xl text-slate-600 font-light">
                    Full list of peer-reviewed journal articles. For preprints, conference proceedings, and book chapters, please see <a href="/assets/CV_GingJehli_060926.pdf" target="_blank" rel="noopener noreferrer" className="text-academic-700 hover:text-academic-800 underline">CV</a>.
                </p>
            </motion.div>

            <div className="space-y-12">
                {years.map((year, yearIndex) => (
                    <motion.div 
                        key={year}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-2xl font-bold text-academic-800">{year}</h2>
                            <div className="h-px bg-slate-200 flex-grow"></div>
                        </div>

                        <div className="space-y-6">
                            {pubsByYear[year].map((pub) => (
                                <div key={pub.id} className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                                                {pub.title}
                                            </h3>
                                            <p className="text-slate-600 mb-2">
                                                {pub.authors.map((author, i) => (
                                                    <span key={i}>
                                                        {author}{i < pub.authors.length - 1 ? ", " : ""}
                                                    </span>
                                                ))}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-academic-600 font-medium italic mb-3">
                                                <BookOpen size={14} className="hidden md:block" />
                                                {pub.journal}
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                                {pub.abstract}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {pub.tags.map(tag => (
                                                    <span key={tag} className="text-xs py-1 px-2 bg-academic-50 text-academic-700 rounded border border-academic-100">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="md:hidden flex flex-wrap gap-3 mt-4 text-sm">
                                                {pub.link && (
                                                    <a
                                                        href={pub.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-academic-700 font-medium hover:text-academic-900 underline underline-offset-2"
                                                    >
                                                        View article
                                                    </a>
                                                )}
                                                {pub.pdf && (
                                                    <a
                                                        href={pub.pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-academic-700 font-medium hover:text-academic-900 underline underline-offset-2"
                                                    >
                                                        View preprint
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="hidden md:flex flex-shrink-0 md:flex-col gap-2 pt-1">
                                            {pub.link && (
                                                <a 
                                                    href={pub.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-400 hover:text-academic-600 hover:bg-academic-50 rounded-lg transition-colors flex items-center justify-center gap-2 md:gap-0"
                                                    title="View Article"
                                                >
                                                    <ExternalLink size={20} />
                                                    <span className="hidden md:inline text-sm">View article</span>
                                                    <span className="md:hidden text-sm">View</span>
                                                </a>
                                            )}
                                            {/* PDF download (opens in new tab) */}
                                            {pub.pdf && (
                                                <a
                                                    href={pub.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-400 hover:text-academic-600 hover:bg-academic-50 rounded-lg transition-colors flex items-center justify-center gap-2 md:gap-0"
                                                    title="View Preprint"
                                                >
                                                    <Download size={20} />
                                                    <span className="hidden md:inline text-sm">View preprint</span>
                                                    <span className="md:hidden text-sm">Preprint</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: years.length * 0.1 }}
                className="mt-12"
            >
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">ARTICLES UNDER REVIEW</h3>
                    <div className="h-px bg-slate-200 flex-grow"></div>
                </div>

                <div className="space-y-4">
                    {/* ARTICLES UNDER REVIEW */}
                    {[
                        {
                            title: "Sustaining Control and Agency Under Threat: Computational Pathways to Persistence and Escape",
                            authors: ["Ging-Jehli, N.R.", "Childers, R.K."],
                            status: "submitted",
                            link: "https://www.biorxiv.org/content/10.64898/2026.04.08.717273v1"
                        },
                        {
                            title: "Broader visual processing and distinct pupil dynamics facilitate resolving perceptual conflict and compensate for ADHD distractibility.",
                            authors: ["Ging-Jehli, N.R.", "Arnold, L.E.", "Sellers J.", "Van Zandt, T."],
                            status: "submitted"
                        }
                    ].map((pub, idx) => (
                        <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-600 mb-2">
                                        {pub.authors.map((author, i) => (
                                            <span key={i}>
                                                {author}{i < pub.authors.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                        <span className="text-academic-600 font-medium ml-2">({pub.status})</span>
                                    </p>
                                    {pub.link && (
                                        <div className="mt-2">
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-academic-700 font-medium hover:text-academic-900 underline underline-offset-2 text-sm"
                                            >
                                                View preprint
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="h-12"></div>
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">CURRENT PROJECTS</h3>
                    <div className="h-px bg-slate-200 flex-grow"></div>
                </div>

                <div className="space-y-4">
                    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-slate-800 text-sm leading-relaxed">Generative Archetypes of Adaptive Intelligence. Integrating cognitive mechanisms with adaptive AI</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-slate-800 text-sm leading-relaxed">A unified modeling approach to characterize disorder-specific and transdiagnostic features across cognitive domains and over time</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-slate-800 text-sm leading-relaxed">Neuronal and attentional signatures of attention-deficit/hyperactivity disorder (ADHD) within a novel cognitive flexibility task</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-slate-800 text-sm leading-relaxed">Neurocognitive study using own developed cognitive flexibility paradigm and a new joint-modeling approach to integrate behavioral responses, eye tracking, and EEG</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PublicationsPage;