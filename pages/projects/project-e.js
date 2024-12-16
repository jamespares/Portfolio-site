import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectE = () => {
  const images = [
    {
      src: "/images/roam-flow-1.png",
      alt: "Nationality selection interface",
      caption: "Making it easy for users to start their visa journey."
    },
    {
      src: "/images/roam-flow-3.png",
      alt: "Document management interface",
      caption: "Smart document storage that remembers your important files."
    },
    {
      src: "/images/roam-flow-5.png",
      alt: "Application summary view",
      caption: "Clear overview of what's needed and what's already done."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 border-b-2 border-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Simplifying Visa Applications
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Challenge</h2>
              <p>
                Applying for a visa is often a frustrating experience. Users have to upload the same 
                documents repeatedly, navigate confusing requirements, and worry about whether their 
                sensitive information is being handled securely. At Roam, we wanted to make this 
                process as smooth and secure as possible.
              </p>

              <div className="my-8">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {images[0].caption}
                </p>
              </div>

              <h2>The Solution</h2>

              <h3>Smart Document Management</h3>
              <p>
                We built a secure "document vault" that remembers your important files. Once you upload 
                a document like your passport or bank statement, you never need to upload it again – 
                it's safely stored and ready to use for your next application. The system even tells 
                you when documents are about to expire, so you're always prepared.
              </p>

              <div className="my-8">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {images[1].caption}
                </p>
              </div>

              <h3>Making it Simple and Secure</h3>
              <p>
                We designed the application process to be intuitive, guiding users step by step. The 
                system automatically checks which documents you need based on your nationality and 
                destination, and shows you what you already have stored. We also integrated secure 
                payment processing through Stripe, so users can confidently pay their visa fees.
              </p>

              <div className="my-8">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {images[2].caption}
                </p>
              </div>

              <h2>The Impact</h2>
              <p>
                The new system has made a real difference for our users:
              </p>
              <ul>
                <li>60% more people now complete their applications successfully</li>
                <li>Users save time by not having to upload the same documents repeatedly</li>
                <li>Support enquiries about document requirements have significantly decreased</li>
                <li>Users report feeling more confident about the security of their information</li>
              </ul>

              <h2>What I Learnt</h2>
              <p>
                This project taught me the importance of balancing user experience with security. 
                Whilst we wanted to make the process as simple as possible, we couldn't compromise 
                on protecting sensitive information. I learnt how to work with secure document 
                storage, handle user data responsibly, and create interfaces that guide users 
                through complex processes.
              </p>

              <h3>Key Skills Used</h3>
              <ul>
                <li>TypeScript and Next.js development</li>
                <li>Secure document management</li>
                <li>Payment integration with Stripe</li>
                <li>User experience design</li>
                <li>Data security and privacy</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectE;