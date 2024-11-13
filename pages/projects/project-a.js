import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectA = () => {
  const images = [
    {
      src: "/images/roam-architecture.png",
      alt: "System architecture diagram showing data pipeline flow",
      caption: "High-level architecture diagram of the ROAM data processing pipeline."
    },
    {
      src: "/images/roam-terminal.png",
      alt: "Terminal output showing the scraping process with Anthropic API integration",
      caption: "Real-time processing of visa information using AI integration."
    },
    {
      src: "/images/roam-dashboard.png",
      alt: "Data dashboard showing visa information coverage",
      caption: "Dashboard visualization of visa data coverage across countries."
    },
    {
      src: "/images/roam-performance.png",
      alt: "Performance metrics graph",
      caption: "Performance metrics showcasing improved data retrieval speed."
    }
  ];

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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            AI-Powered Data Automation and Enhanced Data Accuracy
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At Roam, an innovative visa application platform for tourists, students, and digital nomads,
              we faced a critical challenge: aggregating comprehensive and accurate visa information from
              numerous sources worldwide. There was a need to automate data collection and ensure the
              highest level of data accuracy to better serve our users.
            </p>

            <div className="my-8">
              <img
                src="/images/roam-architecture.png"
                alt="System architecture diagram showing data pipeline flow"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                High-level architecture diagram of the ROAM data processing pipeline.
              </p>
            </div>

            <h2>Action</h2>

            <h3>Led Development of AI-Powered Web Scraping Tool</h3>
            <p>
              Managed the creation of an AI-powered web scraping tool using Python, leveraging industry-standard
              libraries such as Scrapy, BeautifulSoup, and Selenium to collect visa-related data from over 195
              country websites and government portals.
            </p>

            <div className="my-8">
              <img
                src="/images/roam-terminal.png"
                alt="Terminal output showing the scraping process with Anthropic API integration"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Real-time processing of visa information using AI integration.
              </p>
            </div>

            <h3>Utilized AI for Data Completion</h3>
            <ul>
              <li>
                Integrated AI capabilities to fill gaps in the collected data, interpreting and estimating missing information.
              </li>
              <li>
                Ensured AI-generated estimates were clearly labeled, maintaining transparency with users.
              </li>
              <li>
                Employed confidence scoring to assess the reliability of AI-provided data, incorporating only high-confidence information.
              </li>
            </ul>

            <h3>Constructed a Fully Automated Data Pipeline</h3>
            <ul>
              <li>
                Designed and implemented an ETL pipeline using Apache Airflow for workflow automation, ensuring timely updates and data integrity.
              </li>
              <li>
                Integrated the pipeline with a PostgreSQL database hosted on Supabase for efficient data storage and retrieval.
              </li>
              <li>
                Utilized Pandas and NumPy for data cleaning and transformation, standardizing data formats across sources.
              </li>
            </ul>

            <div className="my-8">
              <img
                src="/images/roam-dashboard.png"
                alt="Data dashboard showing visa information coverage"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Dashboard visualization of visa data coverage across countries.
              </p>
            </div>

            <h3>Established DevOps Practices</h3>
            <ul>
              <li>
                Employed Docker for containerization, ensuring consistent development and production environments.
              </li>
              <li>
                Set up CI/CD pipelines using GitHub Actions to automate testing and deployment processes.
              </li>
              <li>
                Used Git and GitHub for version control and collaborative development, facilitating seamless teamwork.
              </li>
            </ul>

            <h2>Impact</h2>

            <h3>Data Enhancement</h3>
            <ul>
              <li>
                Populated over 42,000 rows of accurate and up-to-date visa information, covering regulations from more than 195 countries.
              </li>
              <li>
                Enhanced dataset completeness while maintaining high confidence in data accuracy.
              </li>
              <li>
                Improved data retrieval speed by 40% through optimized database indexing and query performance tuning.
              </li>
            </ul>

            <div className="my-8">
              <img
                src="/images/roam-sheet.png"
                alt="Performance metrics graph"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Performance metrics showcasing improved data retrieval speed.
              </p>
            </div>

            <h3>Operational Efficiency</h3>
            <ul>
              <li>
                Reduced manual data entry tasks by 85%, reallocating over 500 man-hours annually to other critical functions.
              </li>
              <li>
                Enhanced data accuracy and consistency, leading to a 25% decrease in user-reported errors and inquiries.
              </li>
            </ul>

            <h3>User Satisfaction</h3>
            <p>
              Provided users with comprehensive and reliable visa information, improving overall user experience and trust in the platform.
            </p>

            <h2>Skills Gained</h2>

            <h3>Project Management</h3>
            <p>
              Led complex technical projects using Agile methodologies, including sprint planning and daily stand-ups with tools like Jira.
            </p>

            <h3>Technical Proficiency</h3>
            <ul>
              <li>
                Advanced expertise in Python programming and web scraping with Scrapy, BeautifulSoup, and Selenium.
              </li>
              <li>
                Experience integrating AI APIs for data augmentation and completion.
              </li>
              <li>
                Developed skills in data pipeline architecture with Apache Airflow and database management with PostgreSQL and Supabase.
              </li>
            </ul>

            <h2>Lessons Learned</h2>
            <ul>
              <li>
                Integrating AI technologies enhances data completeness and accuracy but requires careful validation.
              </li>
              <li>
                Automating data pipelines increases efficiency and allows focus on strategic tasks.
              </li>
              <li>
                Implementing DevOps practices early contributes to smoother development and deployment cycles.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectA;
