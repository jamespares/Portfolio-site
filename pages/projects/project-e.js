import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectE = () => {
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
              Enhanced Visa Application Flow with Secure Document Management
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>Introduction</h2>
              <p>
                I led the development of an intuitive visa application platform that revolutionises how users manage their 
                applications and documents. A key innovation I introduced was the secure document storage system, ensuring 
                users never need to upload the same document twice. This significantly streamlined the application process 
                while maintaining the highest security standards.
              </p>

              <h2>Technical Implementation</h2>
              <h3>Core Technologies</h3>
              <ul>
                <li>Frontend: TypeScript, Next.js, and React for a responsive user interface</li>
                <li>Backend: Supabase for secure document storage and user management</li>
                <li>Payment Processing: Stripe API integration for secure transactions</li>
                <li>Security: End-to-end encryption for document storage and transmission</li>
              </ul>

              <h3>Document Management Features</h3>
              <ul>
                <li>Secure document vault for storing sensitive information</li>
                <li>Automatic document categorisation and validation</li>
                <li>Smart document reuse across multiple applications</li>
                <li>Automated expiry tracking and renewal notifications</li>
              </ul>

              <h2>Application Flow</h2>

              <h3>Step 1: Nationality Selection</h3>
              <p>
                Users begin their journey by selecting their nationality, which determines the available visa options 
                and document requirements.
              </p>
              <div className="my-8">
                <img
                  src="/images/roam-flow-1.png"
                  alt="Step 1: User selects their nationality"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Step 1: Intuitive nationality selection interface
                </p>
              </div>

              <h3>Step 2: Visa Type Selection</h3>
              <p>
                I implemented an intelligent visa type selector that filters options based on the user's nationality 
                and displays relevant document requirements.
              </p>
              <div className="my-8">
                <img
                  src="/images/roam-flow-2.png"
                  alt="Step 2: Visa type selection"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Step 2: Dynamic visa type selection with document requirements
                </p>
              </div>

              <h3>Step 3: Destination Selection</h3>
              <p>
                Users select their destination country, triggering our system to check for any previously stored 
                relevant documents in their secure vault.
              </p>
              <div className="my-8">
                <img
                  src="/images/roam-flow-3.png"
                  alt="Step 3: Destination country selection"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Step 3: Smart destination selection interface
                </p>
              </div>

              <h3>Step 4: Travel Date Selection</h3>
              <p>
                I developed an intelligent calendar system that validates document expiry dates against 
                selected travel dates, ensuring compliance with visa requirements.
              </p>
              <div className="my-8">
                <img
                  src="/images/roam-flow-4.png"
                  alt="Step 4: Travel date selection"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Step 4: Advanced date selection with document validity checking
                </p>
              </div>

              <h3>Step 5: Application Summary</h3>
              <p>
                The summary page displays all required documents, indicating which are already stored in the 
                user's secure vault and which need to be uploaded. I implemented a traffic light system to 
                show document status and validity.
              </p>
              <div className="my-8">
                <img
                  src="/images/roam-flow-5.png"
                  alt="Step 5: Application summary"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Step 5: Comprehensive application summary with document status
                </p>
              </div>

              <h3>Step 6: Secure Payment</h3>
              <p>
                I integrated Stripe's secure payment system, providing users with a reliable and trusted 
                payment experience. The system automatically generates and sends payment links via email.
              </p>
              <div className="my-8">
                <img
                  src="/images/roam-flow-6.png"
                  alt="Step 6: Payment processing"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Step 6: Secure payment link generation and processing
                </p>
              </div>

              <h2>Security Measures</h2>
              <p>
                I implemented comprehensive security features to protect user data:
              </p>
              <ul>
                <li>End-to-end encryption for all stored documents</li>
                <li>Secure document transmission using TLS 1.3</li>
                <li>Regular security audits and penetration testing</li>
                <li>GDPR-compliant data handling processes</li>
              </ul>

              <h2>Impact and Results</h2>
              <ul>
                <li>Increased application completion rates by 60%</li>
              </ul>

              <h2>Technical Skills Enhanced</h2>
              <ul>
                <li>Advanced TypeScript and Next.js development</li>
                <li>Secure document management system architecture</li>
                <li>Complex state management in React applications</li>
                <li>Integration of multiple third-party APIs</li>
                <li>Implementation of robust security protocols</li>
              </ul>

              <h2>Future Developments</h2>
              <p>
                I am currently working on several enhancements:
              </p>
              <ul>
                <li>AI-powered document validation and verification</li>
                <li>Enhanced document sharing between family applications</li>
                <li>Automated document translation services</li>
                <li>Mobile application for document uploads</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                This project demonstrates my ability to develop complex, user-centric systems while maintaining 
                high security standards. The secure document management system has transformed the visa 
                application process, making it more efficient and user-friendly while ensuring the highest 
                levels of data protection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectE;