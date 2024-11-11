import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectA = () => {
  const images = [
    {
      src: "/images/roam-terminal.png",
      alt: "Terminal output showing the scraping process with Anthropic API integration",
      caption: "Terminal output showing real-time processing of visa information routes with Anthropic API integration"
    },
    {
      src: "/images/roam-architecture.png",
      alt: "System architecture diagram showing data pipeline flow",
      caption: "High-level architecture diagram of the ROAM data processing pipeline"
    },
    {
      src: "/images/roam-dashboard.png",
      alt: "Data dashboard showing visa information coverage",
      caption: "Dashboard visualization of visa data coverage across countries"
    },
    {
      src: "/images/roam-performance.png",
      alt: "Performance metrics graph",
      caption: "Performance metrics showing improvement in data retrieval speed"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">ROAM – AI-Powered Data Automation and Enhanced Data Accuracy</h1>
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At ROAM, an innovative visa application platform for tourists, students, and digital nomads, 
              we faced a critical challenge: aggregating comprehensive and accurate visa information from 
              numerous sources worldwide. There was a need to automate data collection and ensure the 
              highest level of data accuracy to better serve our users.
            </p>

            <h2>Action</h2>
            
            <h3>Led Development of AI-Powered Web Scraping Tool</h3>
            <p>
              Managed the creation of an AI-powered web scraping tool using Python, leveraging industry-standard 
              libraries such as Scrapy, BeautifulSoup, and Selenium to collect visa-related data from over 195 
              country websites and government portals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2">{image.caption}</p>
                </div>
              ))}
            </div>

            <h3>Utilized Anthropic API for Data Completion</h3>
            <ul>
              <li>Integrated the Anthropic API to fill gaps in the collected data, using advanced AI capabilities to interpret and estimate missing information.</li>
              <li>Ensured that any AI-generated estimates were clearly labeled and differentiated from confirmed data, maintaining transparency with users.</li>
              <li>Employed confidence scoring mechanisms to assess the reliability of the AI-provided data, only incorporating information that met a high-confidence threshold.</li>
            </ul>

            <h3>Constructed a Fully Automated Data Pipeline</h3>
            <ul>
              <li>Designed and implemented an ETL (Extract, Transform, Load) pipeline using Apache Airflow for workflow automation, ensuring timely updates and data integrity.</li>
              <li>Integrated the pipeline with a PostgreSQL database hosted on Supabase for efficient data storage and retrieval.</li>
              <li>Utilized Pandas and NumPy for data cleaning and transformation tasks, standardizing data formats across sources.</li>
            </ul>

            <h3>Established DevOps Practices</h3>
            <ul>
              <li>Employed Docker for containerization, ensuring consistent development and production environments.</li>
              <li>Set up Continuous Integration/Continuous Deployment (CI/CD) pipelines using GitHub Actions to automate testing and deployment processes.</li>
              <li>Used Git and GitHub for version control and collaborative development, facilitating seamless teamwork among developers.</li>
            </ul>

            <h2>Impact</h2>
            
            <h3>Data Enhancement</h3>
            <ul>
              <li>Successfully populated over 42,000 rows of highly accurate and up-to-date visa information, covering regulations from more than 195 countries.</li>
              <li>Filled data gaps using the Anthropic API, enhancing the completeness of our dataset while maintaining high confidence in data accuracy.</li>
              <li>Improved data retrieval speed by 40% through optimized database indexing and query performance tuning.</li>
            </ul>

            <h3>Operational Efficiency</h3>
            <ul>
              <li>Reduced manual data entry tasks by 85%, reallocating over 500 man-hours annually to other critical business functions.</li>
              <li>Enhanced data accuracy and consistency, leading to a 25% decrease in user-reported errors and inquiries.</li>
            </ul>

            <h3>User Satisfaction</h3>
            <p>Provided users with more comprehensive and reliable visa information, improving overall user experience and trust in the platform.</p>

            <h2>Skills Gained</h2>
            
            <h3>Project Management</h3>
            <p>Enhanced ability to lead complex technical projects using Agile methodologies, including sprint planning, daily stand-ups, and retrospectives with tools like Jira and Asana.</p>

            <h3>Technical Proficiency</h3>
            <ul>
              <li>Deepened expertise in Python programming and web scraping techniques using Scrapy, BeautifulSoup, and Selenium.</li>
              <li>Gained experience in integrating AI APIs, specifically the Anthropic API, for data augmentation and completion.</li>
              <li>Developed skills in data pipeline architecture with Apache Airflow and database management with PostgreSQL and Supabase.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectA;
