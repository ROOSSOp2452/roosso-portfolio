// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'PYTHON', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'MACHINE LEARNING', level: 80 },
    { name: 'DATA ANALYSIS', level: 85 },
    { name: 'REACT JS', level: 65 },
    { name: 'DJANGO', level: 60 },
    
  ];

  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="cyber-border cyber-border-purple">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 cyber-glow">SKILLS</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="group/skill">
                <div className="flex justify-between mb-2">
                  <span className="text-cyan-300 font-mono text-sm">{skill.name}</span>
                  <span className="text-purple-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 group-hover/skill:animate-pulse"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;