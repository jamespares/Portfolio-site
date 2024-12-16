import { useContext } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Globe } from 'lucide-react';
import { LanguageContext } from '../../context/LanguageContext';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import { useEffect } from 'react';

const ProjectB = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const images = [
    {
      src: "/images/roam-lang-dropdown.png",
      alt: "Language selection dropdown interface",
      caption: "Making Roam accessible in multiple languages with an intuitive language selector."
    },
    {
      src: "/images/roam-translated.png",
      alt: "Roam website showing translated content in multiple languages",
      caption: "The same visa information, now available in different languages."
    },
    {
      src: "/images/roam-code.png",
      alt: "Code showing the translation system implementation",
      caption: "Our automated translation system in action."
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
              Taking Roam Global
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Challenge</h2>
              <p>
                While Roam was helping travelers with visa applications, we noticed something important: many of our 
                visitors weren't native English speakers. Our analytics showed that people from all over the world 
                were trying to use our platform, but the language barrier was getting in their way. We needed to 
                make Roam truly accessible to everyone, regardless of what language they spoke.
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

              <h3>Building a Smart Translation System</h3>
              <p>
                Instead of just translating our website manually (which would have taken forever), we built a 
                smart system that could handle translations automatically. We used AI to help translate content 
                accurately, but always had human experts review the important stuff to make sure everything made 
                perfect sense.
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

              <h3>Making it Fast and Reliable</h3>
              <p>
                We didn't want our international users to have a slower experience, so we built the system to 
                be lightning-fast. We used Next.js to generate static pages in each language, which meant the 
                website loaded quickly no matter where in the world you were accessing it from. We also made 
                sure search engines could easily find our content in every language.
              </p>

              <div className="my-8">
                <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto shadow-lg">
                  <code className="language-typescript text-sm">
{`// Example of our translation automation
async function translateContent(text: string, language: string) {
  // First, use AI to generate a translation
  const aiTranslation = await translateWithAI(text, language);
  
  // Then, send for human review if it's important content
  if (isKeyContent(text)) {
    return await sendForHumanReview(aiTranslation);
  }
  
  return aiTranslation;
}`}
                  </code>
                </pre>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  A glimpse at how we handle automated translations while ensuring accuracy.
                </p>
              </div>

              <h2>The Impact</h2>
              <p>
                The results were amazing. Within months of launching our multilingual platform:
              </p>
              <ul>
                <li>More people from non-English speaking countries started using Roam</li>
                <li>Users spent more time on the site because they could understand everything clearly</li>
                <li>We started getting great feedback from international travelers</li>
                <li>The website stayed fast and reliable, even with all the added languages</li>
              </ul>

              <h2>What I Learnt</h2>
              <p>
                This project taught me invaluable lessons about leading digital transformation in the public sector. 
                I learnt how to balance innovation with security, how to bring stakeholders along on a journey of 
                change, and how to deliver complex technical solutions whilst keeping the focus on improving 
                people's lives.
              </p>

              <h3>Key Skills Used</h3>
              <ul>
                <li>International market research and strategy</li>
                <li>Next.js and React development</li>
                <li>AI integration for translations</li>
                <li>Performance optimization</li>
                <li>SEO for international markets</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectB;