import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectA = () => {
  const images = [
    {
      src: "/images/roam-architecture.png",
      alt: "System architecture diagram showing data pipeline flow",
      caption: "High-level architecture diagram of the Roam data processing pipeline."
    },
    {
      src: "/images/roam-terminal.png",
      alt: "Terminal output showing the scraping process with progress bar and error handling",
      caption: "Terminal output showing the scraping process with progress bar and error handling."
    },
    {
      src: "/images/roam-dashboard.png",
      alt: "Project plan showing the stages of the data pipeline build",
      caption: "Project plan showing the stages of the data pipeline build."
    },
    {
      src: "/images/roam-sheet.png",
      alt: "Data in the Google Sheet showing the coverage of visa information across countries",
      caption: "Data in the Google Sheet showing the coverage of visa information across countries."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/#projects" 
          className="inline-flex items-centre text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            AI-Powered Data Scraping and Pipeline Setup
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Working at Roam, an innovative visa application platform for tourists, students, and digital nomads,
              I faced a critical challenge: aggregating comprehensive and accurate visa information from
              numerous sources worldwide. Recognising the need to automate data collection and ensure the
              highest level of data accuracy, I set out to develop a solution that would better serve our users.
            </p>

            <div className="my-8">
              <img
                src="/images/roam-architecture.png"
                alt="System architecture diagram showing data pipeline flow"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                High-level architecture diagram of the Roam data processing pipeline.
              </p>
            </div>

            <h2>Action</h2>

            <h3>Developing the Web Scraping Tool</h3>
            <p>
              To address the challenge, I developed a Python-based web scraping tool using libraries like Scrapy, BeautifulSoup, and Selenium. This tool was designed to collect visa-related data from over 195 country websites and government portals, automating what was previously a manual and time-consuming process.
            </p>

            <div className="my-8">
              <img
                src="/images/roam-terminal.png"
                alt="Terminal output showing the scraping process with progress bar and error handling"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Terminal output showing the scraping process with progress bar and error handling.
              </p>
            </div>

            <h3>Cleaning and Processing Data</h3>
            <p>
              After scraping the data, I utilised Pandas and NumPy to clean and process the collected information. This involved standardising data formats, handling missing values, and ensuring consistency across all data sources. By implementing robust data cleaning procedures, I ensured the integrity and reliability of the dataset.
            </p>

            <h3>Inputting Data into the Database</h3>
            <p>
              With the data cleaned and processed, I stored it in a PostgreSQL database hosted on Supabase. This setup allowed for efficient data storage and retrieval, enabling the platform to serve users with up-to-date visa information quickly.
            </p>

            <h3>Automating Data Refresh with Scheduled Intervals</h3>
            <p>
              To keep the data current, I built an automated data pipeline using Apache Airflow. This workflow automation ensured that the scraping and data processing tasks were executed at scheduled intervals, refreshing the database with the latest information without manual intervention.
            </p>

            <div className="my-8">
              <img
                src="/images/roam-dashboard.png"
                alt="Project plan showing the stages of the data pipeline build"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Project plan showing the stages of the data pipeline build.
              </p>
            </div>

            <h3>Utilising AI for Data Completion</h3>
            <p>
              To fill any gaps in the collected data, I integrated the Anthropic API, which provided AI capabilities to enhance data accuracy. I implemented confidence scoring to assess the reliability of AI-provided data and made sure that any AI-generated estimates were clearly labelled for transparency.
            </p>

            <h3>Establishing DevOps Practices</h3>
            <p>
              To support continuous integration and deployment, I set up CI/CD pipelines using GitHub Actions. I also utilised Docker for containerisation, ensuring consistent development and production environments. Version control and collaborative development were managed using Git and GitHub, facilitating seamless teamwork.
            </p>

            <h2>Impact</h2>

            <h3>Data Enhancement</h3>
            <p>
              By implementing this solution, I populated over 42,000 rows of accurate and up-to-date visa information, covering regulations from more than 195 countries. The dataset's completeness was significantly enhanced while maintaining high confidence in data accuracy. I also improved data retrieval speed by 40% through optimised database indexing and query performance tuning.
            </p>

            <div className="my-8">
              <img
                src="/images/roam-sheet.png"
                alt="Data in the Google Sheet showing the coverage of visa information across countries"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Data in the Google Sheet showing the coverage of visa information across countries.
              </p>
            </div>

            <h3>Operational Efficiency</h3>
            <p>
              The automated pipeline reduced manual data entry tasks by 85%, allowing the team to reallocate hours to other critical functions. Enhanced data accuracy and consistency led to a 25% decrease in user-reported errors and enquiries.
            </p>

            <h3>User Satisfaction</h3>
            <p>
              Providing users with comprehensive and reliable visa information improved the overall user experience and increased trust in the platform.
            </p>

            <h2>Skills Gained</h2>

            <h3>Project Management</h3>
            <p>
              I honed my project management skills by leading a complex technical project using Agile methodologies, including sprint planning and daily stand-ups with tools like Jira.
            </p>

            <h3>Technical Proficiency</h3>
            <p>
              I developed advanced expertise in Python programming and web scraping with Scrapy, BeautifulSoup, and Selenium. Integrating AI APIs for data augmentation and completion expanded my skill set. Additionally, I gained experience in data pipeline architecture with Apache Airflow and database management with PostgreSQL and Supabase.
            </p>

            <h2>Lessons Learned</h2>
            <p>
              Through this project, I learned that integrating AI technologies enhances data completeness and accuracy but requires careful validation. Automating data pipelines increases efficiency and allows focus on strategic tasks, but it is critical to ensure data is accurate and operations are precise to avoid compounding errors.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectA;
