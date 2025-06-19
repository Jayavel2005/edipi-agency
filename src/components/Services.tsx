
import { Monitor, Smartphone, Palette, Zap, Search, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'E-commerce Platforms', 'CMS Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality for maximum impact.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Zap,
      title: 'Brand Identity',
      description: 'Comprehensive brand identity solutions that help your business stand out in the digital landscape.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Digital Assets']
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Data-driven digital marketing strategies to boost your online presence and drive conversions.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics']
    },
    {
      icon: BarChart,
      title: 'Consulting',
      description: 'Strategic consulting services to help you navigate the digital transformation journey.',
      features: ['Digital Strategy', 'Technology Audit', 'Growth Planning', 'Process Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 px-6 sm:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we provide comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">
            Ready to transform your digital presence?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
