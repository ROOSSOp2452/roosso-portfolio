// src/components/Projects.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Stock Market LSTM',
      desc: 'LSTM networks for stock prediction with 30% accuracy improvement',
      tech: ['Python', 'TensorFlow', 'Keras'],
      github: 'https://github.com/ROOSSOp2452/Stock_Market_anlaysis_using_LSTM'
    },
    {
      title: 'Fraud Detection',
      desc: 'Decision Tree Classifier with 99% accuracy for fraud detection',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/ROOSSOp2452/FRAUD_DETECTION'
    },
    {
      title: 'Task Management API',
      desc: 'Secure REST API with JWT authentication and CRUD operations',
      tech: ['Django', 'REST Framework', 'JWT'],
      github: 'https://github.com/ROOSSOp2452/Taskmanagement_api'
    },
    {
      title: 'Diabetes Prediction',
      desc: 'ML model for diabetes detection with 76.62% KNN accuracy',
      tech: ['Python', 'Scikit-learn', 'KNN'],
      github: 'https://github.com/ROOSSOp2452/Diabetes_Prediction_using_KNN'
    }
  ];

  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="cyber-border cyber-border-purple">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 cyber-glow">PROJECTS</h3>
          <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-all group/project cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-cyan-300 font-bold text-sm group-hover/project:text-cyan-200">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-purple-400 opacity-0 group-hover/project:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;