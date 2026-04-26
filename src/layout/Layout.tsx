import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BloodCanvas from '../components/BloodCanvas';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-deep-black selection:bg-horror-red relative">
      <div className="overlay-glow" />
      <BloodCanvas />
      
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
