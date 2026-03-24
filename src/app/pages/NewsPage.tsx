import React from 'react';
import { NewsSection } from '../components/NewsSection';
import { useLanguage } from '../context/LanguageContext';

export function NewsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYyYzAgMi0yIDQtMiA0cy0yLTItMi00di0yem0wLTMwYzAtMiAyLTQgMi00czIgMiAyIDR2MmMwIDItMiA0LTIgNHMtMi0yLTItNFY0em0tMiAyOGMwLTIgMi00IDItNHMyIDIgMiA0djJjMCAyLTIgNC0yIDRzLTItMi0yLTR2LTJ6bTAtMzBjMC0yIDItNCAyLTRzMiAyIDIgNHYyYzAgMi0yIDQtMiA0cy0yLTItMi00VjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">{t.nav.news}</h1>
            <p className="text-xl text-orange-50 max-w-2xl mx-auto font-light leading-relaxed">
              Stay updated with everything happening in our vibrant city.
            </p>
          </div>
        </div>
      </div>
      <NewsSection limit={100} /> {/* Render all news */}
    </div>
  );
}