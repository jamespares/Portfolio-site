import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectD = () => {
  const images = [
    {
      src: "/images/islington-compliance.png",
      alt: "Compliance tracking dashboard",
      caption: "Our custom system for tracking and improving youth service quality."
    },
    {
      src: "/images/islington-training.png",
      alt: "Team training session",
      caption: "Working with the team to implement new quality standards."
    },
    {
      src: "/images/islington-results.png",
      alt: "Inspection results visualization",
      caption: "Celebrating our 'Outstanding' inspection result - 34 out of 36 points."
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
              Transforming Youth Justice Services
            </h1>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg dark:bg-green-900">
              <div className="flex flex-col space-y-4">
                <p className="text-green-700 dark:text-green-300 font-semibold text-lg">Achievement Highlight:</p>
                <p className="text-green-600 dark:text-green-400">
                  Our service achieved an 'Outstanding' rating (34/36) from HMIP inspectors - the highest score 
                  in London and third-highest nationally.
                </p>
                <a
                  href="https://www.islington.media/news/islingtons-youth-justice-service-hailed-outstanding-in-landmark-turnaround"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Read the full story</span>
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
              <h2>The Challenge</h2>
              <p>
                When I joined Islington's Youth Justice Service, we faced a significant challenge. Whilst our 
                team was doing important work supporting young people, we weren't consistently documenting our 
                work or following standard procedures. This made it hard to prove our impact and ensure we 
                were providing the best possible support to every young person. We needed to transform how we 
                worked without losing focus on what mattered most – helping young people turn their lives around.
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

              <h3>Building Better Systems</h3>
              <p>
                We started by creating clear, simple systems that made it easier for our team to do their 
                jobs. I developed tracking tools that helped us monitor each young person's progress, ensure 
                we were meeting all our legal requirements, and spot any gaps in our support. The key was 
                making these systems work for our team, not create extra bureaucracy.
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

              <h3>Supporting Our Team</h3>
              <p>
                The best systems only work if people know how to use them. We ran regular training sessions 
                and created easy-to-follow guides for all our processes. I worked closely with team members 
                to understand their challenges and adjust our approach when needed. This wasn't about 
                ticking boxes – it was about helping our team do their best work.
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
                The transformation in our service was remarkable:
              </p>
              <ul>
                <li>Achieved the highest inspection score in London (34/36)</li>
                <li>Improved our documentation quality to 100% compliance</li>
                <li>Reduced time spent on paperwork by 60%</li>
                <li>Team members reported feeling more confident and supported in their work</li>
              </ul>

              <h2>What I Learnt</h2>
              <p>
                This project taught me that real change happens when you focus on people first. Whilst we 
                needed to meet strict regulatory requirements, success came from understanding our team's 
                needs and building systems that supported their work rather than hindered it. I learnt 
                how to balance compliance with practicality, and how to bring people along on a journey 
                of organisational change.
              </p>

              <h3>Key Skills Used</h3>
              <ul>
                <li>Change management and team leadership</li>
                <li>Process design and implementation</li>
                <li>Quality assurance and compliance</li>
                <li>Training and development</li>
                <li>Performance monitoring and improvement</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectD;