
import { Monitor, Smartphone, Palette, Zap, Search, BarChart, Video, Image } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'E-commerce Platforms', 'CMS Integration'],
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization'],
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services that bring your stories to life with cinematic quality and engaging storytelling.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Mixing', 'Social Media Content'],
      gradient: 'from-red-500 to-orange-500',
      delay: 0.2
    },
    {
      icon: Image,
      title: 'Photoshop & Design',
      description: 'Expert photo manipulation and graphic design services to create stunning visuals that captivate your audience.',
      features: ['Photo Retouching', 'Digital Art', 'Logo Creation', 'Print Design'],
      gradient: 'from-green-500 to-teal-500',
      delay: 0.3
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality for maximum impact.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.4
    },
    {
      icon: Zap,
      title: 'Brand Identity',
      description: 'Comprehensive brand identity solutions that help your business stand out in the digital landscape.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Digital Assets'],
      gradient: 'from-yellow-500 to-orange-500',
      delay: 0.5
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Data-driven digital marketing strategies to boost your online presence and drive conversions.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.6
    },
    {
      icon: BarChart,
      title: 'Consulting',
      description: 'Strategic consulting services to help you navigate the digital transformation journey.',
      features: ['Digital Strategy', 'Technology Audit', 'Growth Planning', 'Process Optimization'],
      gradient: 'from-cyan-500 to-blue-500',
      delay: 0.7
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-600/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-pink-500/5 to-cyan-400/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            From concept to launch, we provide comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer backdrop-blur-sm h-full">
                <CardHeader className="pb-3 sm:pb-4">
                  <motion.div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <motion.ul 
                    className="space-y-2 sm:space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <motion.div 
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 sm:mr-3`}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2
                          }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA with animations */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-slate-300 mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed">
              Ready to transform your digital presence with cutting-edge solutions?
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full shadow-lg hover:shadow-2xl text-sm sm:text-base lg:text-lg group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10 flex items-center">
                Let's Get Started
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
