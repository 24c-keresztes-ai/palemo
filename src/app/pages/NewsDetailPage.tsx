import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

export function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Find the news item by ID
  const newsItem = t.news.items.find(item => item.id.toString() === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">News article not found</h1>
          <button
            onClick={() => navigate('/news')}
            className="text-orange-600 hover:text-orange-700 font-bold"
          >
            ← Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/news')}
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-bold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.news.viewAll}
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] bg-gray-900"
      >
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
        
        {/* Category badge */}
        <div className="absolute top-8 left-8">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            {newsItem.category}
          </span>
        </div>
      </motion.div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-16">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
        >
          {/* Date */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center text-orange-600 font-bold">
              <Calendar className="w-5 h-5 mr-2" />
              <time>{newsItem.date}</time>
            </div>
            <button className="flex items-center text-gray-600 hover:text-orange-600 transition-colors font-medium">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {newsItem.title}
          </h1>

          {/* Excerpt/Lead */}
          <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8 pb-8 border-b border-gray-200">
            {newsItem.excerpt}
          </p>

          {/* Full article content - You can expand this with more content fields */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {newsItem.excerpt}
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              This comprehensive initiative represents a significant step forward in our city's commitment to modernization and improved service delivery to all residents. Community leaders and officials have worked together to ensure this project meets the highest standards of quality and accessibility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Highlights</h2>
            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 leading-relaxed flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Enhanced infrastructure and modern facilities designed for long-term sustainability</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Improved accessibility features ensuring equal access for all community members</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Integration of cutting-edge technology to streamline services and operations</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Strong community engagement throughout the planning and implementation phases</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Community Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The positive impact of this initiative is already being felt across our diverse neighborhoods. Residents have expressed appreciation for the thoughtful approach taken by city officials, and early feedback indicates strong community support for the project's goals and outcomes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              As we continue to move forward, the city remains committed to transparent communication and active engagement with all stakeholders. Regular updates will be provided through our official channels, and community input remains a vital part of our ongoing efforts.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mt-10">
              <p className="text-gray-800 font-medium italic">
                "This represents a new chapter in our city's development, one that prioritizes innovation, accessibility, and community well-being." - City Official
              </p>
            </div>
          </div>

          {/* Related actions */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Informed</h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/news')}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                More News Articles
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-all"
              >
                Explore Services
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
