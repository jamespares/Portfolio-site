import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectE = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-600 hover:text-sky-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Visa Application Assistance – End-to-End User Flow
          </h1>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
            <div className="flex flex-col space-y-4">
              <p className="text-green-700 font-semibold text-lg">Project Overview:</p>
              <p className="text-green-600">
                Coordinated the build of a streamlined application flow for users on a visa application assistance website. Using 
                TypeScript, Next.js, React, Supabase, and Stripe API, I created a comprehensive user journey from initiation to payment.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              This project focused on developing a seamless application flow for users seeking visa assistance. The goal was to ensure 
              a user-friendly, efficient process from the initial application steps through to secure payment, enhancing usability and 
              conversion rates on the platform.
            </p>

            <h2>Action</h2>
            <h3>Role and Responsibilities</h3>
            <ul>
              <li>Coordinated the development across multiple technologies (TypeScript, Next.js, React, Supabase, and Stripe API).</li>
              <li>Designed and implemented an end-to-end flow from application initiation to payment confirmation.</li>
              <li>Ensured data integrity and compliance with industry standards in user data management and payment processing.</li>
            </ul>

            <h4>Step-by-Step Application Flow</h4>

            <h5>Step 1: User Initiates the Application Process</h5>
            <p>
              Users begin by accessing the visa application assistance platform, where they are greeted with an intuitive interface guiding them through the process.
            </p>
            <div className="my-8">
              <img
                src="/images/roam-flow-1.png"
                alt="Step 1: User initiates the visa application process."
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Step 1: User initiates the visa application process.
              </p>
            </div>

            <h5>Step 2: Filling Out Personal Information</h5>
            <p>
              The user fills out personal and contact information, ensuring all necessary details are captured accurately.
            </p>
            <div className="my-8">
              <img
                src="/images/roam-flow-2.png"
                alt="Step 2: User fills out personal information."
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Step 2: User fills out personal information.
              </p>
            </div>

            <h5>Step 3: Uploading Necessary Documents</h5>
            <p>
              Users upload required documents securely, with clear instructions and validations to minimize errors.
            </p>
            <div className="my-8">
              <img
                src="/images/roam-flow-3.png"
                alt="Step 3: User uploads necessary documents."
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Step 3: User uploads necessary documents.
              </p>
            </div>

            <h5>Step 4: Review and Confirmation</h5>
            <p>
              The application details are presented for review, allowing users to confirm the accuracy before proceeding.
            </p>
            <div className="my-8">
              <img
                src="/images/roam-flow-4.png"
                alt="Step 4: Review and confirm application details."
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Step 4: Review and confirm application details.
              </p>
            </div>

            <h5>Step 5: Proceeding to Payment</h5>
            <p>
              Users are directed to the payment gateway, integrated with Stripe API for secure transactions.
            </p>
            <div className="my-8">
              <img
                src="/images/roam-flow-5.png"
                alt="Step 5: User proceeds to payment."
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Step 5: User proceeds to payment.
              </p>
            </div>

            <h5>Step 6: Payment Confirmation and Submission</h5>
            <p>
              Upon successful payment, users receive confirmation, and the application is submitted for processing.
            </p>
            <div className="my-8">
              <img
                src="/images/roam-flow-6.png"
                alt="Step 6: Payment confirmation and application submission."
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Step 6: Payment confirmation and application submission.
              </p>
            </div>

            <h4>Key Technical Solutions</h4>
            <ul>
              <li>Integrated Supabase for data handling and user management.</li>
              <li>Implemented Stripe API for secure, reliable payment processing.</li>
              <li>Developed a modular, scalable application flow using TypeScript and Next.js.</li>
            </ul>

            <h2>Impact</h2>
            <blockquote className="border-l-4 border-sky-500 pl-4 italic">
              "The application flow transformed the user experience, making the visa application process accessible and efficient, 
              from start to finish."
            </blockquote>

            <h3>Recognition and Achievement</h3>
            <ul>
              <li>Achieved a substantial improvement in user engagement and payment conversion rates.</li>
              <li>Positive user feedback highlighting the seamless and intuitive design of the application flow.</li>
              <li>Recognized by stakeholders for innovation in end-to-end user journey management.</li>
            </ul>

            <h2>Skills Gained</h2>
            
            <h3>Technical Proficiency</h3>
            <ul>
              <li>Enhanced expertise in TypeScript and Next.js for building scalable applications.</li>
              <li>Deepened knowledge in integrating third-party services like Supabase and Stripe API.</li>
              <li>Improved skills in managing complex data flows securely and efficiently.</li>
            </ul>

            <h3>Project Coordination and Management</h3>
            <ul>
              <li>Developed strong organizational skills coordinating a multi-faceted development project.</li>
              <li>Ensured clear communication across team members and stakeholders.</li>
              <li>Prioritized tasks effectively to meet project timelines and maintain quality.</li>
            </ul>

            <h2>Lessons Learned</h2>
            <ul>
              <li>Integration of multiple technologies requires careful planning and testing for seamless operation.</li>
              <li>Clear documentation and modular code improve scalability and maintainability.</li>
              <li>Prioritizing user experience at each stage maximizes conversion and satisfaction.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectE;
