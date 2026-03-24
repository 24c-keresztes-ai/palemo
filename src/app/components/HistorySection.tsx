import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function HistorySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 py-16 sm:py-32 border-y border-orange-100 relative overflow-hidden" id="history">
      {/* Decor */}
      <div className="absolute -left-40 top-20 w-80 h-80 bg-orange-300/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-20 bottom-10 w-96 h-96 bg-red-300/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-base font-bold text-orange-600 tracking-widest uppercase bg-orange-100/80 inline-block px-4 py-1.5 rounded-full">{t.history.sub}</h2>
          <p className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            {t.history.title}
          </p>
          <p className="mt-5 max-w-2xl text-xl text-gray-700 mx-auto font-medium leading-relaxed">
            {t.history.desc}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-1.5 bg-gradient-to-b from-orange-300 via-orange-500 to-red-500 transform md:-translate-x-1/2 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"
          ></motion.div>
          
          <div className="space-y-16 relative">
            {t.history.timeline.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={index} 
                  className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-orange-500 rounded-full transform -translate-x-3.5 md:-translate-x-4 shadow-[0_0_20px_rgba(249,115,22,0.6)] z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
                  </div>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full pl-14 md:w-1/2 ${isEven ? 'md:pl-0 md:pr-14 text-left md:text-right' : 'md:pl-14 text-left'}`}>
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                      {/* Gradient hover background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{event.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}