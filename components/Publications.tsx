import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  // Only show first 3 for preview
  const previewPublications = PUBLICATIONS.slice(0, 3);

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-100 pb-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">Selected Publications</h2>
            <p className="text-slate-500">A selection of recent peer-reviewed articles.</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link 
                to="/publications" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-academic-600 font-medium hover:text-academic-800 transition-colors flex items-center gap-1"
            >
                View Full List <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {previewPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-academic-100 group-hover:text-academic-600 transition-colors">
                  <BookOpen size={20} />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 mb-1 group-hover:text-academic-700 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3 italic">
                  {pub.journal}, {pub.year} — {pub.authors.join(", ")}
                </p>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed max-w-3xl">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map(tag => (
                    <span key={tag} className="text-xs py-1 px-3 bg-slate-100 text-slate-600 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <Link 
              to="/publications"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-academic-100 text-academic-800 rounded-lg hover:bg-academic-200 transition-colors font-medium"
            >
                View All Publications <ArrowRight size={16} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Publications;