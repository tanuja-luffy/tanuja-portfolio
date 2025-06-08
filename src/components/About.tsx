
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-bold text-white">ST</span>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  I'm a 3rd-year CSE student from <span className="font-semibold text-blue-600">Keshav Memorial Engineering College</span> (CGPA 8.11), 
                  passionate about clean, user-friendly full-stack applications and exploring AI to solve real-world challenges.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Currently mastering DSA and full-stack web development, I blend logic with aesthetics to build 
                  practical yet beautiful tech solutions.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Problem Solver</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Creative Thinker</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Tech Explorer</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
