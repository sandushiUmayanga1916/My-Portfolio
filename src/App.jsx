import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ModernLogoCarousel from './components/ModernLogoCarousel';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header/>
      <main className="pt-16 space-y-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ModernLogoCarousel/>
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
