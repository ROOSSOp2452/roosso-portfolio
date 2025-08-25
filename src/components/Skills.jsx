import React from 'react';
import { Code, Database, Brain, BarChart3, Globe, Settings, Award, TrendingUp } from 'lucide-react';

const skillsData = {
  languages: [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'JavaScript', level: 85, icon: '🚀' },
    { name: 'SQL', level: 88, icon: '🗃️' },
    { name: 'C++', level: 70, icon: '🔧' },
  ],
  web: [
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'Django', level: 88, icon: '🎸' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'REST APIs', level: 82, icon: '🔗' },
  ],
  ml_ai: [
    { name: 'TensorFlow', level: 85, icon: '🧠' },
    { name: 'Scikit-learn', level: 90, icon: '🤖' },
    { name: 'PyTorch', level: 80, icon: '🔥' },
    { name: 'NumPy/Pandas', level: 95, icon: '📊' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85, icon: '🛠️' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'VS Code', level: 90, icon: '💻' },
    { name: 'Power BI', level: 88, icon: '📈' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Proficiency</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillColumn title="Languages" skills={skillsData.languages} icon={<Code className="w-8 h-8 text-blue-500" />} />
          <SkillColumn title="Web & APIs" skills={skillsData.web} icon={<Globe className="w-8 h-8 text-green-500" />} />
          <SkillColumn title="ML & AI" skills={skillsData.ml_ai} icon={<Brain className="w-8 h-8 text-purple-500" />} />
          <SkillColumn title="Tools & BI" skills={skillsData.tools} icon={<Settings className="w-8 h-8 text-orange-500" />} />
        </div>
      </div>
    </section>
  );
};

const SkillColumn = ({ title, skills, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/80 transform hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-6">
      {icon}
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="space-y-5">
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
  </div>
);

const SkillBar = ({ name, level, icon }) => (
  <div>
    <div className="flex justify-between items-center mb-1.5">
      <div className="flex items-center">
        <span className="mr-2 text-lg">{icon}</span>
        <h4 className="font-semibold text-gray-700">{name}</h4>
      </div>
      <span className="text-sm font-bold text-blue-600 bg-blue-100/80 py-0.5 px-2 rounded-md">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default Skills;
