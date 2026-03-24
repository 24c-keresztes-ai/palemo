import React from 'react';
import { Link, useNavigate } from 'react-router';
import { FileText, Map, Bus, Trash2, Building, HelpCircle, Phone, Stethoscope, Briefcase, GraduationCap, Leaf, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  FileText, Map, Bus, Trash2, Building, HelpCircle, Phone, Stethoscope, Briefcase, GraduationCap, Leaf, Shield
};

export function ServicesSection({ limit = 8 }: { limit?: number }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const displayServices = t.services.items.slice(0, limit);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/30 py-16 sm:py-24 relative overflow-hidden" id="services">
      {/* Dynamic Background shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-base font-bold text-orange-600 tracking-widest uppercase bg-orange-100 inline-block px-4 py-1.5 rounded-full">{t.services.sub}</h2>
          <p className="mt-6 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            {t.services.title}
          </p>
          <p className="mt-5 max-w-2xl text-xl text-slate-600 mx-auto font-medium leading-relaxed">
            {t.services.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 lg:gap-8">
          {displayServices.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={idx}
                className="relative group bg-white/80 backdrop-blur-sm p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-[2rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.2)] hover:border-orange-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:bg-white"
              >
                <div className="flex flex-col items-center text-center">
                  <span className={`inline-flex rounded-2xl p-4 ring-8 ring-white/50 shadow-md ${service.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className="h-8 w-8" aria-hidden="true" />}
                  </span>
                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                      <Link to={`/services/${service.id}`} className="focus:outline-none before:absolute before:inset-0">
                        {service.name}
                      </Link>
                    </h3>
                  </div>
                  {/* Small decorative line that expands on hover */}
                  <div className="w-8 h-1 bg-orange-200 mt-4 rounded-full group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {limit < t.services.items.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex justify-center items-center px-10 py-4 border-2 border-orange-600 shadow-lg shadow-orange-600/20 text-lg font-bold rounded-2xl text-orange-600 bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1"
            >
              {t.services.viewAll}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}