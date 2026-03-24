import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#F28C28] selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}