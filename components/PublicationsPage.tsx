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
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Publications</h1>
                <p className="text-xl text-slate-600 font-light">
                    Full list of peer-reviewed journal articles, conference proceedings, and book chapters.
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
                                <div key={pub.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                                                {pub.title}
                                            </h3>
                                            <p className="text-slate-600 mb-2">
                                                {pub.authors.map((author, i) => (
                                                    <span key={i} className={author.includes('Jehli') ? "font-bold text-slate-800" : ""}>
                                                        {author}{i < pub.authors.length - 1 ? ", " : ""}
                                                    </span>
                                                ))}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-academic-600 font-medium italic mb-3">
                                                <BookOpen size={14} />
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
                                        </div>
                                        <div className="flex-shrink-0 flex md:flex-col gap-2 pt-1">
                                            {pub.link && (
                                                <a 
                                                    href={pub.link}
                                                    className="p-2 text-slate-400 hover:text-academic-600 hover:bg-academic-50 rounded-lg transition-colors flex items-center justify-center gap-2 md:gap-0"
                                                    title="View Article"
                                                >
                                                    <ExternalLink size={20} />
                                                    <span className="md:hidden text-sm">View</span>
                                                </a>
                                            )}
                                            {/* Placeholder for PDF download */}
                                            <button 
                                                className="p-2 text-slate-400 hover:text-academic-600 hover:bg-academic-50 rounded-lg transition-colors flex items-center justify-center gap-2 md:gap-0"
                                                title="Download PDF"
                                            >
                                                <Download size={20} />
                                                <span className="md:hidden text-sm">PDF</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PublicationsPage;