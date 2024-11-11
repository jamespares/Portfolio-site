import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectB = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Project Management Dashboard</h1>
          <img 
            src="/api/placeholder/1200/600" 
            alt="Project Management Dashboard"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>Designed and implemented a comprehensive project management dashboard that revolutionized how teams track and manage their projects.</p>
            
            <h2>Key Features</h2>
            <ul>
              <li>Real-time project status tracking</li>
              <li>Resource allocation visualization</li>
              <li>Automated progress reporting</li>
              <li>Team capacity planning</li>
            </ul>

            <h2>Impact</h2>
            <p>The dashboard resulted in:</p>
            <ul>
              <li>30% reduction in project delays</li>
              <li>25% improvement in resource utilization</li>
              <li>40% decrease in time spent on reporting</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectB;
