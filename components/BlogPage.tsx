import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  'All',
  'Sequential Modeling',
  'Hierarchical/Multilevel Modeling',
  'Computational Toolboxes',
  'Modeling Technicalities',
  'Machine Learning Algorithms',
];

const BlogPage: React.FC = () => {
  const [active, setActive] = useState('All');

  const posts = BLOG_POSTS.filter((p: any) => active === 'All' ? true : p.tags.includes(active));

  useEffect(() => {
    // Dev helper: log diffusion post content to confirm which BLOG_POSTS the running app loaded
    const diffusion = BLOG_POSTS.find((p: any) => p.id === 'diffusion-ddm');
    if (diffusion) console.log('DEV: diffusion post content:', diffusion.content);
  }, []);

  const makePreview = (post: any) => {
    if (post.excerpt) {
      return <>{post.excerpt}</>;
    }
    
    if (post.content) {
      const preview = post.content.substring(0, 300);
      return <>{preview}{post.content.length > 300 ? '...' : ''}</>;
    }

    return null;
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
            className="mb-8"
          >
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4">Welcome to my modeling cockpit!</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Here, I provide brief and digestible blogs covering various aspects of modeling. From the foundational principles of hierarchical/multilevel modeling (spanning both Bayesian and Frequentist approaches) to the nitty-gritty of advanced modeling techniques, including applications with sequential sampling modeling, neural network modeling, and other machine learning techniques. In addition to insightful explanations, you'll find practical guides about various modeling toolboxes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              My goal is to peel back the layers of complexity in modeling, equipping you with the practical and technical knowledge to grasp the intricate mechanics at play. Let's explore and unlock the secrets of computational modeling together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Practical Tutorials</h2>
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
              <p className="text-slate-700">I currently provide tutorials and code snippets on my <a href="https://github.com/gingjehli" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub account</a>. I will soon add more tutorials and code snippets for different modeling toolboxes.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Categories</h2>

            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    active === cat ? 'bg-academic-800 text-white' : 'bg-academic-50 text-academic-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {posts.length === 0 && (
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                {active === 'Computational Toolboxes' ? (
                  <div>
                    <p className="text-slate-800 mb-4">
                      In this blog, I will offer a comprehensive overview of various modeling packages, including STAN, BRMS, DMC, HDDM, and the updated HSSM. You can already access some of the tutorials on my GitHub account. These tutorials will be regularly updated and expanded.
                    </p>
                  </div>
                ) : active === 'Machine Learning Algorithms' ? (
                  <div>
                    <p className="text-slate-800 mb-4">
                      In this category, I will explore a variety of supervised and unsupervised machine learning techniques, detailing their applications and nuances.
                    </p>
                  </div>
                ) : (
                  <p className="text-slate-800">No posts yet — category: <strong>{active}</strong>.</p>
                )}
              </div>
            )}

            {posts.map((post: any) => (
              <div key={post.id} className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">{post.title}</h3>
                    <div className="text-sm text-slate-500 mb-3">{post.date} • <span className="italic">{post.tags.join(', ')}</span></div>
                    <div className="text-slate-700 mb-3">{makePreview(post)}</div>
                    <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
