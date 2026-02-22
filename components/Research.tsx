import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart, Globe, Users } from 'lucide-react';
import { RESEARCH_AREAS } from '../constants';
import { Link } from 'react-router-dom';

const iconMap = {
  Brain: Brain,
  BarChart: BarChart,
  Globe: Globe,
  Users: Users
};

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 md:py-24 bg-academic-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research Interests</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">How minds, biological and artificial, navigate uncertainty and change</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {RESEARCH_AREAS.map((area, index) => {
            const Icon = iconMap[area.iconName] || Globe;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-0 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 group flex flex-col overflow-hidden"
              >
                <div className="md:hidden px-4 py-3 bg-gradient-to-r from-academic-800 to-academic-600">
                  <h3 className="text-xl font-bold text-white font-serif">
                    <Link to="/research" className="text-white hover:text-white underline-offset-4 hover:underline" title={`See more about ${area.title}`}>
                      {area.title}
                    </Link>
                  </h3>
                </div>

                <div className="md:hidden p-4">
                  <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: area.description }} />
                </div>

                <div className="hidden md:block">
                  <div className="w-12 h-12 bg-academic-100 rounded-lg flex items-center justify-center mb-6 text-academic-700 group-hover:bg-academic-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Link to="/research" title={`See more about ${area.title}`}>
                      <Icon size={24} />
                    </Link>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow" dangerouslySetInnerHTML={{ __html: area.description }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Research;