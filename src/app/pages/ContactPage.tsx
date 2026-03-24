import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-8 pb-16 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYyYzAgMi0yIDQtMiA0cy0yLTItMi00di0yem0wLTMwYzAtMiAyLTQgMi00czIgMiAyIDR2MmMwIDItMiA0LTIgNHMtMi0yLTItNFY0em0tMiAyOGMwLTIgMi00IDItNHMyIDIgMiA0djJjMCAyLTIgNC0yIDRzLTItMi0yLTR2LTJ6bTAtMzBjMC0yIDItNCAyLTRzMiAyIDIgNHYyYzAgMi0yIDQtMiA0cy0yLTItMi00VjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">{t.contact.title}</h1>
            <p className="text-xl text-orange-50 max-w-2xl mx-auto font-light leading-relaxed">
              {t.contact.description}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                {t.contact.subtitle}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t.contact.sections.address}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.contact.info.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t.contact.sections.phoneTitle}</h3>
                  <p className="text-gray-600">{t.contact.info.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t.contact.sections.emailTitle}</h3>
                  <p className="text-gray-600 break-all">{t.contact.info.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl shadow-xl p-8 text-white hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t.contact.sections.hours}</h3>
                  <p className="text-orange-50">{t.contact.info.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
