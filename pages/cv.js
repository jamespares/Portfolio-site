import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="/images/CV.png"
            alt="James Pares CV"
            className="max-w-full shadow-lg rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CV; 