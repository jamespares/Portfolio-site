import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Link2, Sun, Moon } from 'lucide-react';
import { motion } from "framer-motion";
import GridPattern from '../components/GridPattern';
import Link from 'next/link';
import { Marquee } from '../components/Marquee';

const PortfolioSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's preferred color scheme and saved preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        // Default to light mode instead of checking system preferences
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const projects = [
    {
      id: "project-a",
      title: "Roam – AI-Powered Data Automation",
      description: "Led development of AI-powered data automation system, improving accuracy by 25% and reducing manual work by 85%",
      tags: ["Python", "AI/ML", "Data Pipeline", "DevOps"],
      image: "/images/roam.png"
    },
    {
      id: "project-b",
      title: "Roam – Internationalisation & SEO",
      description: "Led website internationalisation initiative resulting in 50% growth in international traffic and 30% increase in user engagement",
      tags: ["Next.js", "SEO", "Node.js", "i18n"],
      image: "/images/roam.png"
    },
    {
      id: "project-c",
      title: "London Borough of Islington – Community Research",
      description: "Led borough's largest community research initiative, redirecting £2M in resources and achieving 40% increase in community engagement",
      tags: ["Data Analytics", "Python", "Policy", "Research"],
      image: "/images/islington.png"
    },
    {
      id: "project-d",
      title: "London Borough of Islington – Youth Justice Service",
      description: "Led compliance overhaul resulting in 'Outstanding' HMIP rating (34/36) - best in London and third-highest nationally",
      tags: ["Compliance", "Change Management", "Innovation", "Service Design"],
      image: "/images/islington.png"
    },
    {
      id: "project-e",
      title: "Roam - Visa Application Flow",
      description: "Built end-to-end visa application flow using TypeScript, Next.js, React, Supabase, and Stripe API, improving conversion rates",
      tags: ["TypeScript", "Next.js", "Supabase", "Stripe"],
      image: "/images/roam.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50 border-b-2 border-sky-500 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">James Pares</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  About
                </span>
              </Link>
              <Link href="#projects">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Projects
                </span>
              </Link>
              <Link href="#skills">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Skills
                </span>
              </Link>
              <Link href="/cv">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  CV
                </span>
              </Link>
              <Link href="#contact">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Contact
                </span>
              </Link>
              
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
            </div>

            {/* Mobile menu button and dark mode toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
              <Link href="#about">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  About
                </span>
              </Link>
              <Link href="#projects">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Projects
                </span>
              </Link>
              <Link href="#skills">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Skills
                </span>
              </Link>
              <Link href="/cv">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  CV
                </span>
              </Link>
              <Link href="#contact">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to the top of the page to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
          <GridPattern className="dark:opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Need someone that gets stuff done?
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                You're in the right place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-40 bg-gray-50 dark:bg-gray-900 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src="/images/profile.png"
                  alt="James Pares"
                  className="w-56 h-56 rounded-full shadow-lg border-4 border-white dark:border-gray-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi. My name is James. I am an early-career professional with two years of experience managing projects in city government 
                  and one year leading product management at a technology start-up.  
                  I have experience and certification in both agile and waterfall project management methodologies. I am also experienced in web development, software development,
                  data analysis, and data visualisation. I have led teams to deliver features on both the front and back end of 
                  complex digital products. This includes translation tools, high-volume webscraping, 
                  data processing, data pipeline construction, and API and SDK integrations. I have also led on both 
                  market and user research workstreams, as well as marketing strategies covering SEO, social media, and content marketing.
                  In addition to this technical experience, I have spent a short period of time working at a leading international law firm, where I 
                  worked on high-value deals and developed my understanding of corporate finance and legal processes, particularly around Venture Capital and Private Equity.
                  I am also a fluent French speaker. I am currently seeking opportunities at start-ups and scale-ups in the technology sector. Please see 
                  below for some of my work.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 dark:bg-gray-900">
          <div className="max-w-[95vw] mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 px-4">Projects</h2>
            
            <Marquee className="py-4" pauseOnHover repeat={2}>
              {projects.map((project) => (
                <Link 
                  href={`/projects/${project.id}`} 
                  key={project.id}
                  className="w-[320px] mx-5 flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full"
                  >
                    <div className="bg-white p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-36 object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Product Management</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Strategy & Discovery:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Product-Market Fit Analysis</li>
                      <li>• User Personas & Journey Mapping</li>
                      <li>• Competitive Analysis</li>
                    </ul>
                  </li>
                  <li>Design & Development:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Figma </li>
                      <li>• Wireframing & Prototyping</li>
                      <li>• A/B Testing </li>
                    </ul>
                  </li>
                  <li>Product Analytics:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Google Analytics </li>
                      <li>• Amplitude & Heap</li>
                      <li>• Feature Flagging (LaunchDarkly)</li>
                    </ul>
                  </li>
                  <li>Documentation & Planning:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Product Requirements (PRDs)</li>
                      <li>• Miro & FigJam</li>
                      <li>• Google Docs & Sheets</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Management</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Methodologies & Frameworks:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Agile (Scrum & Kanban)</li>
                      <li>• Waterfall & Hybrid</li>
                      <li>• PRINCE2 Practitioner </li>
                    </ul>
                  </li>
                  <li>Project Planning Tools:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Jira </li>
                      <li>• MS Project & Gantt Charts</li>
                      <li>• Mermaid Diagramming</li>
                    </ul>
                  </li>
                  <li>Collaboration Tools:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Trello </li>
                      <li>• Google Workspace </li>
                      <li>• Slack, MS Teams, WhatsApp </li>
                    </ul>
                  </li>
                  <li>Documentation & Tracking:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Risk Registers & RAID Logs</li>
                      <li>• Stakeholder Mapping </li>
                      <li>• Budget Tracking </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Analysis</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Python Data Processing:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Pandas & NumPy</li>
                      <li>• SciPy & Statsmodels</li>
                    </ul>
                  </li>
                  <li>Machine Learning:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Scikit-learn (Classification, Regression)</li>
                      <li>• Supervised Learning (Random Forest, XGBoost)</li>
                      <li>• Unsupervised Learning (K-means)</li>
                    </ul>
                  </li>
                  <li>Data Visualisation:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Matplotlib & Seaborn</li>
                      <li>• Plotly & Dash</li>
                      <li>• Tableau & Power BI</li>
                    </ul>
                  </li>
                  <li>Business Tools:
                    <ul className="ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Excel (Advanced Functions, Pivot Tables)</li>
                      <li>• Google Sheets </li>
                      <li>• SQL & Database Management</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Get in Touch
            </motion.h2>
            <div className="flex justify-center space-x-8">
              {/* Gmail Link */}
              <motion.a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=james@roamfreely.io"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg p-2"
              >
                <Mail className="w-6 h-6 mr-2" />
                <span>Gmail</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a 
                href="https://www.linkedin.com/in/james-p-ba7653207/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg p-2"
              >
                <Link2 className="w-6 h-6 mr-2" />
                <span>LinkedIn</span>
              </motion.a>

              {/* GitHub */}
              <motion.a 
                href="https://github.com/jamespares"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg p-2"
              >
                <Link2 className="w-6 h-6 mr-2" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} James Pares. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioSite;