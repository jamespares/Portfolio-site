import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import { useContext } from 'react';

const ProjectA = () => {
  const images = [
    {
      src: "/images/roam-architecture.png",
      alt: "System architecture diagram showing data pipeline flow",
      caption: "A visual overview of how we collect and process visa information."
    },
    {
      src: "/images/roam-terminal.png",
      alt: "Terminal output showing the scraping process with progress bar and error handling",
      caption: "Our data collection tool in action, showing real-time progress and error checks."
    },
    {
      src: "/images/roam-dashboard.png",
      alt: "Project plan showing the stages of the data pipeline build",
      caption: "Breaking down the project into manageable phases."
    },
    {
      src: "/images/roam-sheet.png",
      alt: "Data in the Google Sheet showing the coverage of visa information across countries",
      caption: "Tracking our progress: visa information coverage across different countries."
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
            Back to Projects
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
              Making Visa Information Accessible
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Challenge</h2>
              <p>
                At Roam, we help people navigate the complex world of visa applications. One of our biggest challenges 
                was getting accurate, up-to-date visa information from hundreds of different sources. With visa rules 
                changing frequently across 195+ countries, manual research wasn't cutting it anymore. We needed a 
                better way to keep our users informed.
              </p>

              <div className="my-8">
                <img
                  src="/images/roam-architecture.png"
                  alt="System architecture diagram showing data pipeline flow"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-2">
                  A visual overview of how we collect and process visa information.
                </p>
              </div>

              <h2>The Solution</h2>

              <h3>Building Smart Data Collection</h3>
              <p>
                I led the development of a custom tool that automatically gathers visa information from government 
                websites worldwide. Think of it as a smart assistant that works 24/7, constantly checking and updating 
                visa requirements so our team doesn't have to do it manually.
              </p>

              <div className="my-8">
                <img
                  src="/images/roam-terminal.png"
                  alt="Terminal output showing the scraping process with progress bar and error handling"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Our data collection tool in action, showing real-time progress and error checks.
                </p>
              </div>

              <h3>Making Sense of the Data</h3>
              <p>
                Raw data isn't very useful if it's messy or inconsistent. We built a system that cleans and 
                organizes the information as it comes in, making sure everything is standardized and easy to 
                understand. When we found gaps in the data, we used AI to help fill them in, always making sure 
                to verify the accuracy.
              </p>

              <div className="my-8">
                <img
                  src="/images/roam-dashboard.png"
                  alt="Project plan showing the stages of the data pipeline build"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Breaking down the project into manageable phases.
                </p>
              </div>

              <h3>Keeping Everything Up to Date</h3>
              <p>
                Visa rules change often, so we set up an automated system that regularly checks for updates. 
                This means our users always have access to the latest information without our team having to 
                manually check hundreds of websites every day.
              </p>

              <h2>The Impact</h2>

              <h3>Better Information, Happier Users</h3>
              <p>
                This project transformed how we handle visa information at Roam. We now maintain accurate data 
                for over 195 countries, and our users can trust that they're getting up-to-date information. 
                The automated system saves our team countless hours of manual work, letting them focus on helping 
                users with more complex queries.
              </p>

              <div className="my-8">
                <img
                  src="/images/roam-sheet.png"
                  alt="Data in the Google Sheet showing the coverage of visa information across countries"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Tracking our progress: visa information coverage across different countries.
                </p>
              </div>

              <h2>What I Learnt</h2>
              <p>
                This project taught me invaluable lessons about leading digital transformation in the public sector. 
                I learnt how to balance innovation with security, how to bring stakeholders along on a journey of 
                change, and how to deliver complex technical solutions whilst keeping the focus on improving 
                people's lives.
              </p>

              <h3>Key Skills Used</h3>
              <ul>
                <li>Digital transformation strategy</li>
                <li>Stakeholder management</li>
                <li>Agile project delivery</li>
                <li>User-centred design</li>
                <li>Technical architecture</li>
                <li>Information security and GDPR compliance</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectA;
