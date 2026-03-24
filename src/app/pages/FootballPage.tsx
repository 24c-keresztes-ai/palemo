import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, MapPin, Users, Trophy, Star } from 'lucide-react';

export function FootballPage() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50">
      {/* Hero Section with Team Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603380530253-c7e4694869f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvb3RiYWxsJTIwc3RhZGl1bSUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzc0MzQzODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080')" }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          {/* Team Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6"
          >
            <img 
              src="https://tse1.mm.bing.net/th/id/OIP._YAgHIfL_zlwsHezuzMRAgHaGS?rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="Palermo FC Logo"
              className="h-32 w-32 object-contain drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg"
          >
            {t.football.title}
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl text-pink-100 font-semibold"
          >
            {t.football.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Quick Info Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-pink-600" />
              <h3 className="font-semibold text-gray-600">{t.football.founded}</h3>
            </div>
            <p className="text-3xl font-black text-gray-900">1900</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-orange-600" />
              <h3 className="font-semibold text-gray-600">{t.football.stadium}</h3>
            </div>
            <p className="text-xl font-black text-gray-900">Renzo Barbera</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-pink-600" />
              <h3 className="font-semibold text-gray-600">{t.football.capacity}</h3>
            </div>
            <p className="text-3xl font-black text-gray-900">36,349</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"></div>
              </div>
              <h3 className="font-semibold text-gray-600">{t.football.colors}</h3>
            </div>
            <p className="text-xl font-black text-gray-900">Rosanero</p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">{t.football.about.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.football.about.description}
            </p>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl border-2 border-pink-300">
              <Trophy className="w-8 h-8 text-pink-600 flex-shrink-0" />
              <p className="font-semibold text-gray-800">
                {t.football.currentSeason.league} - {t.football.currentSeason.description}
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1757031298215-5041017293ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMHBsYXllcnMlMjBjZWxlYnJhdGluZyUyMHRlYW18ZW58MXx8fHwxNzc0MzQzODQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Football celebration"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Stadium Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1603380530253-c7e4694869f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvb3RiYWxsJTIwc3RhZGl1bSUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzc0MzQzODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Stadium"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black mb-4">{t.football.stadiumInfo.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.football.stadiumInfo.description}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">{t.football.achievements.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.football.achievements.items.map((achievement: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-pink-500 to-orange-500 text-white p-6 rounded-2xl shadow-xl"
            >
              <Trophy className="w-10 h-10 mb-4" />
              <p className="font-semibold text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Club Legends Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-pink-50 to-orange-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">{t.football.legends.title}</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Legendary players who wore the Rosanero jersey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.football.legends.players.map((player: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all"
              >
                <div className="h-3 bg-gradient-to-r from-pink-500 to-black"></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">{player.name}</h3>
                      <p className="text-pink-600 font-semibold">{player.role}</p>
                    </div>
                    <Star className="w-6 h-6 text-orange-500 fill-current" />
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{player.years}</p>
                  <p className="text-gray-700 leading-relaxed">{player.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Action Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1760420919593-c1ae7509faaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBhY3Rpb24lMjBraWNrJTIwYmFsbHxlbnwxfHx8fDE3NzQzNDM4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-orange-600/90"></div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Forza Palermo!
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-pink-100 max-w-2xl"
          >
            Supporting our city's pride since 1900. Together we stand, united in pink and black.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
