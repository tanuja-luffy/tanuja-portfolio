
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            "Designing with purpose. Coding with passion."
          </h3>
          <p className="text-blue-200 text-lg">
            Open to internships and collaborations in AI and Full-Stack Development
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80">
            © 2024 Sarvani Tanuja. Built with React, TypeScript, and lots of ☕
          </p>
          <p className="text-white/60 text-sm mt-2">
            Made with 💜 using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
