import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Roosso P.</h3>
            <p className="text-gray-300 text-sm">AI Engineer | Data Scientist | Web Developer</p>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <SocialLink 
              href="https://github.com/ROOSSOp2452" 
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
              hoverColor="hover:text-gray-300"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/roosso-p-71b759279/" 
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
              hoverColor="hover:text-blue-400"
            />
            <SocialLink 
              href="mailto:roossop24@gmail.com" 
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              hoverColor="hover:text-green-400"
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label, hoverColor }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`text-gray-400 ${hoverColor} transition-all duration-300 hover:scale-110`}
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;