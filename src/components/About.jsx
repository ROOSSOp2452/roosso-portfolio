import React from 'react';
import { User, Briefcase, Award, Code } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="relative group">

                <img 
                  src="/images/roosso.png"
                  alt="Roosso P"
                  className="relative w-full max-w-sm mx-auto rounded-full shadow-2xl border-8 border-white"
                />
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Python Developer experienced in Django, REST APIs, and MySQL, with a strong focus on scalable backend development, clean code practices, and API integration. Collaborative team player with a solid Python foundation, exposure to machine learning, and a passion for continuous learning and modern technologies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InfoCard 
                  icon={<Briefcase className="w-7 h-7 text-blue-600" />} 
                  title="Experience"
                  text=" 0.6 years of hands-on experience in Finetuning and deploying AI models and web applications."
                />
                <InfoCard 
                  icon={<Award className="w-7 h-7 text-purple-600" />} 
                  title="Education"
                  text="B.Tech in AI & Data Science with a CGPA of 8.11, focused on machine learning and software engineering."
                />
                <InfoCard 
                  icon={<Code className="w-7 h-7 text-green-600" />} 
                  title="Skills"
                  text="Proficient in Python, JavaScript, React, TensorFlow, and a wide range of data science libraries."
                />
                <InfoCard 
                  icon={<User className="w-7 h-7 text-orange-600" />} 
                  title="Career Goals"
                  text="Seeking to contribute to a forward-thinking company, driving innovation and solving complex challenges."
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, text }) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200/80 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center gap-4 mb-3">
      {icon}
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

export default About;