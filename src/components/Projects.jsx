import React, { useState } from 'react';
import { TrendingUp, Users, ShieldAlert, HeartPulse, Globe, Database, Bot, BarChart3, ExternalLink, Github, Filter } from 'lucide-react';

const projectsData = [
  {
    title: "Stock Market LSTM Analysis",
    description: "Forecasted 3-month stock trends with 85% accuracy using LSTM networks.",
    category: "ml",
    technologies: ["Python", "LSTM", "TensorFlow"],
    github: "https://github.com/ROOSSOp2452/Stock_Market_anlaysis_using_LSTM",
    imageUrl: "https://via.placeholder.com/400x250/1D2B53/FFFFFF?text=ML+Project"
  },
  {
    title: "Customer Churn Analysis",
    description: "Predictive model using Random Forest to analyze churn patterns and identify key business drivers.",
    category: "ml",
    technologies: ["Python", "Scikit-learn", "Random Forest"],
    github: "https://github.com/ROOSSOp2452/CUSTOMER_CHURN_ANALYSIS",
    imageUrl: "https://via.placeholder.com/400x250/4A249D/FFFFFF?text=Analytics"
  },
  {
    title: "SRS Blog - AI Content Generator",
    description: "Django-powered content automation website integrated with ChatGPT API.",
    category: "web",
    technologies: ["Django", "ChatGPT API", "AI Integration"],
    github: "https://github.com/ROOSSOp2452/SRS-BLOG",
    imageUrl: "https://via.placeholder.com/400x250/0D47A1/FFFFFF?text=Web+App"
  },
  {
    title: "Power BI Sales Dashboard",
    description: "Comprehensive KPI dashboard visualizing sales performance and market trends.",
    category: "analytics",
    technologies: ["Power BI", "DAX", "Data Modeling"],
    github: "https://github.com/ROOSSOp2452/PowerBi_Dashboards",
    imageUrl: "https://via.placeholder.com/400x250/F0A500/FFFFFF?text=BI+Dashboard"
  },
  {
    title: "Finance Assistant Multi-Agent",
    description: "Interactive financial advisory application integrating yfinance and generative AI.",
    category: "ai",
    technologies: ["Python", "yfinance", "Generative AI"],
    github: "https://github.com/ROOSSOp2452",
    imageUrl: "https://via.placeholder.com/400x250/5C2E7E/FFFFFF?text=AI+Agent"
  },
  {
    title: "Task Management API",
    description: "Secure RESTful API with role-based access control and JWT authentication.",
    category: "web",
    technologies: ["Django REST", "JWT", "API Design"],
    github: "https://github.com/ROOSSOp2452",
    imageUrl: "https://via.placeholder.com/400x250/2C3E50/FFFFFF?text=Backend+API"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'ml', 'web', 'analytics', 'ai'];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                activeFilter === filter 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, technologies, github, imageUrl }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-200/80">
    <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
        ))}
      </div>
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-lg"
      >
        <Github className="w-6 h-6" />
        View Code
      </a>
    </div>
  </div>
);

export default Projects;