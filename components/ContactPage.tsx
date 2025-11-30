import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Twitter, Send, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import Navbar from './Navbar';
import Footer from './Footer';
import contactImageSrc from '/assets/nadjaeeg.png';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    
    // Construct mailto link
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  // Using the specific image provided by the user

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Me</h1>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
              Interested in collaborating, or have questions about my research? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
            {/* Left Side - Image & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-5/12 bg-academic-900 text-white relative p-8 md:p-12 flex flex-col"
            >
              <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              <div className="relative z-10 flex-grow">
                <div className="mb-8 rounded-xl overflow-hidden border-4 border-white/10 shadow-lg">
                    <img 
                      src={contactImageSrc} 
                      alt="Research Group Photo" 
                      className="w-full h-64 object-cover object-top"
                    />
                </div>

                <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Phone size={20} className="text-academic-200" />
                    </div>
                    <div>
                      <p className="text-sm text-academic-300 uppercase tracking-wider font-semibold">Phone</p>
                      <p className="text-lg">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-white/10 rounded-lg">
                      <Mail size={20} className="text-academic-200" />
                    </div>
                    <div>
                      <p className="text-sm text-academic-300 uppercase tracking-wider font-semibold">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg hover:text-academic-200 transition-colors">{PERSONAL_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-white/10 rounded-lg">
                      <Twitter size={20} className="text-academic-200" />
                    </div>
                    <div>
                      <p className="text-sm text-academic-300 uppercase tracking-wider font-semibold">Twitter</p>
                      <a href={PERSONAL_INFO.socials.twitter} className="text-lg hover:text-academic-200 transition-colors">{PERSONAL_INFO.socials.twitterHandle}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <blockquote className="font-serif italic text-lg text-white/90 mb-2">
                    "Creativity is contagious. Pass it on."
                  </blockquote>
                  <cite className="text-academic-300 text-sm not-italic">— Albert Einstein</cite>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-7/12 p-8 md:p-12 bg-white"
            >
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-academic-500 focus:ring-2 focus:ring-academic-200 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-academic-500 focus:ring-2 focus:ring-academic-200 outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-academic-500 focus:ring-2 focus:ring-academic-200 outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-academic-500 focus:ring-2 focus:ring-academic-200 outline-none transition-all"
                      placeholder="Research Collaboration"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-academic-500 focus:ring-2 focus:ring-academic-200 outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-academic-600 text-white rounded-lg font-bold text-lg hover:bg-academic-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">
                  This form will open your default email client to send the message.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;