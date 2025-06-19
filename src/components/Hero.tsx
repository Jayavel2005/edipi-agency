
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition({ 
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="block text-white mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digital Excellence
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Redefined
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We craft extraordinary digital experiences that elevate brands and drive results. 
            From cutting-edge web development to innovative design solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start a Project
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToPortfolio}
                variant="outline"
                size="lg"
                className="border-2 border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400 bg-transparent hover:bg-slate-800/50 px-8 py-4 rounded-full transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="mr-2 h-5 w-5" />
                </motion.div>
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
