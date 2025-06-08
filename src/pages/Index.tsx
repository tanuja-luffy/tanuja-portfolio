
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import SoftSkills from '../components/SoftSkills';
import Hobbies from '../components/Hobbies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
      <SoftSkills />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
