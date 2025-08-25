import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1aF0S7vNqv9EYQZagrxoSavhV4V9c3twD";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up opacity-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Roosso P
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
            AI Engineer | Data Scientist | Web Developer
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            I build intelligent and beautiful web applications. My passion lies at the intersection of data, AI, and user-centric design.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 [animation-delay:0.4s]">
          <a 
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            Explore My Work
          </a>
          <a 
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('skills')}>
          <ArrowDown className="w-8 h-8 text-gray-400 hover:text-blue-500 transition-colors" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;