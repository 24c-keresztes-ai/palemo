import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-red-700 border-t border-red-800" id="contacts">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 xl:col-span-1"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-red-700 font-bold text-lg">CP</span>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">Comune<span className="text-red-300">Palermo</span></span>
            </div>
            <p className="text-red-100 text-base font-medium leading-relaxed">
              {t.footer.about}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-red-100 hover:text-red-700 bg-red-800/50 p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-100 hover:text-red-700 bg-red-800/50 p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-100 hover:text-red-700 bg-red-800/50 p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-100 hover:text-red-700 bg-red-800/50 p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-sm font-bold text-white tracking-wider uppercase">{t.footer.quickLinks}</h3>
                <ul className="mt-6 space-y-4">
                  <li><a href="#" className="text-base text-red-200 hover:text-white hover:translate-x-1 inline-block transition-all">{t.nav.home}</a></li>
                  <li><a href="#history" className="text-base text-red-200 hover:text-white hover:translate-x-1 inline-block transition-all">{t.nav.history}</a></li>
                  <li><a href="/news" className="text-base text-red-200 hover:text-white hover:translate-x-1 inline-block transition-all">{t.nav.news}</a></li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 md:mt-0"
              >
                <h3 className="text-sm font-bold text-white tracking-wider uppercase">{t.footer.servicesTitle}</h3>
                <ul className="mt-6 space-y-4">
                  <li><a href="/services" className="text-base text-red-200 hover:text-white hover:translate-x-1 inline-block transition-all">{t.nav.services}</a></li>
                  <li><a href="#" className="text-base text-red-200 hover:text-white hover:translate-x-1 inline-block transition-all">Tax Portal</a></li>
                  <li><a href="#" className="text-base text-red-200 hover:text-white hover:translate-x-1 inline-block transition-all">Permits</a></li>
                </ul>
              </motion.div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-sm font-bold text-white tracking-wider uppercase">{t.footer.contactUs}</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex text-base text-red-200 items-start hover:text-white transition-colors">
                    <MapPin className="h-6 w-6 text-red-300 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Palermo</span>
                  </li>
                  <li className="flex text-base text-red-200 items-center hover:text-white transition-colors">
                    <Phone className="h-6 w-6 text-red-300 mr-3 flex-shrink-0" />
                    <span>+39 091 740 1111</span>
                  </li>
                  <li className="flex text-base text-red-200 items-center hover:text-white transition-colors">
                    <Mail className="h-6 w-6 text-red-300 mr-3 flex-shrink-0" />
                    <span>info@comune.palermo.it</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 border-t border-red-600/50 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-base text-red-200 xl:text-center">
            &copy; 2026 {t.footer.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-red-200 hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-sm text-red-200 hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="text-sm text-red-200 hover:text-white transition-colors">{t.footer.accessibility}</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
