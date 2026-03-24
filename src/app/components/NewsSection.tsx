import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function NewsSection({ limit = 3 }: { limit?: number }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const displayNews = t.news.items.slice(0, limit);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }
  };

  return (
    <section className="py-0" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {limit < t.news.items.length && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4"
          >
            <div>
              <h2 className="text-sm font-extrabold text-orange-600 tracking-widest uppercase mb-3">
                {t.news.sub}
              </h2>
              <p className="text-4xl font-black text-gray-900">
                {t.news.title}
              </p>
            </div>
            <button 
              onClick={() => navigate('/news')}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t.news.viewAll} 
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayNews.map((item: any, index: number) => (
            <motion.div 
              variants={itemAnim} 
              key={item.id} 
              className="group flex flex-col bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-orange-200 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative flex-shrink-0 overflow-hidden h-64">
                <Link to={`/news/${item.id}`}>
                  <img 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                    src={item.image} 
                    alt={item.title} 
                  />
                </Link>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg uppercase tracking-wide"
                  >
                    {item.category}
                  </motion.span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <Calendar className="w-3.5 h-3.5 text-orange-600" />
                  <time className="text-xs font-bold text-gray-700">{item.date}</time>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between relative">
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <div className="flex-1">
                  <Link to={`/news/${item.id}`} className="block">
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </Link>
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-5 border-t-2 border-gray-100 group-hover:border-orange-200 transition-colors">
                  <Link 
                    to={`/news/${item.id}`} 
                    className="inline-flex items-center gap-2 text-sm font-black text-orange-600 hover:text-red-600 transition-colors uppercase tracking-wider group/link"
                  >
                    <Clock className="w-4 h-4" />
                    {t.news.readMore}
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile View All Button */}
        {limit < t.news.items.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center md:hidden"
          >
            <button 
              onClick={() => navigate('/news')}
              className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
            >
              {t.news.viewAll}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
