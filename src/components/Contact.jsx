import React from 'react';
import { Mail, Phone, Linkedin, Github, Download, MapPin } from 'lucide-react';

const contactInfo = {
  email: "roossop24@gmail.com",
  phone: "+91 97917 68146",
  linkedin: "https://www.linkedin.com/in/roosso-p-71b759279/",
  github: "https://github.com/ROOSSOp2452",
  resume: "https://drive.google.com/file/d/1uClghGxbWZACGuDV3pag57m9OhRXVphc/view?usp=sharing",
  location: "Chennai, Tamil Nadu, India"
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">I'm currently open to new opportunities and collaborations. Feel free to reach out!</p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 p-8 sm:p-12 rounded-2xl shadow-2xl border border-gray-200">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <ContactLink icon={<Mail className="w-6 h-6 text-blue-400" />} title="Email" text={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <ContactLink icon={<Phone className="w-6 h-6 text-green-400" />} title="Phone" text={contactInfo.phone} href={`tel:${contactInfo.phone}`} />
              <ContactLink icon={<Linkedin className="w-6 h-6 text-cyan-400" />} title="LinkedIn" text="Connect with me" href={contactInfo.linkedin} />
              <ContactLink icon={<Github className="w-6 h-6 text-gray-400" />} title="GitHub" text="View my projects" href={contactInfo.github} />
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Location</h3>
                <div className="flex items-center justify-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
              <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg flex items-center justify-center gap-3">
                <Download className="w-6 h-6" />
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, title, text, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
    <div className="bg-white p-3 rounded-full group-hover:bg-blue-50 transition-colors border border-gray-200">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{text}</p>
    </div>
  </a>
);

export default Contact;