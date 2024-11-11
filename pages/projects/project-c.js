import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">London Borough of Islington – Community Research Initiative</h1>
          
          <div className="w-full aspect-w-16 aspect-h-9 mb-20">
            <iframe
              src="https://www.youtube.com/embed/hqi2ut09hVA"
              title="Project Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-2xl"
            ></iframe>
          </div>

          <img 
            src="/api/placeholder/1200/600" 
            alt="Community Research Initiative"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At the London Borough of Islington, the local government recognized a pressing need to better understand 
              the diverse needs, concerns, and priorities of its residents. Existing data was outdated and insufficient 
              for informed policy-making and effective allocation of resources. To address this gap, we aimed to conduct 
              a comprehensive community research initiative that would gather actionable insights to improve public 
              services and strengthen community relations.
            </p>

            <h2>Action</h2>
            <h3>Designed and Led the Largest Community Research Initiative in Council History</h3>

            <h4>Project Planning and Approval</h4>
            <ul>
              <li>Developed a detailed project proposal outlining objectives, methodologies, timelines, and budget requirements.</li>
              <li>Secured approval and funding from senior leadership by presenting a compelling case for the project's potential impact.</li>
            </ul>

            <h4>Survey Development and Methodology</h4>
            <ul>
              <li>Designed a comprehensive survey instrument covering housing, healthcare, education, and social services.</li>
              <li>Conducted pilot testing with 100 residents to refine questions.</li>
              <li>Utilized Qualtrics for online survey creation and distribution.</li>
            </ul>

            <h4>Multi-Channel Data Collection Strategy</h4>
            <ul>
              <li>Deployed online surveys via council platforms and social media.</li>
              <li>Organized physical distribution through public facilities and community events.</li>
              <li>Hosted focus groups with translation services in multiple languages.</li>
            </ul>

            <h2>Impact</h2>
            
            <h3>Informed Policy-Making</h3>
            <ul>
              <li>Developed 15 new policy initiatives addressing key community issues.</li>
              <li>Redirected over £2 million in budget funds to under-resourced areas.</li>
              <li>Implemented new community programs based on research findings.</li>
            </ul>

            <h3>Strengthened Community Relations</h3>
            <ul>
              <li>40% increase in community participation in council initiatives.</li>
              <li>Higher reported levels of satisfaction and trust in local government.</li>
              <li>Established improved communication channels with residents.</li>
            </ul>

            <h2>Skills Gained</h2>
            
            <h3>Data Analytics</h3>
            <ul>
              <li>Advanced statistical analysis using Python, R, and SPSS</li>
              <li>Data visualization with Power BI, Tableau, and ArcGIS</li>
              <li>Programming skills in Python (Pandas, NumPy)</li>
            </ul>

            <h3>Project Management</h3>
            <ul>
              <li>Led cross-functional team of 12 members</li>
              <li>Applied Agile methodologies for project adaptation</li>
              <li>Managed complex stakeholder relationships</li>
            </ul>

            <h3>Community Engagement</h3>
            <ul>
              <li>Developed cultural competence across diverse populations</li>
              <li>Enhanced public speaking and presentation skills</li>
              <li>Mastered inclusive engagement strategies</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectC;
