import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectC = () => {
  const images = [
    {
      src: "/images/community-survey.png",
      alt: "Community members participating in the survey",
      caption: "Engaging with residents completing the survey at a local event."
    },
    {
      src: "/images/islington-gantt.png",
      alt: "Gantt chart for the project",
      caption: "Gantt chart illustrating the project's timeline and tasks."
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
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Overview of the Community Research Initiative and its impact.
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>Introduction</h2>
              <p>
                During my time at the London Borough of Islington, I recognised a pressing need to better understand
                the diverse needs, concerns, and priorities of our residents. The existing data was outdated and insufficient
                for informed policy-making and effective allocation of resources. Determined to bridge this gap, I initiated
                a comprehensive community research project to gather actionable insights, improve public services, and
                strengthen community relations.
              </p>

              <div className="my-8">
                <img
                  src="/images/community-survey.png"
                  alt="Community members participating in the survey"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Engaging with residents completing the survey at a local event.
                </p>
              </div>

              <h2>Action</h2>
              <h3>Designing and Leading a Large-Scale Research Initiative</h3>

              <h4>Project Planning and Securing Buy-In</h4>
              <p>
                I began by developing a detailed project proposal outlining the objectives, methodologies, timelines, and budget requirements. To secure buy-in from senior leadership and key stakeholders, I presented a compelling case emphasising the potential impact on community welfare and efficient resource allocation.
              </p>

              <h4>Survey Development and Methodology</h4>
              <p>
                To ensure we gathered comprehensive data, I designed a survey instrument covering topics such as housing, healthcare, education, and social services. I conducted pilot testing with 100 residents to refine the questions and improve clarity. Utilising <strong>Qualtrics</strong>, I created and distributed the online survey.
              </p>

              <h4>Multi-Channel Data Collection and Stakeholder Coordination</h4>
              <p>
                Recognising the importance of reaching a diverse audience, I coordinated with various departments and community organisations to deploy online surveys via council platforms and social media channels. I organised physical distribution through public facilities and community events. To engage with non-English speaking residents, I collaborated with translation services and hosted focus groups in multiple languages.
              </p>

              <div className="my-8">
                <img
                  src="/images/islington-gantt.png"
                  alt="Gantt chart for the project"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Gantt chart illustrating the project's timeline and tasks.
                </p>
              </div>

              <h2>Impact</h2>

              <h3>Data-Driven Decision Making</h3>
              <p>
                The research findings enabled us to develop 15 new policy initiatives addressing key community issues. We successfully redirected over £2 million in budget funds to under-resourced areas. The implementation of new programmes based on the research improved services in housing, healthcare, and education.
              </p>

              <h3>Enhanced Stakeholder Relations</h3>
              <p>
                By involving multiple stakeholders throughout the project, we strengthened relationships within the council and with external partners. This collaborative approach led to a 40% increase in community participation in council initiatives. Residents reported higher levels of satisfaction and trust in local government.
              </p>

              <h2>Skills Gained and Business Relevance</h2>

              <h3>Strategic Project Management</h3>
              <p>
                Leading a cross-functional team of 12 members, I honed my ability to coordinate efforts across departments and with external partners. Applying <strong>Agile methodologies</strong> allowed for project adaptation and efficient workflow management, skills that are directly transferable to managing complex projects in the private sector.
              </p>

              <h3>Stakeholder Engagement and Buy-In</h3>
              <p>
                Securing buy-in from senior leadership and key stakeholders was critical to the project's success. I developed persuasive communication strategies to align diverse interests and priorities, a competency essential for driving initiatives within businesses and ensuring support from decision-makers.
              </p>

              <h3>Data Analytics and Insight Generation</h3>
              <p>
                I enhanced my skills in advanced statistical analysis using <strong>Python</strong>, <strong>R</strong>, and <strong>SPSS</strong>. Utilising data visualisation tools like <strong>Power BI</strong> and <strong>Tableau</strong>, I transformed complex data into actionable insights. These abilities are crucial in the private sector for making informed business decisions and developing strategies based on data.
              </p>

              <h3>Effective Communication and Collaboration</h3>
              <p>
                Managing complex stakeholder relationships required clear and effective communication. I facilitated collaboration between departments and external organisations, ensuring alignment with project goals. This experience is valuable in any business environment where cross-functional teamwork and stakeholder management are key to success.
              </p>

              <h2>Lessons Learned</h2>
              <p>
                I learned that effective engagement requires multi-channel approaches to reach a diverse audience, whether customers, clients, or internal teams. Continuous feedback loops enhance the relevance and impact of initiatives, leading to better outcomes. Collaborative efforts across departments and with external partners result in more comprehensive and sustainable solutions, a principle that holds true in the private sector for driving innovation and achieving business objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectC;
