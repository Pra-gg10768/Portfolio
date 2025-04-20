import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeToggle from '../UI/ThemeToggle';
import { ThemeProvider } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="pt-16">{children}</main>
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;