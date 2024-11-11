import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectD = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">London Borough of Islington – Compliance Management Project</h1>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
            <div className="flex flex-col space-y-4">
              <p className="text-green-700 font-semibold text-lg">Latest Recognition:</p>
              <p className="text-green-600">
                In August 2024, Islington's Youth Justice Service achieved an 'Outstanding' rating from HMIP with a score of 34/36 - 
                the best result in London and third-highest in England and Wales.
              </p>
              <a 
                href="https://www.islington.media/news/islingtons-youth-justice-service-hailed-outstanding-in-landmark-turnaround"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 transition-colors"
              >
                <span>Read the full press release</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h.01M10 12h.01M10 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At the London Borough of Islington, the Youth Services department faced a critical challenge in preparing for an upcoming national inspection. 
              Previous audits had highlighted deficiencies in compliance processes and document management, putting the department at risk of not meeting 
              the required standards. There was an urgent need to overhaul these systems to ensure adherence to national regulations, secure ongoing funding, 
              and maintain the department's reputation for delivering high-quality services to the youth community.
            </p>

            <h2>Action</h2>
            <h3>Led the Overhaul of Compliance Processes and Document Management</h3>

            <h4>Key Achievements</h4>
            <ul>
              <li>Halved the rate of under-18s entering the justice system between 2016 and 2023</li>
              <li>Developed comprehensive anti-racist strategy to address disproportionality</li>
              <li>Established strong partnerships with police, probation service, education institutions and health providers</li>
              <li>Implemented effective restorative justice programme</li>
            </ul>

            <h4>Innovation in Service Delivery</h4>
            <ul>
              <li>Introduced peer advocates program - children with lived experience contributing to police recruit training</li>
              <li>Developed innovative research methodologies to understand disproportionality factors</li>
              <li>Created quick-access pathways to key services including speech therapy and mental health support</li>
            </ul>

            <h2>Impact</h2>
            <blockquote className="border-l-4 border-sky-500 pl-4 italic">
              "The work of our Youth Justice Service is critical to our mission to make Islington a more equal place, using innovation 
              and research alongside early intervention and prevention tactics to support children and families, many of whom are among 
              the most vulnerable in the borough."
              <footer className="text-gray-600 not-italic">
                - Cllr Michelline Safi-Ngongo, Executive Member for Children, Young People and Families
              </footer>
            </blockquote>

            <h3>Recognition and Achievement</h3>
            <ul>
              <li>Achieved highest possible 'Outstanding' rating from HMIP</li>
              <li>Scored 34 out of 36 - best result in London</li>
              <li>Praised for "tenacious and innovative approach" by Chief Inspector</li>
              <li>Recognized for "genuine commitment to understanding lived experience"</li>
            </ul>

            <h2>Skills Gained</h2>
            
            <h3>Compliance and Regulatory Expertise</h3>
            <ul>
              <li>Deep understanding of national youth services regulations</li>
              <li>Interpretation of complex legal and regulatory documents</li>
              <li>Application of compliance requirements to organizational practices</li>
            </ul>

            <h3>Project and Change Management</h3>
            <ul>
              <li>Led department-wide project under tight deadlines</li>
              <li>Managed organizational change and resistance</li>
              <li>Developed effective communication strategies</li>
            </ul>

            <h3>Training and Development</h3>
            <ul>
              <li>Created and delivered training programs for 50+ staff</li>
              <li>Mentored team members through transition</li>
              <li>Built strong stakeholder relationships</li>
            </ul>

            <h2>Lessons Learned</h2>
            <ul>
              <li>Proactive compliance is essential for organizational success</li>
              <li>Staff engagement drives successful implementation</li>
              <li>Well-designed systems enhance both quality and efficiency</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectD;
