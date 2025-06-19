
import { Monitor, Smartphone, Palette, Zap, Search, BarChart, Video, Image } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'E-commerce Platforms', 'CMS Integration'],
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization'],
      gradient: 'from-purple-500 to-pink-500',
      delay: '100ms'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services that bring your stories to life with cinematic quality and engaging storytelling.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Mixing', 'Social Media Content'],
      gradient: 'from-red-500 to-orange-500',
      delay: '200ms'
    },
    {
      icon: Image,
      title: 'Photoshop & Design',
      description: 'Expert photo manipulation and graphic design services to create stunning visuals that captivate your audience.',
      features: ['Photo Retouching', 'Digital Art', 'Logo Creation', 'Print Design'],
      gradient: 'from-green-500 to-teal-500',
      delay: '300ms'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality for maximum impact.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      gradient: 'from-indigo-500 to-purple-500',
      delay: '400ms'
    },
    {
      icon: Zap,
      title: 'Brand Identity',
      description: 'Comprehensive brand identity solutions that help your business stand out in the digital landscape.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Digital Assets'],
      gradient: 'from-yellow-500 to-orange-500',
      delay: '500ms'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Data-driven digital marketing strategies to boost your online presence and drive conversions.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
      gradient: 'from-pink-500 to-rose-500',
      delay: '600ms'
    },
    {
      icon: BarChart,
      title: 'Consulting',
      description: 'Strategic consulting services to help you navigate the digital transformation journey.',
      features: ['Digital Strategy', 'Technology Audit', 'Growth Planning', 'Process Optimization'],
      gradient: 'from-cyan-500 to-blue-500',
      delay: '700ms'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-600/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-pink-500/5 to-cyan-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              From concept to launch, we provide comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer backdrop-blur-sm animate-fade-in transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: service.delay }}
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                      style={{ animationDelay: `${parseInt(service.delay) + (featureIndex * 50)}ms` }}
                    >
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 sm:mr-3 animate-pulse`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA with animations */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-slate-300 mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed">
              Ready to transform your digital presence with cutting-edge solutions?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-sm sm:text-base lg:text-lg group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Let's Get Started
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
