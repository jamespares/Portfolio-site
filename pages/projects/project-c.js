import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectC = () => {
  const images = [
    {
      src: "/images/community-survey.png",
      alt: "Community members participating in the survey",
      caption: "Residents engaging with the community survey at a local event."
    },
    {
      src: "/images/islington-gantt.png",
      alt: "Gantt chart for the project",
      caption: "Gantt chart illustrating the project's timeline and tasks."
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
            London Borough of Islington – Community Research Initiative
          </h1>

          <div className="my-8">
            <div className="w-full aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/hqi2ut09hVA"
                title="Project Overview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-2xl"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Overview of the Community Research Initiative and its impact.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At the London Borough of Islington, the local government recognized a pressing need to better understand
              the diverse needs, concerns, and priorities of its residents. Existing data was outdated and insufficient
              for informed policy-making and effective allocation of resources. To address this gap, we initiated a
              comprehensive community research project to gather actionable insights, improve public services, and
              strengthen community relations.
            </p>

            <div className="my-8">
              <img
                src="/images/community-survey.png"
                alt="Community members participating in the survey"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Residents engaging with the community survey at a local event.
              </p>
            </div>

            <h2>Action</h2>
            <h3>Designed and Led the Largest Community Research Initiative in Council History</h3>

            <h4>Project Planning and Approval</h4>
            <ul>
              <li>
                <strong>Developed a detailed project proposal</strong> outlining objectives, methodologies, timelines, and budget requirements.
              </li>
              <li>
                <strong>Secured approval and funding</strong> from senior leadership by presenting a compelling case for the project's potential impact.
              </li>
            </ul>

            <h4>Survey Development and Methodology</h4>
            <ul>
              <li>
                <strong>Designed a comprehensive survey instrument</strong> covering topics such as housing, healthcare, education, and social services.
              </li>
              <li>
                <strong>Conducted pilot testing</strong> with 100 residents to refine questions and improve clarity.
              </li>
              <li>
                Utilized <strong>Qualtrics</strong> for online survey creation and distribution.
              </li>
            </ul>

            <h4>Multi-Channel Data Collection Strategy</h4>
            <ul>
              <li>
                <strong>Deployed online surveys</strong> via council platforms and social media channels.
              </li>
              <li>
                <strong>Organized physical distribution</strong> through public facilities and community events.
              </li>
              <li>
                <strong>Hosted focus groups</strong> with translation services in multiple languages to reach diverse populations.
              </li>
            </ul>

            <div className="my-8">
              <img
                src="/images/islington-gantt.png"
                alt="Gantt chart for the project"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Gantt chart illustrating the project's timeline and tasks.
              </p>
            </div>

            <h2>Impact</h2>

            <h3>Informed Policy-Making</h3>
            <ul>
              <li>
                <strong>Developed 15 new policy initiatives</strong> addressing key community issues identified through the research.
              </li>
              <li>
                <strong>Redirected over £2 million</strong> in budget funds to under-resourced areas.
              </li>
              <li>
                Implemented new community programs based on research findings, improving services in housing, healthcare, and education.
              </li>
            </ul>

            <h3>Strengthened Community Relations</h3>
            <ul>
              <li>
                Achieved a <strong>40% increase in community participation</strong> in council initiatives.
              </li>
              <li>
                Higher reported levels of <strong>satisfaction and trust</strong> in local government.
              </li>
              <li>
                Established improved communication channels with residents, fostering ongoing engagement.
              </li>
            </ul>

            <h2>Skills Gained</h2>

            <h3>Data Analytics</h3>
            <ul>
              <li>
                Advanced statistical analysis using <strong>Python</strong>, <strong>R</strong>, and <strong>SPSS</strong>.
              </li>
              <li>
                Data visualization with <strong>Power BI</strong>, <strong>Tableau</strong>, and <strong>ArcGIS</strong>.
              </li>
              <li>
                Programming skills in Python (<strong>Pandas</strong>, <strong>NumPy</strong>) for data manipulation.
              </li>
            </ul>

            <h3>Project Management</h3>
            <ul>
              <li>
                Led a cross-functional team of 12 members, coordinating efforts across departments.
              </li>
              <li>
                Applied <strong>Agile methodologies</strong> for project adaptation and efficient workflow management.
              </li>
              <li>
                Managed complex stakeholder relationships, ensuring alignment with council objectives.
              </li>
            </ul>

            <h3>Community Engagement</h3>
            <ul>
              <li>
                Developed <strong>cultural competence</strong> across diverse populations within the borough.
              </li>
              <li>
                Enhanced <strong>public speaking and presentation skills</strong> through community meetings and council presentations.
              </li>
              <li>
                Mastered <strong>inclusive engagement strategies</strong> to reach underrepresented groups.
              </li>
            </ul>

            <h2>Lessons Learned</h2>
            <ul>
              <li>
                Effective community engagement requires <strong>multi-channel approaches</strong> to reach a diverse audience.
              </li>
              <li>
                Continuous feedback loops with residents enhance the <strong>relevance and impact</strong> of policy initiatives.
              </li>
              <li>
                Collaborative efforts between departments lead to more <strong>comprehensive and sustainable solutions</strong>.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectC;
