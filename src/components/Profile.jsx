// src/components/Profile.jsx
import React from 'react';

const Profile = () => {
  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="cyber-border cyber-border-cyan">
        <div className="p-6 h-full flex flex-col items-center">
          <div className="w-32 h-32 mb-4 relative">
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-cyan-500/50">
              RP
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
          </div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-2 cyber-glow">PROFILE</h3>
          <p className="text-gray-300 text-center text-sm leading-relaxed">
            Recent AI & Data Science graduate with expertise in machine learning, 
            data analysis, and full-stack development. Passionate about solving 
            complex problems with innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;