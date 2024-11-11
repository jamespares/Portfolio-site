import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#projects" className="inline-flex items-center text-gray-600 hover:text-sky-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Agile Transformation Initiative</h1>
          <img 
            src="/api/placeholder/1200/600" 
            alt="Agile Transformation"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <h2>Challenge</h2>
            <p>Led a company-wide transformation from traditional waterfall methodology to Agile practices across multiple departments.</p>
            
            <h2>Approach</h2>
            <ul>
              <li>Developed comprehensive training programs</li>
              <li>Established Scrum teams and ceremonies</li>
              <li>Implemented Agile tools and metrics</li>
              <li>Created mentorship program for Agile champions</li>
            </ul>

            <h2>Results</h2>
            <ul>
              <li>50+ team members successfully trained in Agile methodologies</li>
              <li>35% faster time-to-market for new features</li>
              <li>40% increase in team satisfaction scores</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectC;
