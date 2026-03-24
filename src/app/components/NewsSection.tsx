import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
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
        staggerChildren: 0.15
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-24 relative overflow-hidden" id="news">
      {/* Decorative colored blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-red-100 opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-50 opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-base font-bold text-orange-600 tracking-wider uppercase bg-orange-100 inline-block px-3 py-1 rounded-full">{t.news.sub}</h2>
            <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              {t.news.title}
            </p>
          </div>
          {limit < t.news.items.length && (
            <button 
              onClick={() => navigate('/news')}
              className="hidden sm:flex items-center text-orange-600 font-bold hover:text-red-600 transition-colors group"
            >
              {t.news.viewAll} <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayNews.map((item) => (
            <motion.div variants={itemAnim} key={item.id} className="flex flex-col bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 overflow-hidden hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex-shrink-0 relative overflow-hidden">
                <Link to={`/news/${item.id}`}>
                  <img className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src={item.image} alt={item.title} />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-orange-700 shadow-lg transform group-hover:scale-105 transition-transform">
                  {item.category}
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between relative bg-white">
                {/* Decorative top border on the card body */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex-1">
                  <div className="flex items-center text-sm font-semibold text-orange-600 mb-4 bg-orange-50 w-max px-3 py-1 rounded-md">
                    <Calendar className="flex-shrink-0 mr-2 h-4 w-4" />
                    <time>{item.date}</time>
                  </div>
                  <Link to={`/news/${item.id}`} className="block mt-2">
                    <p className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug">{item.title}</p>
                    <p className="mt-4 text-base text-gray-600 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-8 flex items-center pt-5 border-t border-gray-100">
                  <Link to={`/news/${item.id}`} className="text-sm font-bold text-orange-600 group-hover:text-red-600 flex items-center transition-colors uppercase tracking-wider">
                    {t.news.readMore} <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {limit < t.news.items.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center sm:hidden"
          >
            <button 
              onClick={() => navigate('/news')}
              className="w-full inline-flex justify-center items-center px-6 py-4 border-2 border-orange-600 text-base font-bold rounded-xl text-orange-600 bg-white hover:bg-orange-50 transition-colors"
            >
              {t.news.viewAll}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}