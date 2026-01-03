import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const educationData = {
  degree: "B.Tech in AI & Data Science",
  institution: "Sri Muthukumaran Institute of Technology",
  duration: "2020 – 2024",
  cgpa: "8.11/10",
  description: "A comprehensive program focused on the core principles of Artificial Intelligence, Machine Learning, and Data Science, with a strong emphasis on practical application and software engineering."
};

const certifications = [
  { title: "Data Analytics Job Simulation", issuer: "Deloitte" },
  { title: "Microsoft Azure AI Essentials", issuer: "Microsoft" },
  { title: "OCI 2025 AI Foundations Associate", issuer: "Oracle" },
  { title: "Full Stack Development", issuer: "Infosys Springboard" },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <EducationCard />
          <CertificationsCard />
        </div>
      </div>
    </section>
  );
};

const EducationCard = () => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/80 h-full transform hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-blue-100 p-3 rounded-full">
        <GraduationCap className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-3xl font-bold text-gray-800">Education</h3>
    </div>
    <h4 className="text-2xl font-bold text-blue-700 mb-2">{educationData.degree}</h4>
    <p className="text-lg font-semibold text-gray-600 mb-2">{educationData.institution}</p>
    <div className="flex justify-between items-center text-md text-gray-500 mb-4">
      <span>{educationData.duration}</span>
      <span className="font-bold text-blue-600 bg-blue-100/80 py-1 px-3 rounded-md">CGPA: {educationData.cgpa}</span>
    </div>
    <p className="text-gray-700 leading-relaxed">{educationData.description}</p>
  </div>
);

const CertificationsCard = () => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/80 h-full transform hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-purple-100 p-3 rounded-full">
        <Award className="w-8 h-8 text-purple-600" />
      </div>
      <h3 className="text-3xl font-bold text-gray-800">Key Certifications</h3>
    </div>
    <div className="space-y-4">
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200/80 hover:border-purple-300 transition-colors">
          <Star className="w-6 h-6 text-purple-500 flex-shrink-0" />
          <div>
            <p className="font-bold text-purple-800">{cert.title}</p>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Education;