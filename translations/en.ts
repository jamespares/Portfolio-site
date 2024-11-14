export default {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    cv: "CV",
    contact: "Contact",
    backToProjects: "Back to Projects"
  },

  projects: {
    projectA: {
      title: "AI-Powered Data Scraping and Pipeline Setup",
      shortDescription: "Led development of AI-powered data automation system, improving accuracy by 25% and reducing manual work by 85%",
      tags: ["Python", "AI/ML", "Data Pipeline", "DevOps"],
      introduction: {
        title: "Introduction",
        content: "Working at Roam, an innovative visa application platform for tourists, students, and digital nomads, I faced a critical challenge: aggregating comprehensive and accurate visa information from numerous sources worldwide. Recognising the need to automate data collection and ensure the highest level of data accuracy, I set out to develop a solution that would better serve our users."
      },
      action: {
        webScraping: {
          title: "Developing the Web Scraping Tool",
          content: "To address the challenge, I developed a Python-based web scraping tool using libraries like Scrapy, BeautifulSoup, and Selenium. This tool was designed to collect visa-related data from over 195 country websites and government portals, automating what was previously a manual and time-consuming process."
        },
        dataProcessing: {
          title: "Cleaning and Processing Data",
          content: "After scraping the data, I utilised Pandas and NumPy to clean and process the collected information. This involved standardising data formats, handling missing values, and ensuring consistency across all data sources. By implementing robust data cleaning procedures, I ensured the integrity and reliability of the dataset."
        },
        database: {
          title: "Inputting Data into the Database",
          content: "With the data cleaned and processed, I stored it in a PostgreSQL database hosted on Supabase. This setup allowed for efficient data storage and retrieval, enabling the platform to serve users with up-to-date visa information quickly."
        },
        ai: {
          title: "Utilising AI for Data Completion",
          content: "To fill any gaps in the collected data, I integrated the Anthropic API, which provided AI capabilities to enhance data accuracy. I implemented confidence scoring to assess the reliability of AI-provided data and made sure that any AI-generated estimates were clearly labelled for transparency."
        },
        automation: {
          title: "Automating Data Refresh with Scheduled Intervals",
          content: "To keep the data current, I built an automated data pipeline using Apache Airflow. This workflow automation ensured that the scraping and data processing tasks were executed at scheduled intervals, refreshing the database with the latest information without manual intervention."
        },
        devops: {
          title: "Establishing DevOps Practices",
          content: "To support continuous integration and deployment, I set up CI/CD pipelines using GitHub Actions. I also utilised Docker for containerisation, ensuring consistent development and production environments. Version control and collaborative development were managed using Git and GitHub, facilitating seamless teamwork."
        }
      },
      impact: {
        dataEnhancement: {
          title: "Data Enhancement",
          content: "By implementing this solution, I populated over 42,000 rows of accurate and up-to-date visa information, covering regulations from more than 195 countries. The dataset's completeness was significantly enhanced while maintaining high confidence in data accuracy. I also improved data retrieval speed by 40% through optimised database indexing and query performance tuning."
        },
        operationalEfficiency: {
          title: "Operational Efficiency",
          content: "The automated pipeline reduced manual data entry tasks by 85%, allowing the team to reallocate hours to other critical functions. Enhanced data accuracy and consistency led to a 25% decrease in user-reported errors and enquiries."
        },
        userSatisfaction: {
          title: "User Satisfaction",
          content: "Providing users with comprehensive and reliable visa information improved the overall user experience and increased trust in the platform."
        }
      },
      images: {
        architecture: {
          src: "/images/roam-architecture.png",
          alt: "System architecture diagram showing data pipeline flow",
          caption: "High-level architecture diagram of the Roam data processing pipeline."
        },
        terminal: {
          src: "/images/roam-terminal.png",
          alt: "Terminal output showing the scraping process with progress bar and error handling",
          caption: "Terminal output showing the scraping process with progress bar and error handling."
        },
        dashboard: {
          src: "/images/roam-dashboard.png",
          alt: "Project plan showing the stages of the data pipeline build",
          caption: "Project plan showing the stages of the data pipeline build."
        },
        sheet: {
          src: "/images/roam-sheet.png",
          alt: "Data in the Google Sheet showing the coverage of visa information across countries",
          caption: "Data in the Google Sheet showing the coverage of visa information across countries."
        }
      }
    },
    projectB: {
      title: "Internationalisation Project at Roam.io",
      shortDescription: "Led development of comprehensive i18n solution, increasing international market penetration by 50%",
      tags: ["Next.js", "i18n", "TypeScript", "OpenAI"],
      introduction: {
        content: "At Roam.io, I led the development of a comprehensive internationalisation solution. I analysed our user data and identified that a significant portion of our visa application platform's traffic came from non-English speaking countries. Based on this insight, I implemented a strategic localisation initiative to expand our market reach."
      },
      technicalImplementation: {
        title: "Technical Implementation",
        overview: "I developed a custom internationalisation architecture using Next.js Static Site Generation and a Node.js-based translation management system. My key technical implementations included:",
        keyPoints: [
          "I built static page generation for multiple languages using Next.js SSG",
          "I created an automated translation pipeline using OpenAI GPT-4 API",
          "I designed a modular routing system for language-specific content delivery",
          "I implemented comprehensive SEO optimisations including hreflang tags"
        ]
      },
      codeExample: {
        title: "Translation Automation System",
        description: "Translation automation system I developed using OpenAI's GPT-4 API",
        code: `async function translateText(text: string, targetLanguage: string) {
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
}`
      },
      results: {
        title: "Results",
        introduction: "Through these implementations, I achieved significant improvements:",
        achievements: [
          "I increased international market penetration by 50%",
          "I reduced bounce rates for non-English users by 45%",
          "I improved conversion rates across new markets by 30%",
          "I maintained sub-2-second load times globally"
        ]
      },
      technicalOutcomes: {
        title: "Technical Outcomes",
        content: "I established a scalable foundation for Roam's international expansion through automated workflows and optimised performance. My implementation continues to support the platform's growth with minimal maintenance requirements, while enabling easy addition of new languages and features."
      },
      images: {
        langDropdown: {
          src: "/images/roam-lang-dropdown.png",
          alt: "Language selection dropdown interface",
          caption: "Custom language selector with region-specific options and flags."
        },
        translated: {
          src: "/images/roam-translated.png",
          alt: "Roam website showing translated content in multiple languages",
          caption: "Seamless content translation across different locales."
        }
      }
    },
    projectC: {
      title: "London Borough of Islington – Community Research Initiative",
      shortDescription: "Led comprehensive community research project to improve public services and strengthen community relations",
      tags: ["Data Analysis", "Research", "Project Management", "Public Sector"],
      video: {
        src: "https://www.youtube.com/embed/hqi2ut09hVA",
        title: "Project Overview Video",
        caption: "Overview of the Community Research Initiative and its impact."
      },
      introduction: {
        title: "Introduction",
        content: "During my time at the London Borough of Islington, I recognised a pressing need to better understand the diverse needs, concerns, and priorities of our residents. The existing data was outdated and insufficient for informed policy-making and effective allocation of resources. Determined to bridge this gap, I initiated a comprehensive community research project to gather actionable insights, improve public services, and strengthen community relations."
      },
      action: {
        title: "Action",
        researchInitiative: {
          title: "Designing and Leading a Large-Scale Research Initiative",
          projectPlanning: {
            title: "Project Planning and Securing Buy-In",
            content: "I began by developing a detailed project proposal outlining the objectives, methodologies, timelines, and budget requirements. To secure buy-in from senior leadership and key stakeholders, I presented a compelling case emphasising the potential impact on community welfare and efficient resource allocation."
          },
          surveyDevelopment: {
            title: "Survey Development and Methodology",
            content: "To ensure we gathered comprehensive data, I designed a survey instrument covering topics such as housing, healthcare, education, and social services. I conducted pilot testing with 100 residents to refine the questions and improve clarity. Utilising Qualtrics, I created and distributed the online survey."
          },
          dataCollection: {
            title: "Multi-Channel Data Collection and Stakeholder Coordination",
            content: "Recognising the importance of reaching a diverse audience, I coordinated with various departments and community organisations to deploy online surveys via council platforms and social media channels. I organised physical distribution through public facilities and community events. To engage with non-English speaking residents, I collaborated with translation services and hosted focus groups in multiple languages."
          }
        }
      },
      impact: {
        title: "Impact",
        decisionMaking: {
          title: "Data-Driven Decision Making",
          content: "The research findings enabled us to develop 15 new policy initiatives addressing key community issues. We successfully redirected over £2 million in budget funds to under-resourced areas. The implementation of new programmes based on the research improved services in housing, healthcare, and education."
        },
        stakeholderRelations: {
          title: "Enhanced Stakeholder Relations",
          content: "By involving multiple stakeholders throughout the project, we strengthened relationships within the council and with external partners. This collaborative approach led to a 40% increase in community participation in council initiatives. Residents reported higher levels of satisfaction and trust in local government."
        }
      },
      skillsAndRelevance: {
        title: "Skills Gained and Business Relevance",
        projectManagement: {
          title: "Strategic Project Management",
          content: "Leading a cross-functional team of 12 members, I honed my ability to coordinate efforts across departments and with external partners. Applying Agile methodologies allowed for project adaptation and efficient workflow management, skills that are directly transferable to managing complex projects in the private sector."
        },
        stakeholderEngagement: {
          title: "Stakeholder Engagement and Buy-In",
          content: "Securing buy-in from senior leadership and key stakeholders was critical to the project's success. I developed persuasive communication strategies to align diverse interests and priorities, a competency essential for driving initiatives within businesses and ensuring support from decision-makers."
        },
        dataAnalytics: {
          title: "Data Analytics and Insight Generation",
          content: "I enhanced my skills in advanced statistical analysis using Python, R, and SPSS. Utilising data visualisation tools like Power BI and Tableau, I transformed complex data into actionable insights. These abilities are crucial in the private sector for making informed business decisions and developing strategies based on data."
        },
        communication: {
          title: "Effective Communication and Collaboration",
          content: "Managing complex stakeholder relationships required clear and effective communication. I facilitated collaboration between departments and external organisations, ensuring alignment with project goals. This experience is valuable in any business environment where cross-functional teamwork and stakeholder management are key to success."
        }
      },
      lessonsLearned: {
        title: "Lessons Learned",
        content: "I learned that effective engagement requires multi-channel approaches to reach a diverse audience, whether customers, clients, or internal teams. Continuous feedback loops enhance the relevance and impact of initiatives, leading to better outcomes. Collaborative efforts across departments and with external partners result in more comprehensive and sustainable solutions, a principle that holds true in the private sector for driving innovation and achieving business objectives."
      },
      images: {
        survey: {
          src: "/images/community-survey.png",
          alt: "Community members participating in the survey",
          caption: "Engaging with residents completing the survey at a local event."
        },
        gantt: {
          src: "/images/islington-gantt.png",
          alt: "Gantt chart for the project",
          caption: "Gantt chart illustrating the project's timeline and tasks."
        }
      }
    },
    projectE: {
      title: "Enhanced Visa Application Flow with Secure Document Management",
      shortDescription: "Developed comprehensive visa application system with secure document storage and reuse capabilities",
      tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe"],
      introduction: {
        title: "Introduction",
        content: "I led the development of an intuitive visa application platform that revolutionises how users manage their applications and documents. A key innovation I introduced was the secure document storage system, ensuring users never need to upload the same document twice. This significantly streamlined the application process while maintaining the highest security standards."
      },
      technicalImplementation: {
        title: "Technical Implementation",
        coreTechnologies: {
          title: "Core Technologies",
          items: [
            "Frontend: TypeScript, Next.js, and React for a responsive user interface",
            "Backend: Supabase for secure document storage and user management",
            "Payment Processing: Stripe API integration for secure transactions",
            "Security: End-to-end encryption for document storage and transmission"
          ]
        },
        documentManagement: {
          title: "Document Management Features",
          items: [
            "Secure document vault for storing sensitive information",
            "Automatic document categorisation and validation",
            "Smart document reuse across multiple applications",
            "Automated expiry tracking and renewal notifications"
          ]
        }
      },
      applicationFlow: {
        title: "Application Flow",
        steps: {
          nationality: {
            title: "Step 1: Nationality Selection",
            content: "Users begin their journey by selecting their nationality, which determines the available visa options and document requirements.",
            image: {
              src: "/images/roam-flow-1.png",
              alt: "Step 1: User selects their nationality",
              caption: "Step 1: Intuitive nationality selection interface"
            }
          },
          visaType: {
            title: "Step 2: Visa Type Selection",
            content: "Based on nationality, users are presented with eligible visa types and their requirements.",
            image: {
              src: "/images/roam-flow-2.png",
              alt: "Step 2: Available visa types",
              caption: "Step 2: Clear presentation of available visa options"
            }
          },
          documents: {
            title: "Step 3: Document Management",
            content: "Users can upload new documents or reuse previously stored ones, with automatic validation and categorization.",
            image: {
              src: "/images/roam-flow-3.png",
              alt: "Step 3: Document upload interface",
              caption: "Step 3: Streamlined document management system"
            }
          }
        }
      },
      impact: {
        title: "Impact and Results",
        metrics: [
          "Increased application completion rates by 60%",
          "Reduced document upload time by 75%",
          "Improved user satisfaction scores by 45%",
          "Decreased support tickets related to document issues by 80%"
        ]
      },
      technicalSkills: {
        title: "Technical Skills Enhanced",
        skills: [
          "Advanced TypeScript and Next.js development",
          "Secure document management system architecture",
          "Complex state management in React applications",
          "Integration of multiple third-party APIs",
          "Implementation of robust security protocols"
        ]
      },
      futureDevelopments: {
        title: "Future Developments",
        planned: [
          "AI-powered document validation and verification",
          "Enhanced document sharing between family applications",
          "Automated document translation services",
          "Mobile application for document uploads"
        ]
      },
      conclusion: {
        title: "Conclusion",
        content: "This project demonstrates my ability to develop complex, user-centric systems while maintaining high security standards. The secure document management system has transformed the visa application process, making it more efficient and user-friendly while ensuring the highest levels of data protection."
      }
    }
  }
}; 