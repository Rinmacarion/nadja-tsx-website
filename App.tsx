import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import GearshiftFellowship from './components/GearshiftPlatform';
import ComputationalPsychiatry from './components/ComputationalPsychiatry';
import BehavioralEconomics from './components/BehavioralEconomics';
import EinsteinQuote from './components/EinsteinQuote';
import WhatIsGF from './pages/WhatIsGF';
import Leadership from './pages/Leadership';

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<DiffusionDecisionModel />} />
          <Route path="/research" element={<ResearchAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gearshift" element={<GearshiftFellowship />} />
          <Route path="/gearshiftfellowship" element={<Navigate to="/gearshift" replace />} />
          <Route path="/computational-psychiatry" element={<ComputationalPsychiatry />} />
          <Route path="/behavioral-economics" element={<BehavioralEconomics />} />
          <Route path="/what-is-gf" element={<WhatIsGF />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;