import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-2">Roosso P.</h3>
        <p className="text-gray-400 text-lg mb-6">AI Engineer | Data Scientist | Web Developer</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/ROOSSOp2452" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/roosso-p-71b759279/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-7 h-7" />
          </a>
          <a href="mailto:roossop24@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-7 h-7" />
          </a>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Roosso P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;