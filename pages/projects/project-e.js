import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectE = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Customer Experience Optimization</h1>
          <img 
            src="/api/placeholder/1200/600" 
            alt="Customer Experience"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>Led a cross-functional initiative to enhance customer experience across all touchpoints, focusing on personalization and engagement.</p>
            
            <h2>Implementation</h2>
            <ul>
              <li>Customer journey mapping</li>
              <li>Personalization engine development</li>
              <li>Feedback loop implementation</li>
              <li>Service design optimization</li>
            </ul>

            <h2>Impact</h2>
            <ul>
              <li>50% increase in customer retention</li>
              <li>35% improvement in NPS score</li>
              <li>25% reduction in support tickets</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectE;
