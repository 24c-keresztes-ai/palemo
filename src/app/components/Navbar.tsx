import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.news, path: '/news' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.history, path: '/history' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-[#F28C28] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight hidden sm:block">
                Comune<span className="text-[#F28C28]">Palermo</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `font-medium transition-colors duration-200 border-b-2 border-transparent hover:text-[#F28C28] ${
                    isActive ? "text-[#F28C28] border-[#F28C28]" : "text-gray-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `font-medium transition-colors duration-200 border-b-2 border-transparent hover:text-[#F28C28] ${
                  isActive ? "text-[#F28C28] border-[#F28C28]" : "text-gray-600"
                }`
              }
            >
              {t.nav.contacts}
            </NavLink>

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:border-[#F28C28] hover:text-[#F28C28] font-medium focus:outline-none transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{lang}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {langDropdown && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-lg py-1 border border-gray-100 focus:outline-none">
                  <button
                    onClick={() => { setLang('EN'); setLangDropdown(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-orange-50 ${lang === 'EN' ? 'text-[#F28C28] font-semibold' : 'text-gray-700'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLang('IT'); setLangDropdown(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-orange-50 ${lang === 'IT' ? 'text-[#F28C28] font-semibold' : 'text-gray-700'}`}
                  >
                    Italiano
                  </button>
                  <button
                    onClick={() => { setLang('HU'); setLangDropdown(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-orange-50 ${lang === 'HU' ? 'text-[#F28C28] font-semibold' : 'text-gray-700'}`}
                  >
                    Magyar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6 text-[#F28C28]" /> : <Menu className="block h-6 w-6 text-gray-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive ? "text-[#F28C28] bg-orange-50" : "text-gray-700 hover:text-[#F28C28] hover:bg-orange-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive ? "text-[#F28C28] bg-orange-50" : "text-gray-700 hover:text-[#F28C28] hover:bg-orange-50"
                }`
              }
            >
              {t.nav.contacts}
            </NavLink>
            
            <div className="border-t border-gray-100 mt-4 pt-4 px-3">
              <p className="text-sm font-medium text-gray-500 mb-3">Language / Lingua / Nyelv</p>
              <div className="flex gap-4">
                <button
                  onClick={() => { setLang('EN'); setIsOpen(false); }}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium border ${lang === 'EN' ? 'border-[#F28C28] bg-[#F28C28] text-white' : 'border-gray-200 bg-white text-gray-700'}`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLang('IT'); setIsOpen(false); }}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium border ${lang === 'IT' ? 'border-[#F28C28] bg-[#F28C28] text-white' : 'border-gray-200 bg-white text-gray-700'}`}
                >
                  Italiano
                </button>
                <button
                  onClick={() => { setLang('HU'); setIsOpen(false); }}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium border ${lang === 'HU' ? 'border-[#F28C28] bg-[#F28C28] text-white' : 'border-gray-200 bg-white text-gray-700'}`}
                >
                  Magyar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}