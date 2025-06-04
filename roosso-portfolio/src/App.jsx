// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import CommunicationLinks from './components/CommunicationLinks';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce slow-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgb(16, 17, 17) 1px, transparent 1px),
            linear-gradient(90deg, rgb(13, 14, 14) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8">
              <Profile />
              <CommunicationLinks />
            </div>
            
            {/* Middle Column */}
            <div className="lg:col-span-1 space-y-8">
              <Skills />
              <Experience />
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8">
              <Projects />
              <Education />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;