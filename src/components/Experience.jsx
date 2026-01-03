import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: "Python (Django) Developer Intern",
    company: "Thaagam Foundation",
    period: "Jun 2025 – Present",
    location: "Remote",
    description: "Contributed to backend development for internal automation systems, and developed several creative ML models for content generation.",
    color: "blue"
  },
  {
    title: "Math AI Trainer (Freelance)",
    company: "Outlier AI",
    period: "Sep 2024 – Nov 2024",
    location: "Remote",
    description: "Enhanced LLM capabilities in mathematical reasoning and quantitative finance through targeted prompt-engineering workflows.",
    color: "purple"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, company, period, location, description, color, isLeft }) => {
  const timelineDotAlignment = isLeft ? "lg:left-1/2 lg:-ml-4" : "lg:left-1/2 lg:-ml-4";
  const cardAlignment = isLeft ? "lg:pr-12" : "lg:pl-12";

  const colors = {
    blue: {
      bg: 'bg-blue-500',
      border: 'border-blue-200',
      text: 'text-blue-600',
      dot: 'bg-blue-500'
    },
    purple: {
      bg: 'bg-purple-500',
      border: 'border-purple-200',
      text: 'text-purple-600',
      dot: 'bg-purple-500'
    }
  };

  const theme = colors[color] || colors.blue;

  return (
    <div className={`mb-12 flex flex-col items-center lg:flex-row ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`w-full lg:w-1/2 ${cardAlignment}`}>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 transform hover:-translate-y-2">
          <p className={`text-lg font-bold ${theme.text} mb-1`}>{company}</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-md mb-4 gap-x-4 gap-y-1">
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {period}</div>
            <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {location}</div>
          </div>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className={`absolute w-8 h-8 ${theme.dot} rounded-full border-4 border-white shadow-md flex items-center justify-center ${timelineDotAlignment}`}>
        <Briefcase className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default Experience;