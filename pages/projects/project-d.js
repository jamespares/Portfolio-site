import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectD = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Digital Transformation Strategy</h1>
          <img 
            src="/api/placeholder/1200/600" 
            alt="Digital Transformation"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <h2>Project Scope</h2>
            <p>Developed and executed a comprehensive digital transformation strategy for a traditional business, modernizing operations and customer experience.</p>
            
            <h2>Key Initiatives</h2>
            <ul>
              <li>Cloud infrastructure migration</li>
              <li>Customer portal development</li>
              <li>Digital workflow automation</li>
              <li>Data analytics implementation</li>
            </ul>

            <h2>Outcomes</h2>
            <ul>
              <li>45% reduction in operational costs</li>
              <li>60% improvement in customer satisfaction</li>
              <li>3x increase in digital engagement</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectD;
