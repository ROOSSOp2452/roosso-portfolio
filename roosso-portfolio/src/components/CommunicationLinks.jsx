// src/components/CommunicationLinks.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const CommunicationLinks = () => {
  const links = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/roosso-p-71b759279/', color: 'text-blue-400 hover:text-blue-300' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/ROOSSOp2452', color: 'text-gray-400 hover:text-gray-300' },
    { icon: Mail, label: 'Email', url: 'mailto:roossop24@gmail.com', color: 'text-purple-400 hover:text-purple-300' }
  ];

  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="cyber-border cyber-border-purple">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 cyber-glow">COMMUNICATION LINKS</h3>
          <div className="flex justify-center space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/link transition-all duration-300 ${link.color}`}
              >
                <div className="relative">
                  <link.icon className="w-12 h-12 group-hover/link:scale-110 transition-transform" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-0 group-hover/link:opacity-30 transition-opacity"></div>
                </div>
                <p className="text-center text-xs mt-2 opacity-70 group-hover/link:opacity-100 transition-opacity">
                  {link.label}
                </p>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-cyan-300 text-sm font-mono">roossop24@gmail.com</p>
            <p className="text-purple-400 text-sm font-mono">+91-9791768146</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationLinks;