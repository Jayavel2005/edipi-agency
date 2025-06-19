
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 transform-origin-0 z-50"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      {/* Sticky CTA Buttons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Start Project
        </motion.button>
        
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              rotate: -90
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </div>

      {/* Background decoration with enhanced animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default Index;
