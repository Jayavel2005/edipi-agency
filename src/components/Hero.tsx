
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Digital Excellence</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft extraordinary digital experiences that elevate brands and drive results. 
            From cutting-edge web development to innovative design solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              size="lg"
              className="border-2 border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400 bg-transparent hover:bg-slate-800/50 px-8 py-4 rounded-full transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
