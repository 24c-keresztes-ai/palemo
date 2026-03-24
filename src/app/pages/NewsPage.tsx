import React from 'react';
import { NewsSection } from '../components/NewsSection';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Newspaper, TrendingUp } from 'lucide-react';

export function NewsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pt-12 pb-20 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gradient-to-br from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon and Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl">
                  <Newspaper className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6"
            >
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-bold text-gray-700">Latest Updates</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-rose-600">
                City News
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Stay informed with the latest developments, events, and initiatives shaping our vibrant city.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* News Grid */}
      <div className="pb-20">
        <NewsSection limit={100} />
      </div>
    </div>
  );
}
