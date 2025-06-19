
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Biometrics', 'Redux'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Brand Identity System',
      description: 'Complete brand identity and design system for a tech startup.',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
      technologies: ['Figma', 'Adobe CC', 'Sketch', 'Principle'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for SaaS platform with real-time data visualization.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Health & Fitness App',
      description: 'Comprehensive health tracking app with AI-powered recommendations.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'TensorFlow', 'Firebase', 'HealthKit'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Restaurant Branding',
      description: 'Modern restaurant branding and digital menu system.',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      technologies: ['Illustrator', 'Photoshop', 'InDesign', 'XD'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 7,
      title: 'Corporate Video Campaign',
      description: 'Engaging corporate video series with motion graphics and professional editing.',
      category: 'multimedia',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      technologies: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Cinema 4D'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 8,
      title: 'Interactive 3D Experience',
      description: 'Immersive 3D web experience with interactive animations and sound design.',
      category: 'multimedia',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
      technologies: ['Three.js', 'Blender', 'WebGL', 'GSAP'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
    { id: 'multimedia', label: 'Multimedia Works' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-white border border-slate-700/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-slate-900/50 border-slate-700 overflow-hidden group hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors duration-200">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors duration-200">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View more CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-white border border-slate-700/50 transition-all duration-300 font-medium">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
