import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectC = () => {
  const images = [
    {
      src: "/images/community-survey.png",
      alt: "Community members participating in the survey",
      caption: "Meeting residents where they are: conducting surveys at local events."
    },
    {
      src: "/images/islington-gantt.png",
      alt: "Project timeline and coordination",
      caption: "Planning and tracking our community outreach efforts."
    },
    {
      src: "/images/islington-data.png",
      alt: "Data visualization dashboard",
      caption: "Turning community feedback into actionable insights."
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
              Giving Voice to Islington's Communities
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Challenge</h2>
              <p>
                Whilst working with the London Borough of Islington, we identified a critical gap in our 
                understanding of youth services. Despite having excellent programmes, we lacked insight into 
                what young people really needed and how they experienced our services. With a £100,000 
                research budget, we set out to revolutionise our approach to youth engagement.
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
              <p>
                We developed a comprehensive research programme that prioritised young people's voices:
              </p>

              <h3>Meeting People Where They Are</h3>
              <p>
                Instead of expecting residents to come to us, we went to them. We set up at community 
                events, local markets, and neighborhood centers. We created surveys in multiple languages 
                and worked with community leaders to reach groups we'd struggled to hear from before. 
                Most importantly, we made it clear that we weren't just collecting data – we were 
                listening to build better services.
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

              <h3>Turning Feedback into Action</h3>
              <p>
                We didn't want this to be just another survey that gathered dust. Using data analysis 
                tools, we transformed thousands of responses into clear insights about what different 
                communities needed. We created visual reports that made it easy for decision-makers to 
                understand where services were working well and where they needed improvement.
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
                The results transformed how Islington Council works with its communities:
              </p>
              <ul>
                <li>We redirected £100K to services that residents said they needed most</li>
                <li>Community participation in council initiatives increased by 40%</li>
                <li>We launched 15 new programs based directly on community feedback</li>
                <li>Resident satisfaction with council services significantly improved</li>
              </ul>

              <h2>What I Learnt</h2>
              <p>
                This project transformed my understanding of community research. I learnt that meaningful 
                insights come from creating spaces where people feel truly heard. The skills I developed in 
                managing large-scale research, analysing complex data, and translating findings into 
                actionable recommendations have become central to my approach to problem-solving.
              </p>

              <h3>Key Skills Used</h3>
              <ul>
                <li>Project management and stakeholder coordination</li>
                <li>Data analysis and visualization (Python, Power BI)</li>
                <li>Community engagement and facilitation</li>
                <li>Strategic planning and resource allocation</li>
                <li>Cross-cultural communication</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectC;
