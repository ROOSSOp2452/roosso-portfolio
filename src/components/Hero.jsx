import React from 'react';
import { Download } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero = ({ scrollToSection }) => {
  const resumeUrl = "https://drive.google.com/file/d/1es9yk4yABoUaMBS7DYcZAiIa8pACm50A/view?usp=sharing";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Roosso P
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
              Python Developer | AI Engineer | Data Analyst
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              I build intelligent and beautiful web applications. My passion lies at the intersection of data, AI, and user-centric design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          

        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;