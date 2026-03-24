import React from 'react';
import { Hero } from '../components/Hero';
import { HistorySection } from '../components/HistorySection';
import { NewsSection } from '../components/NewsSection';
import { ServicesSection } from '../components/ServicesSection';

export function Home() {
  return (
    <>
      <Hero />
      <NewsSection limit={3} />
      <HistorySection />
      <ServicesSection limit={8} />
    </>
  );
}
