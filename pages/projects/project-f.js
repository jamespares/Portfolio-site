import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectF = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Analytics Platform</h1>
          <img 
            src="/api/placeholder/1200/600" 
            alt="Data Analytics Platform"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <h2>Project Goal</h2>
            <p>Designed and implemented a comprehensive data analytics platform to drive data-informed decision making across the organization.</p>
            
            <h2>Key Features</h2>
            <ul>
              <li>Real-time data visualization</li>
              <li>Predictive analytics modeling</li>
              <li>Automated reporting systems</li>
              <li>Custom dashboard creation</li>
            </ul>

            <h2>Business Impact</h2>
            <ul>
              <li>40% faster decision-making process</li>
              <li>55% improvement in forecast accuracy</li>
              <li>30% reduction in operational costs</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectF;
