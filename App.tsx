import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import PublicationsPage from './components/PublicationsPage';
import ResearchAreasPage from './components/ResearchAreasPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import DiffusionDecisionModel from './components/DiffusionDecisionModel';
import GearshiftPlatform from './components/GearshiftPlatform';
import ComputationalPsychiatry from './components/ComputationalPsychiatry';
import BehavioralEconomics from './components/BehavioralEconomics';
import EinsteinQuote from './components/EinsteinQuote';

const Home: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Research />
      <Publications />
    </main>
    <Footer />
  </>
);

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Immediately scroll to top, override any scroll restoration
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<DiffusionDecisionModel />} />
          <Route path="/research" element={<ResearchAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gearshift" element={<GearshiftPlatform />} />
          <Route path="/computational-psychiatry" element={<ComputationalPsychiatry />} />
          <Route path="/behavioral-economics" element={<BehavioralEconomics />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;