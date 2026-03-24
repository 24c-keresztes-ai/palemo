import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-900 min-h-[85vh] flex items-center justify-center overflow-hidden" id="home">
      {/* Big Hero Image Background */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1551279076-6887dee32c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5vcmFtaWMlMjBjaXR5JTIwc2t5bGluZSUyMGRheXxlbnwxfHx8fDE3NzQzMzk1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Panoramic city skyline day"
        />
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-red-900/70 to-rose-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center text-white bg-white/10 backdrop-blur-md rounded-full p-1 pr-3 sm:text-base lg:text-sm xl:text-base mb-8 border border-white/20 shadow-[0_0_20px_rgba(249,115,22,0.6)]"
          >
            <span className="px-3 py-1 text-white text-xs font-bold leading-5 uppercase tracking-wide bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-inner">
              {t.hero.update}
            </span>
            <span className="ml-4 text-sm font-medium">{t.hero.newServices}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-xl"
          >
            <span className="block mb-2">{t.hero.welcome}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-rose-500 pb-2">{t.hero.portal}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 text-lg text-orange-50 sm:mt-5 sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl drop-shadow-md"
          >
            {t.hero.desc}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.7)] text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-500 transform hover:-translate-y-1"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
            <button 
              onClick={() => navigate('/news')}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-300/50 text-lg font-bold rounded-xl text-white bg-orange-900/40 backdrop-blur-sm hover:bg-orange-800/60 hover:border-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300"
            >
              {t.nav.news}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}