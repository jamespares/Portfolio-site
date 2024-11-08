import React, { useState } from 'react';
import { Menu, X, Mail, Link2 } from 'lucide-react';

const PortfolioSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Product Roadmap - Project A",
      description: "Led strategic planning and execution of a 12-month product roadmap, resulting in 40% user growth",
      tags: ["Product Strategy", "Agile", "Stakeholder Management"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Project Management Dashboard",
      description: "Designed and implemented a PM dashboard tracking 15 concurrent projects across 3 teams",
      tags: ["Project Tracking", "Team Leadership", "Resource Management"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Agile Transformation Initiative",
      description: "Spearheaded company-wide transition to Agile methodology, training 50+ team members",
      tags: ["Agile", "Change Management", "Training"],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Your Name</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-700">About</a>
              <a href="#projects" className="text-gray-700 hover:text-green-700">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-green-700">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-green-700">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-700">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-green-700">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-green-700">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Product & Project Manager
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-green-700">
              Passionate about delivering impactful products and leading high-performing teams
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
            <p className="text-gray-700 leading-relaxed">
              A results-driven Product and Project Manager with X years of experience in 
              technology companies. Specialized in Agile methodologies, stakeholder 
              management, and delivering complex projects on time and within budget. 
              Seeking remote opportunities to leverage my expertise in product strategy 
              and team leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:border-green-500 border-2 border-transparent transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Product Strategy & Roadmapping</li>
                <li>User Research & Analysis</li>
                <li>Market Research</li>
                <li>Product Analytics</li>
                <li>Feature Prioritization</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:border-green-500 border-2 border-transparent transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Agile/Scrum Methodologies</li>
                <li>Resource Management</li>
                <li>Risk Management</li>
                <li>Budget Planning</li>
                <li>Timeline Management</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:border-green-500 border-2 border-transparent transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Team Leadership</li>
                <li>Stakeholder Management</li>
                <li>Cross-functional Collaboration</li>
                <li>Strategic Planning</li>
                <li>Change Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="flex items-center text-gray-700 hover:text-green-700 transition-colors duration-300">
              <Mail className="w-6 h-6 mr-2" />
              <span>Email</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-green-700 transition-colors duration-300">
              <Link2 className="w-6 h-6 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-green-700 transition-colors duration-300">
              <Link2 className="w-6 h-6 mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioSite;