
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Sarvani Tanuja
          </h1>
          <div className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>AI Enthusiast</span>
            <span className="mx-2 text-blue-500">|</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>Full-Stack Developer</span>
            <span className="mx-2 text-blue-500">|</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>3rd-Year CSE Student</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          I'm a tech explorer with a creative core — building seamless, meaningful digital experiences. 
          Passionate about using technology to solve real-world problems, especially in the intersection of 
          <span className="text-blue-600 font-semibold"> Artificial Intelligence</span> and 
          <span className="text-purple-600 font-semibold"> Full-Stack Development</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FileText className="mr-2 h-5 w-5" />
            📁 View My Projects
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            📬 Let's Connect
          </Button>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a href="https://github.com/tanuja_luffy" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700 hover:text-blue-600">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700 hover:text-blue-600">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:saru.tanujaa@gmail.com"
             className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700 hover:text-blue-600">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-slate-400 mx-auto cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
