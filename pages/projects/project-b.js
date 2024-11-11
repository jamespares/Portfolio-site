import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
      caption: "Custom language selector with region-specific options and flags"
    },
    {
      src: "/images/roam-translated.png",
      alt: "ROAM website showing translated content in multiple languages",
      caption: "Multi-language support showing seamless content translation across different locales"
    },
   
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">ROAM – Internationalization and User Engagement Boost</h1>
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At ROAM, our visa application platform aimed at tourists, students, and digital nomads, 
              we sought to expand our global reach. Recognizing the need to cater to a diverse international 
              audience, we aimed to localize our website into multiple languages to enhance user experience, 
              increase engagement, and improve our search engine visibility in new markets.
            </p>

            <h2>Action</h2>
            
            <h3>Evaluated Translation Approaches</h3>
            
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

            <h4>API-Based Translation</h4>
            <ul>
              <li>Considered using translation APIs (e.g., Google Translate API) for on-the-fly translations.</li>
              <li>Drawbacks Identified:
                <ul>
                  <li>Slower page load times due to real-time API calls.</li>
                  <li>Less control over translation quality.</li>
                  <li>Potential negative impact on SEO because content is rendered dynamically.</li>
                </ul>
              </li>
            </ul>

            <h4>Internationalization Libraries (i18n)</h4>
            <ul>
              <li>Explored using libraries like react-intl or i18next within our React application.</li>
              <li>Challenges Noted:
                <ul>
                  <li>Increased complexity in code management.</li>
                  <li>Client-side rendering could hinder SEO performance.</li>
                  <li>Possible performance overhead affecting user experience.</li>
                </ul>
              </li>
            </ul>

            <h4>Static Internal Folder with Translation Script (Chosen Approach)</h4>
            <ul>
              <li>Decided to generate static pages for each language by storing translations in an internal folder structure.</li>
              <li>Implementation Details:
                <ul>
                  <li>Used Next.js for Static Site Generation (SSG), creating pre-rendered pages for optimal load times.</li>
                  <li>Developed a custom Node.js translation script to automate extraction and management of text content.</li>
                  <li>Collaborated with professional translators to ensure high-quality, contextually accurate translations.</li>
                </ul>
              </li>
            </ul>

            <div className="my-8">
              <h5 className="text-lg font-semibold mb-4">Translation Automation Script</h5>
              <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto shadow-lg">
                <code className="language-typescript text-xs font-mono">
{`// Translation automation script using OpenAI GPT-4
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
  he: 'Hebrew',
  hi: 'Hindi',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  nl: 'Dutch',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  th: 'Thai',
  tr: 'Turkish',
  vi: 'Vietnamese',
  zh: 'Chinese'
} as const;

/**
 * Translates a single text string to the target language using GPT-4
 */
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
}

/**
 * Updates translation file for a specific language
 */
async function updateTranslationFile(langCode: string, langName: string) {
  const filePath = path.join(process.cwd(), 'app', 'text-translations', \`\${langCode}.ts\`);
  
  const translations: Translations = JSON.parse(JSON.stringify(enTranslations));
  
  if (langCode === 'en') {
    console.log('Skipping English translations...');
    return;
  }
  
  console.log(\`Creating fresh translations for \${langName}...\`);
  
  // Translate email content
  for (const key of Object.keys(enTranslations.waitlist.email)) {
    const source = enTranslations.waitlist.email[key];
    translations.waitlist.email[key] = await translateText(source, langName);
  }
  
  // Translate main content
  for (const key of Object.keys(enTranslations.waitlist.content)) {
    const source = enTranslations.waitlist.content[key];
    translations.waitlist.content[key] = await translateText(source, langName);
  }

  await fs.writeFile(filePath, generateTranslationFileContent(translations));
  console.log(\`✅ \${langName} translations updated\`);
}`}
                </code>
              </pre>
            </div>

            <h3>Optimized for SEO</h3>
            <ul>
              <li>Improved Search Engine Crawlability:
                <ul>
                  <li>Static pages allowed search engine bots to index content without executing JavaScript.</li>
                  <li>Each language version had unique URLs (e.g., www.roam.com/en/, www.roam.com/fr/).</li>
                </ul>
              </li>
              <li>Implemented hreflang Tags:
                <ul>
                  <li>Added hreflang attributes to indicate language and regional targeting to search engines.</li>
                  <li>Prevented duplicate content issues by clarifying the relationship between different language versions.</li>
                </ul>
              </li>
              <li>Enhanced Metadata and Sitemaps:
                <ul>
                  <li>Customized meta titles and descriptions for each language.</li>
                  <li>Generated and submitted separate sitemaps for each language version to search engines.</li>
                </ul>
              </li>
            </ul>

            <h2>Impact</h2>
            
            <h3>Enhanced User Experience</h3>
            <ul>
              <li>Achieved faster page load times due to pre-rendered static pages, improving Core Web Vitals metrics.</li>
              <li>Provided users with culturally relevant and accurate content, increasing user satisfaction.</li>
            </ul>

            <h3>Increased User Engagement</h3>
            <ul>
              <li>30% Rise in Engagement Metrics:
                <ul>
                  <li>Noted increases in time spent on site, pages per session, and lower bounce rates.</li>
                </ul>
              </li>
              <li>50% Growth in International Traffic:
                <ul>
                  <li>Attracted a broader global audience, expanding into key markets in Europe, Asia, and the Middle East.</li>
                </ul>
              </li>
            </ul>

            <h3>Improved SEO Performance</h3>
            <ul>
              <li>Higher rankings in localized search results due to optimized content and technical SEO enhancements.</li>
              <li>Increased organic traffic from non-English speaking countries.</li>
            </ul>

            <h2>Skills Gained</h2>
            
            <h3>Technical Expertise</h3>
            <ul>
              <li>Static Site Generation with Next.js:
                <ul>
                  <li>Mastered Next.js features for building high-performance, SEO-friendly websites.</li>
                </ul>
              </li>
              <li>Custom Scripting:
                <ul>
                  <li>Developed proficiency in Node.js for creating automation scripts to manage translations.</li>
                </ul>
              </li>
            </ul>

            <h3>SEO Best Practices</h3>
            <ul>
              <li>Gained in-depth knowledge of international SEO strategies, including hreflang implementation and multilingual sitemaps.</li>
              <li>Enhanced understanding of how site structure and content delivery impact search engine indexing and rankings.</li>
            </ul>

            <h3>Project Management and Decision-Making</h3>
            <ul>
              <li>Strengthened ability to evaluate technical solutions based on performance, user experience, and business impact.</li>
              <li>Improved skills in coordinating cross-functional teams, including developers, translators, and SEO specialists.</li>
            </ul>

            <h3>Localization and Cultural Awareness</h3>
            <ul>
              <li>Developed sensitivity to cultural nuances in language, ensuring translations were both accurate and appropriate.</li>
              <li>Learned to maintain brand voice consistently across different languages and regions.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectB;
