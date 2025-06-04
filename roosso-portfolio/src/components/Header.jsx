// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="relative z-10 p-6 text-center">
      <div className="relative inline-block">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 animate-pulse">
          ROOSSO P
        </h1>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded blur opacity-20"></div>
      </div>
      <p className="text-xl text-cyan-300 font-mono tracking-wider">
        DATA ANALYST • AI TRAINER • PYTHON DEVELOPER
      </p>
    </header>
  );
};

export default Header;