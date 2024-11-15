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
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const images = [
    {
      src: "/images/roam-lang-dropdown.png",
      alt: "Language selection dropdown interface",
      caption: "Custom language selector with region-specific options and flags."
    },
    {
      src: "/images/roam-translated.png",
      alt: "Roam website showing translated content in multiple languages",
      caption: "Seamless content translation across different locales."
    },
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
              Internationalisation Project at Roam.io
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                At <a href="https://roamfreely.io" target="_blank" rel="noopener noreferrer">Roam.io</a>, 
                I led the development of a comprehensive internationalisation solution. I analysed our user data 
                and identified that a significant portion of our visa application platform's traffic came from 
                non-English speaking countries. Based on this insight, I implemented a strategic localisation 
                initiative to expand our market reach.
              </p>

              <h2>Technical Implementation</h2>
              <p>
                I developed a custom internationalisation architecture using Next.js Static Site Generation 
                and a Node.js-based translation management system. My key technical implementations included:
              </p>

              <ul>
                <li>I built static page generation for multiple languages using Next.js SSG</li>
                <li>I created an automated translation pipeline using OpenAI GPT-4 API</li>
                <li>I designed a modular routing system for language-specific content delivery</li>
                <li>I implemented comprehensive SEO optimisations including hreflang tags</li>
              </ul>

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

              <h2>Core Features</h2>
              <p>
                I focused on developing essential features to ensure scalability and performance:
              </p>

              <ul>
                <li>I engineered an automated content extraction and translation workflow</li>
                <li>I implemented language-specific routing and content management</li>
                <li>I optimised performance for global CDN delivery</li>
                <li>I developed SEO-optimised static page generation</li>
              </ul>

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

              <h2>Translation System Architecture</h2>
              <p>
                I developed a custom translation system to automate and streamline the localisation process:
              </p>

              <div className="my-8">
                <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto shadow-lg">
                  <code className="language-typescript text-sm">
{`// translation-script.ts
import OpenAI from 'openai';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Translations } from '../app/types/translations';
import enTranslations from '../app/text-translations/en';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const languages = {
  ar: 'Arabic',
  de: 'German',
  es: 'Spanish',
  fr: 'French',
  // Add other languages as needed
} as const;

async function translateText(text: string, targetLanguage: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{
        role: "user",
        content: \`Translate this text to \${targetLanguage}, maintaining the same tone and meaning:\\n\\n\${text}\`
      }]
    });
    return response.choices[0]?.message?.content || text;
  } catch (error) {
    console.error(\`Translation error for \${targetLanguage}:\`, error);
    return text;
  }
}`}
                  </code>
                </pre>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Translation automation system I developed using OpenAI's GPT-4 API
                </p>
              </div>

              <h2>Results</h2>
              <p>
                Through these implementations, I achieved significant improvements:
              </p>

              <ul>
                <li>I increased international market penetration by 50%</li>
                <li>I reduced bounce rates for non-English users by 45%</li>
                <li>I improved conversion rates across new markets by 30%</li>
                <li>I maintained sub-2-second load times globally</li>
              </ul>

              <h2>Technical Outcomes</h2>
              <p>
                I established a scalable foundation for Roam's international expansion through automated 
                workflows and optimised performance. My implementation continues to support the platform's 
                growth with minimal maintenance requirements, while enabling easy addition of new languages 
                and features.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectB;