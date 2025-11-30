import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
    <Assistant />
  </>
);

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/research" element={<ResearchAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;