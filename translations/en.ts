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
      images: {
        architecture: {
          alt: "System architecture diagram showing data pipeline flow",
          caption: "High-level architecture diagram of the Roam data processing pipeline."
        },
        terminal: {
          alt: "Terminal output showing the scraping process with progress bar and error handling",
          caption: "Terminal output showing the scraping process with progress bar and error handling."
        },
        dashboard: {
          alt: "Project plan showing the stages of the data pipeline build",
          caption: "Project plan showing the stages of the data pipeline build."
        },
        sheet: {
          alt: "Data in the Google Sheet showing the coverage of visa information across countries",
          caption: "Data in the Google Sheet showing the coverage of visa information across countries."
        }
      },
      action: {
        title: "Action",
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
        automation: {
          title: "Automating Data Refresh with Scheduled Intervals",
          content: "To keep the data current, I built an automated data pipeline using Apache Airflow. This workflow automation ensured that the scraping and data processing tasks were executed at scheduled intervals, refreshing the database with the latest information without manual intervention."
        },
        ai: {
          title: "Utilising AI for Data Completion",
          content: "To fill any gaps in the collected data, I integrated the Anthropic API, which provided AI capabilities to enhance data accuracy. I implemented confidence scoring to assess the reliability of AI-provided data and made sure that any AI-generated estimates were clearly labelled for transparency."
        },
        devops: {
          title: "Establishing DevOps Practices",
          content: "To support continuous integration and deployment, I set up CI/CD pipelines using GitHub Actions. I also utilised Docker for containerisation, ensuring consistent development and production environments. Version control and collaborative development were managed using Git and GitHub, facilitating seamless teamwork."
        }
      },
      impact: {
        title: "Impact",
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
      // ... continuing with Project A content
    },

    projectB: {
      title: "Internationalisation and User Engagement Boost",
      shortDescription: "Led website internationalization initiative resulting in 50% growth in international traffic and 30% increase in user engagement",
      // ... continuing with Project B content
    },

    projectC: {
      title: "London Borough of Islington – Community Research Initiative",
      shortDescription: "Led borough's largest community research initiative, redirecting £2M in resources and achieving 40% increase in community engagement",
      // ... continuing with Project C content
    }
  }
  // ... continuing with all content
}; 