import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import GreetingPreloader from './components/GreetingPreloader';
import Hero from './sections/Hero';
import Narrative from './sections/Narrative';
import PathScroll from './components/PathScroll';
import Marquee from './sections/Marquee';
import Work from './sections/Work';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handlePreloaderDone = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    document.documentElement.dataset.theme = saved === 'light' ? 'light' : 'dark';
  }, []);

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {!loaded ? (
          <GreetingPreloader key="loader" onDone={handlePreloaderDone} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Nav />
            <main>
              <Hero />
              <About />
              <Narrative />
              <PathScroll />
              <Skills />
              <Marquee />
              <Work />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
