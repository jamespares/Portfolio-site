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
      caption: "Custom language selector with region-specific options and flags."
    },
    {
      src: "/images/roam-translated.png",
      alt: "ROAM website showing translated content in multiple languages",
      caption: "Seamless content translation across different locales."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Internationalisation and User Engagement Boost
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At Roam, our visa application platform aimed at tourists, students, and digital nomads, we sought to
              expand our global reach. Recognizing the need to cater to a diverse international audience, we aimed to
              localize our website into multiple languages to enhance user experience, increase engagement, and improve
              our search engine visibility in new markets.
            </p>

            <div className="my-8">
              <img
                src="/images/roam-lang-dropdown.png"
                alt="Language selection dropdown interface"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Custom language selector with region-specific options and flags.
              </p>
            </div>

            <h2>Action</h2>

            <h3>Evaluated Translation Approaches</h3>
            <p>
              To effectively localize our platform, we explored various translation methods to determine the most
              efficient and SEO-friendly approach.
            </p>

            <h4>API-Based Translation</h4>
            <ul>
              <li>
                <strong>Considered using translation APIs</strong> (e.g., Google Translate API) for real-time translations.
              </li>
              <li>
                <strong>Drawbacks Identified:</strong>
                <ul>
                  <li>Slower page load times due to on-the-fly translation.</li>
                  <li>Less control over translation quality and context.</li>
                  <li>Potential negative impact on SEO because content is rendered dynamically.</li>
                </ul>
              </li>
            </ul>

            <h4>Internationalization Libraries (i18n)</h4>
            <ul>
              <li>
                <strong>Explored using libraries like react-intl or i18next</strong> within our React application.
              </li>
              <li>
                <strong>Challenges Noted:</strong>
                <ul>
                  <li>Increased complexity in code management.</li>
                  <li>Client-side rendering could hinder SEO performance.</li>
                  <li>Possible performance overhead affecting user experience.</li>
                </ul>
              </li>
            </ul>

            <h4>Static Internal Folder with Translation Script (Chosen Approach)</h4>
            <ul>
              <li>
                <strong>Decided to generate static pages for each language</strong> by storing translations in an internal folder structure.
              </li>
              <li>
                <strong>Implementation Details:</strong>
                <ul>
                  <li>
                    Used <strong>Next.js</strong> for Static Site Generation (SSG), creating pre-rendered pages for optimal load times.
                  </li>
                  <li>
                    Developed a custom <strong>Node.js translation script</strong> to automate extraction and management of text content.
                  </li>
                  <li>
                    Collaborated with professional translators to ensure high-quality, contextually accurate translations.
                  </li>
                </ul>
              </li>
            </ul>

            <div className="my-8">
              <img
                src="/images/roam-translated.png"
                alt="ROAM website showing translated content in multiple languages"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Seamless content translation across different locales.
              </p>
            </div>

            <h3>Optimized for SEO</h3>
            <ul>
              <li>
                <strong>Improved Search Engine Crawlability:</strong>
                <ul>
                  <li>Static pages allowed search engine bots to index content without executing JavaScript.</li>
                  <li>
                    Each language version had unique URLs (e.g., <em>www.roam.com/en/</em>, <em>www.roam.com/fr/</em>).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Implemented hreflang Tags:</strong>
                <ul>
                  <li>Added hreflang attributes to indicate language and regional targeting to search engines.</li>
                  <li>Prevented duplicate content issues by clarifying relationships between language versions.</li>
                </ul>
              </li>
              <li>
                <strong>Enhanced Metadata and Sitemaps:</strong>
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
              <li>
                <strong>30% Rise in Engagement Metrics:</strong>
                <ul>
                  <li>Increased time spent on site, pages per session, and lower bounce rates.</li>
                </ul>
              </li>
              <li>
                <strong>50% Growth in International Traffic:</strong>
                <ul>
                  <li>Expanded into key markets in Europe, Asia, and the Middle East.</li>
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
              <li>
                <strong>Static Site Generation with Next.js:</strong>
                <ul>
                  <li>Mastered Next.js features for building high-performance, SEO-friendly websites.</li>
                </ul>
              </li>
              <li>
                <strong>Custom Scripting:</strong>
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
              <li>Maintained consistent brand voice across different languages and regions.</li>
            </ul>

            <h2>Technical Implementation</h2>

            <h3>Translation Automation Script</h3>
            <p>
              Below is a snippet of the custom Node.js script used to automate the translation process. The script leverages the OpenAI GPT-4 API to generate high-quality translations efficiently.
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
}

async function updateTranslationFile(langCode: string, langName: string) {
  const filePath = path.join(process.cwd(), 'app', 'text-translations', \`\${langCode}.ts\`);

  const translations: Translations = JSON.parse(JSON.stringify(enTranslations));

  if (langCode === 'en') {
    console.log('Skipping English translations...');
    return;
  }

  console.log(\`Creating translations for \${langName}...\`);

  // Translate content
  for (const section of Object.keys(enTranslations)) {
    for (const key of Object.keys(enTranslations[section])) {
      const source = enTranslations[section][key];
      translations[section][key] = await translateText(source, langName);
    }
  }

  await fs.writeFile(filePath, generateTranslationFileContent(translations));
  console.log(\`✅ \${langName} translations updated\`);
}

function generateTranslationFileContent(translations: Translations) {
  return \`export default \${JSON.stringify(translations, null, 2)};\`;
}

async function main() {
  for (const [langCode, langName] of Object.entries(languages)) {
    await updateTranslationFile(langCode, langName);
  }
}

main();`}
                </code>
              </pre>
              <p className="text-sm text-gray-600 mt-2">
                Custom Node.js script automating the translation process using OpenAI GPT-4 API.
              </p>
            </div>

            <h2>Lessons Learned</h2>
            <ul>
              <li>Static content generation significantly enhances performance and SEO over dynamic translation methods.</li>
              <li>Automation scripts can greatly reduce manual workload and potential for human error.</li>
              <li>Collaboration across different teams (development, SEO, translation) is crucial for successful internationalization.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectB;
