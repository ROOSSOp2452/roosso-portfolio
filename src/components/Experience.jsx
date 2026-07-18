import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const experiences = [
  {
    title: "Python Developer",
    company: "M7 Corporation",
    period: "Jun 2025 – Present",
    location: "Chennai",
    description: (
      <>
        <h4 className="font-semibold text-blue-700 mt-1 mb-1">Voixo AI — AI Calling Platform</h4>
        <ul className="list-disc pl-5 space-y-2 text-left">
          <li>Owned backend API development for an AI-powered calling platform, handling inbound and outbound call flows end-to-end.</li>
          <li>Built and deployed real-time voice agents by integrating LiveKit, SIP trunking, Asterisk, and Gemini AI — including diagnosing and resolving a production room-join race condition (SIGTERM within 500 ms of join) and Deepgram STT misconfiguration in live Tamil-language complaint pipelines.</li>
          <li>Designed API key authentication securing third-party integrations across the platform.</li>
          <li>Debugged sequential call routing failures including SIP 480 DND issues and misconfigured team-lead flags causing calls to be silently bypassed.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-2 font-medium">Python, Django, Django REST Framework, LiveKit, SIP, Asterisk, Gemini AI</p>

        <h4 className="font-semibold text-blue-700 mt-4 mb-1">Augmented Reality Platform</h4>
        <ul className="list-disc pl-5 space-y-2 text-left">
          <li>Built backend APIs powering an AR content platform, enabling users to generate AR experiences from their own images and video.</li>
          <li>Implemented WebRTC-based real-time video streaming for AR playback and automated AR marker generation using MindAR.js.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-2 font-medium">Django, MindAR.js, WebRTC, JavaScript</p>

        <h4 className="font-semibold text-blue-700 mt-4 mb-1">Generative AI Fine-Tuning — Ace-Step (Music) & Wan 2.1 (Video)</h4>
        <ul className="list-disc pl-5 space-y-2 text-left">
          <li>Fine-tuned the Ace-Step music generation model using LoRA/QLoRA to improve Tamil and Indian regional music generation quality, including pronunciation accuracy and rhythmic fidelity.</li>
          <li>Fine-tuned the Wan 2.1 video generation and lip-sync model via ComfyUI-based LoRA training, improving lip-sync performance and output video quality across evaluation runs.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-2 font-medium">PyTorch, Hugging Face, PEFT, LoRA, QLoRA, ComfyUI</p>
      </>
    ),
    color: "blue"
  },
  {
    title: "Math AI Trainer",
    company: "Outlier AI",
    period: "Sep 2024 – Nov 2024",
    location: "Remote",
    description: (
      <ul className="list-disc pl-5 space-y-2 mt-2 text-left">
        <li>Created mathematical reasoning prompts for AI model training and evaluated AI responses to improve logical reasoning and problem-solving quality.</li>
      </ul>
    ),
    color: "purple"
  },
  {
    title: "Freelance",
    company: "Saint Mary Magdelene Church",
    period: "Freelance",
    location: "Remote",
    description: (
      <ul className="list-disc pl-5 space-y-2 mt-2 text-left">
        <li>Created a comprehensive frontend using React.js.</li>
        <li>Implemented APIs to connect frontend and backend.</li>
        <li>Used Django for the backend admin dashboard.</li>
      </ul>
    ),
    color: "green"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
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
        </RevealOnScroll>
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
    },
    green: {
      bg: 'bg-green-500',
      border: 'border-green-200',
      text: 'text-green-600',
      dot: 'bg-green-500'
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
          <div className="text-gray-700 leading-relaxed">{description}</div>
        </div>
      </div>
      <div className={`absolute w-8 h-8 ${theme.dot} rounded-full border-4 border-white shadow-md flex items-center justify-center ${timelineDotAlignment}`}>
        <Briefcase className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default Experience;