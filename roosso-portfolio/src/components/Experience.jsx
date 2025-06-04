// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="cyber-border cyber-border-cyan">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 cyber-glow">EXPERIENCE</h3>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-cyan-300 font-bold">Math AI Trainer</h4>
                <span className="text-purple-400 text-sm bg-purple-900/30 px-2 py-1 rounded">Freelance</span>
              </div>
              <p className="text-purple-400 text-sm mb-2">Outlier AI</p>
              <p className="text-gray-400 text-sm mb-3">Sep 2024 - Nov 2024</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Trained LLMs to solve complex mathematical problems</li>
                <li>• Used advanced prompt engineering techniques</li>
                <li>• Collaborated with technical teams to refine model accuracy</li>
                <li>• Enhanced AI efficiency in processing mathematical scenarios</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/20 p-4 rounded-lg border border-gray-600">
              <h5 className="text-purple-400 font-semibold mb-2">Core Competencies</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="text-cyan-300">• Data Analysis & Visualization</span>
                <span className="text-cyan-300">• Machine Learning Models</span>
                <span className="text-cyan-300">• API Development</span>
                <span className="text-cyan-300">• Database Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;