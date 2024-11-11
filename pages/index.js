import React, { useState } from 'react';
import { Menu, X, Mail, Link2 } from 'lucide-react';
import { motion } from "framer-motion";
import GridPattern from '../components/GridPattern';
import { Marquee } from '../components/Marquee';
import Link from 'next/link';

const PortfolioSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: "project-a",
      title: "ROAM – AI-Powered Data Automation",
      description: "Led development of AI-powered data automation system, improving accuracy by 25% and reducing manual work by 85%",
      tags: ["Python", "AI/ML", "Data Pipeline", "DevOps"],
      image: "/images/roam-architecture.png"
    },
    {
      id: "project-b",
      title: "ROAM – Internationalization & SEO",
      description: "Led website internationalization initiative resulting in 50% growth in international traffic and 30% increase in user engagement",
      tags: ["Next.js", "SEO", "Node.js", "i18n"],
      image: "/images/roam-lang-dropdown.png"
    },
    {
      id: "project-c",
      title: "Agile Transformation Initiative",
      description: "Spearheaded company-wide transition to Agile methodology, training 50+ team members",
      tags: ["Agile", "Change Management", "Training"],
      image: "/api/placeholder/600/400"
    },
    {
      id: "project-d",
      title: "Digital Transformation Strategy",
      description: "Led end-to-end digital transformation initiative resulting in 45% cost reduction",
      tags: ["Digital Strategy", "Innovation", "Process Optimization"],
      image: "/api/placeholder/600/400"
    },
    {
      id: "project-e",
      title: "Customer Experience Optimization",
      description: "Enhanced customer experience resulting in 50% improved retention rates",
      tags: ["CX Design", "Analytics", "Service Design"],
      image: "/api/placeholder/600/400"
    },
    {
      id: "project-f",
      title: "Data Analytics Platform",
      description: "Built enterprise analytics platform driving 40% faster decision-making",
      tags: ["Data Analytics", "BI", "Automation"],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b-2 border-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">James Pares</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#about"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-gray-700 hover:text-sky-500"
              >
                About
              </motion.a>
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-gray-700 hover:text-sky-500"
              >
                Projects
              </motion.a>
              <motion.a 
                href="#skills"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-gray-700 hover:text-sky-500"
              >
                Skills
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-gray-700 hover:text-sky-500"
              >
                Contact
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
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
              <motion.a 
                href="#about"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="block px-3 py-2 text-gray-700 hover:text-sky-500"
              >
                About
              </motion.a>
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="block px-3 py-2 text-gray-700 hover:text-sky-500"
              >
                Projects
              </motion.a>
              <motion.a 
                href="#skills"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="block px-3 py-2 text-gray-700 hover:text-sky-500"
              >
                Skills
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="block px-3 py-2 text-gray-700 hover:text-sky-500"
              >
                Contact
              </motion.a>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to the top of the page to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
          <GridPattern />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Project Manager
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Passionate about building great products and getting stuff done.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <img
                  src="/images/profile.png"
                  alt="James Pares"
                  className="w-40 h-40 rounded-full mx-auto shadow-lg border-4 border-white"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              About Me
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sky-600"
            >
              <p className="text-gray-700 leading-relaxed">
                I am an early-career project manager with two years of experience managing high-impact projects in city government 
                and one year leading product management at a technology start-up. I have experience and certification
                in both agile and waterfall methodologies. I am also skilled with web development, software development,
                data analysis, and data visualization. I have led teams to deliver features on both the front and back end of 
                complex digital products. This includes translation tools, high-volume webscraping, 
                data processing, data pipeline construction, and API and SDK integrations. I have also led on both 
                market and user research workstreams, as well as marketing strategies covering SEO, social media, and content marketing.
                I am currently seeking remote opportunities to continue delivering high-impact projects in the technology sector.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              Featured Projects
            </motion.h2>
            <Marquee 
              className="py-4" 
              pauseOnHover 
              reverse={false}
            >
              {projects.map((project, index) => (
                <Link href={`/projects/${project.id}`} key={index}>
                  <motion.div 
                    className="w-[350px] mx-4"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-sky-500">
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
                              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-sky-500"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Product Strategy & Roadmapping</li>
                  <li>User Research & Analysis</li>
                  <li>Market Research</li>
                  <li>Product Analytics</li>
                  <li>Feature Prioritization</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-sky-500"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Agile/Scrum Methodologies</li>
                  <li>Resource Management</li>
                  <li>Risk Management</li>
                  <li>Budget Planning</li>
                  <li>Timeline Management</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-sky-500"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Team Leadership</li>
                  <li>Stakeholder Management</li>
                  <li>Cross-functional Collaboration</li>
                  <li>Strategic Planning</li>
                  <li>Change Management</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              Get in Touch
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center space-x-8"
            >
              <motion.a 
                href="#"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center text-gray-700 hover:text-sky-600 rounded-lg p-2"
              >
                <Mail className="w-6 h-6 mr-2" />
                <span>Email</span>
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center text-gray-700 hover:text-sky-600 rounded-lg p-2"
              >
                <Link2 className="w-6 h-6 mr-2" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center text-gray-700 hover:text-sky-600 rounded-lg p-2"
              >
                <Link2 className="w-6 h-6 mr-2" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} James Pares. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioSite;