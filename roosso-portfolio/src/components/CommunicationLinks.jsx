import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:roossop24@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'roossop24@gmail.com',
      link: 'mailto:roossop24@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 97917 68146',
      link: 'tel:+919791768146',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: 'https://maps.google.com/?q=Chennai,Tamil Nadu,India',
      color: 'from-red-500 to-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect professionally',
      link: 'https://www.linkedin.com/in/roosso-p-71b759279/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/ROOSSOp2452',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Download,
      title: 'Resume',
      value: 'Download my resume',
      link: 'https://drive.google.com/uc?export=download&id=1aF0S7vNqv9EYQZagrxoSavhV4V9c3twD',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold">Send a Message</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.title === 'Location' ? '_blank' : '_self'}
                      rel={info.title === 'Location' ? 'noopener noreferrer' : ''}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
                    >
                      <div className={`bg-gradient-to-r ${info.color} w-10 h-10 rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {info.title}
                        </p>
                        <p className="text-gray-600 text-sm">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Connect Online</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
                    >
                      <div className={`bg-gradient-to-r ${social.color} w-10 h-10 rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {social.title}
                        </p>
                        <p className="text-gray-600 text-sm">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Availability</h3>
              </div>
              <p className="text-green-100 mb-4">
                Currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium">Open to new opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200 text-center">
          <div className="mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto mb-4"></div>
            <p className="text-gray-600 mb-2">
              Crafted with attention to detail and passion for excellence
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Roosso P. All rights reserved.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/roosso-p-71b759279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ROOSSOp2452"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:roossop24@gmail.com"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;