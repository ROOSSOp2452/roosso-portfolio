// src/components/Education.jsx
import React from 'react';

const Education = () => {
  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="cyber-border cyber-border-cyan">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 cyber-glow">EDUCATION</h3>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all">
              <h4 className="text-cyan-300 font-bold mb-2">B.Tech AI & Data Science</h4>
              <p className="text-purple-400 text-sm mb-2">Sri Muthukumaran Institute of Technology</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">2020 - 2024</span>
                <span className="text-cyan-300 font-mono text-sm bg-cyan-900/20 px-2 py-1 rounded">
                  CGPA: 8.11/10
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-purple-400 font-semibold mb-3">Key Certifications</h5>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'Microsoft Azure AI Essentials',
                  'Docker Foundations Professional',
                  'Data Analytics Essentials - Cisco',
                  'Full Stack Development - Infosys'
                ].map((cert, index) => (
                  <div key={index} className="bg-purple-900/20 p-2 rounded text-xs text-purple-300 border border-purple-500/30">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;