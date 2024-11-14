import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectD = () => {
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
              Youth Justice Service Compliance System
            </h1>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg dark:bg-green-900">
              <div className="flex flex-col space-y-4">
                <p className="text-green-700 dark:text-green-300 font-semibold text-lg">HMIP Inspection Outcome:</p>
                <p className="text-green-600 dark:text-green-400">
                  Achieved 'Outstanding' rating from Her Majesty's Inspectorate of Probation with a score of 34/36, 
                  ranking first in London and third nationally.
                </p>
                <a
                  href="https://www.islington.media/news/islingtons-youth-justice-service-hailed-outstanding-in-landmark-turnaround"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Read the full press release</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>Regulatory Context</h2>
              <p>
                As Project Manager at the London Borough of Islington's Youth Justice Service, I led the implementation 
                of compliance systems aligned with the Crime and Disorder Act 1998, which established Youth Offending 
                Teams, and the subsequent Legal Aid, Sentencing and Punishment of Offenders Act 2012. These frameworks, 
                overseen by Her Majesty's Inspectorate of Probation (HMIP), require robust documentation and evidence 
                of effective youth justice practices.
              </p>

              <h2>Project Overview</h2>
              <p>
                I developed comprehensive compliance systems to meet HMIP's inspection framework across three domains: 
                organisational delivery, court disposals, and out-of-court disposals. The project focused on ensuring 
                our service met the stringent standards set by the Youth Justice Board and HMIP's inspection criteria.
              </p>

              <div className="my-8">
                <img
                  src="/images/islington-compliance.png"
                  alt="Spreadsheet tracking key document compliance with conditional formatting."
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Compliance tracking system I developed to monitor adherence to HMIP standards
                </p>
              </div>

              <h2>Technical Implementation</h2>
              <p>
                I developed systems specifically aligned with HMIP's inspection domains:
              </p>
              <ul>
                <li>
                  I created a centralised tracking system that monitored:
                  <ul>
                    <li>Assessment and planning documentation requirements</li>
                    <li>Implementation and delivery evidence</li>
                    <li>Management oversight records</li>
                    <li>Out-of-court disposal documentation</li>
                  </ul>
                </li>
                <li>
                  I implemented quality assurance processes to ensure compliance with:
                  <ul>
                    <li>National Standards for Youth Justice Services</li>
                    <li>Case Management Guidance</li>
                    <li>Youth Justice Board requirements</li>
                  </ul>
                </li>
              </ul>

              <h2>Process Improvements</h2>
              <p>
                I introduced systematic improvements aligned with statutory requirements:
              </p>
              <ul>
                <li>I established protocols for AssetPlus assessment compliance</li>
                <li>I developed standardised templates for court reports and case records</li>
                <li>I created automated compliance checking for statutory timeframes</li>
                <li>I implemented audit schedules matching HMIP inspection cycles</li>
              </ul>

              <h2>Training and Implementation</h2>
              <p>
                To ensure compliance with regulatory requirements, I:
              </p>
              <ul>
                <li>Trained staff on HMIP inspection frameworks and expectations</li>
                <li>Created documentation aligned with statutory guidance</li>
                <li>Established regular compliance reviews based on HMIP criteria</li>
                <li>Developed KPIs matching national youth justice indicators</li>
              </ul>

              <h2>Measurable Outcomes</h2>
              <ul>
                <li>Achieved 'Outstanding' HMIP rating (34/36)</li>
                <li>Secured 100% compliance with statutory documentation requirements</li>
                <li>Reduced case management processing time by 60%</li>
                <li>Improved inspection preparation efficiency by 75%</li>
              </ul>

              <h2>Technical Skills Enhanced</h2>
              <ul>
                <li>Youth justice case management systems</li>
                <li>Statutory compliance monitoring</li>
                <li>Regulatory reporting and documentation</li>
                <li>Risk assessment frameworks</li>
                <li>Quality assurance systems</li>
              </ul>

              <h2>Professional Development</h2>
              <p>
                Through this project, I strengthened my expertise in:
              </p>
              <ul>
                <li>Youth justice regulatory compliance</li>
                <li>HMIP inspection frameworks</li>
                <li>Statutory reporting systems</li>
                <li>Multi-agency information sharing protocols</li>
                <li>Public sector compliance management</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The successful implementation of this compliance system demonstrates my ability to interpret and 
                apply complex regulatory requirements while developing efficient, practical solutions. The systems 
                I established continue to support the service's outstanding performance against HMIP standards and 
                statutory requirements.
              </p>

              <div className="mt-8">
                <a
                  href="https://www.islington.media/news/islingtons-youth-justice-service-hailed-outstanding-in-landmark-turnaround"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Read the full HMIP inspection press release</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectD;