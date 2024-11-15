export default {
    nav: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      cv: "CV",
      contact: "Contact",
      backToProjects: "Retour aux Projets"
    },
  
    projects: {
      projectA: {
        title: "Système de Collecte de Données et Configuration de Pipeline Alimenté par l'IA",
        shortDescription: "Direction du développement d'un système d'automatisation des données alimenté par l'IA, améliorant la précision de 25% et réduisant le travail manuel de 85%",
        tags: ["Python", "IA/ML", "Pipeline de Données", "DevOps"],
        introduction: {
          title: "Introduction",
          content: "Travaillant chez Roam, une plateforme innovante de demande de visa pour les touristes, étudiants et nomades numériques, j'ai été confronté à un défi crucial : agréger des informations complètes et précises sur les visas provenant de nombreuses sources mondiales. Reconnaissant le besoin d'automatiser la collecte de données et d'assurer le plus haut niveau de précision des données, j'ai entrepris de développer une solution qui servirait mieux nos utilisateurs."
        },
        action: {
          webScraping: {
            title: "Développement de l'Outil de Web Scraping",
            content: "Pour relever ce défi, j'ai développé un outil de web scraping basé sur Python utilisant des bibliothèques comme Scrapy, BeautifulSoup et Selenium. Cet outil a été conçu pour collecter des données relatives aux visas sur plus de 195 sites web nationaux et portails gouvernementaux, automatisant ce qui était auparavant un processus manuel et chronophage."
          },
          dataProcessing: {
            title: "Nettoyage et Traitement des Données",
            content: "Après l'extraction des données, j'ai utilisé Pandas et NumPy pour nettoyer et traiter les informations collectées. Cela impliquait la standardisation des formats de données, la gestion des valeurs manquantes et l'assurance de la cohérence entre toutes les sources de données. En mettant en œuvre des procédures robustes de nettoyage des données, j'ai assuré l'intégrité et la fiabilité de l'ensemble des données."
          },
          database: {
            title: "Saisie des Données dans la Base de Données",
            content: "Une fois les données nettoyées et traitées, je les ai stockées dans une base de données PostgreSQL hébergée sur Supabase. Cette configuration a permis un stockage et une récupération efficaces des données, permettant à la plateforme de fournir rapidement aux utilisateurs des informations à jour sur les visas."
          },
          ai: {
            title: "Utilisation de l'IA pour Compléter les Données",
            content: "Pour combler les lacunes dans les données collectées, j'ai intégré l'API Anthropic, qui fournissait des capacités d'IA pour améliorer la précision des données. J'ai mis en place un système de notation de confiance pour évaluer la fiabilité des données fournies par l'IA et me suis assuré que toutes les estimations générées par l'IA étaient clairement étiquetées par souci de transparence."
          },
          automation: {
            title: "Automatisation du Rafraîchissement des Données avec des Intervalles Programmés",
            content: "Pour maintenir les données à jour, j'ai construit un pipeline de données automatisé utilisant Apache Airflow. Cette automatisation du flux de travail a assuré que les tâches d'extraction et de traitement des données étaient exécutées à des intervalles programmés, rafraîchissant la base de données avec les dernières informations sans intervention manuelle."
          },
          devops: {
            title: "Établissement des Pratiques DevOps",
            content: "Pour soutenir l'intégration et le déploiement continus, j'ai mis en place des pipelines CI/CD utilisant GitHub Actions. J'ai également utilisé Docker pour la conteneurisation, assurant des environnements de développement et de production cohérents. Le contrôle de version et le développement collaboratif ont été gérés à l'aide de Git et GitHub, facilitant un travail d'équipe sans accroc."
          }
        },
        impact: {
          dataEnhancement: {
            title: "Amélioration des Données",
            content: "En mettant en œuvre cette solution, j'ai rempli plus de 42 000 lignes d'informations précises et à jour sur les visas, couvrant les réglementations de plus de 195 pays. L'exhaustivité de l'ensemble de données a été considérablement améliorée tout en maintenant une grande confiance dans l'exactitude des données. J'ai également amélioré la vitesse de récupération des données de 40% grâce à l'optimisation de l'indexation de la base de données et des performances des requêtes."
          },
          operationalEfficiency: {
            title: "Efficacité Opérationnelle",
            content: "Le pipeline automatisé a réduit les tâches de saisie manuelle des données de 85%, permettant à l'équipe de réaffecter des heures à d'autres fonctions critiques. L'amélioration de la précision et de la cohérence des données a conduit à une diminution de 25% des erreurs et des demandes de renseignements signalées par les utilisateurs."
          },
          userSatisfaction: {
            title: "Satisfaction des Utilisateurs",
            content: "Fournir aux utilisateurs des informations complètes et fiables sur les visas a amélioré l'expérience utilisateur globale et augmenté la confiance dans la plateforme."
          }
        },
        images: {
          architecture: {
            src: "/images/roam-architecture.png",
            alt: "Diagramme d'architecture système montrant le flux du pipeline de données",
            caption: "Diagramme d'architecture de haut niveau du pipeline de traitement des données Roam."
          },
          terminal: {
            src: "/images/roam-terminal.png",
            alt: "Sortie du terminal montrant le processus d'extraction avec barre de progression et gestion des erreurs",
            caption: "Sortie du terminal montrant le processus d'extraction avec barre de progression et gestion des erreurs."
          },
          dashboard: {
            src: "/images/roam-dashboard.png",
            alt: "Plan du projet montrant les étapes de la construction du pipeline de données",
            caption: "Plan du projet montrant les étapes de la construction du pipeline de données."
          },
          sheet: {
            src: "/images/roam-sheet.png",
            alt: "Données dans Google Sheet montrant la couverture des informations sur les visas à travers les pays",
            caption: "Données dans Google Sheet montrant la couverture des informations sur les visas à travers les pays."
          }
        }
      },
      projectB: {
        title: "Projet d'Internationalisation chez Roam.io",
        shortDescription: "Direction du développement d'une solution complète d'i18n, augmentant la pénétration du marché international de 50%",
        tags: ["Next.js", "i18n", "TypeScript", "OpenAI"],
        introduction: {
          content: "Chez Roam.io, j'ai dirigé le développement d'une solution complète d'internationalisation. J'ai analysé nos données utilisateurs et identifié qu'une part importante du trafic de notre plateforme de demande de visa provenait de pays non anglophones. Sur la base de cette observation, j'ai mis en œuvre une initiative stratégique de localisation pour étendre notre portée sur le marché."
        },
        technicalImplementation: {
          title: "Implémentation Technique",
          overview: "J'ai développé une architecture d'internationalisation personnalisée utilisant la Génération de Sites Statiques Next.js et un système de gestion de traduction basé sur Node.js. Mes principales implémentations techniques incluaient :",
          keyPoints: [
            "J'ai construit la génération de pages statiques pour plusieurs langues en utilisant Next.js SSG",
            "J'ai créé un pipeline de traduction automatisé utilisant l'API OpenAI GPT-4",
            "J'ai conçu un système de routage modulaire pour la diffusion de contenu spécifique à la langue",
            "J'ai mis en œuvre des optimisations SEO complètes incluant les balises hreflang"
          ]
        },
        codeExample: {
          title: "Système d'Automatisation de Traduction",
          description: "Système d'automatisation de traduction que j'ai développé en utilisant l'API GPT-4 d'OpenAI",
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
          title: "Résultats",
          introduction: "Grâce à ces implémentations, j'ai obtenu des améliorations significatives :",
          achievements: [
            "J'ai augmenté la pénétration du marché international de 50%",
            "J'ai réduit les taux de rebond pour les utilisateurs non anglophones de 45%",
            "J'ai amélioré les taux de conversion sur les nouveaux marchés de 30%",
            "J'ai maintenu des temps de chargement inférieurs à 2 secondes au niveau mondial"
          ]
        },
        technicalOutcomes: {
          title: "Résultats Techniques",
          content: "J'ai établi une base évolutive pour l'expansion internationale de Roam grâce à des flux de travail automatisés et des performances optimisées. Mon implémentation continue de soutenir la croissance de la plateforme avec des besoins de maintenance minimaux, tout en permettant l'ajout facile de nouvelles langues et fonctionnalités."
        },
        images: {
          langDropdown: {
            src: "/images/roam-lang-dropdown.png",
            alt: "Interface de sélection de langue",
            caption: "Sélecteur de langue personnalisé avec options spécifiques à la région et drapeaux."
          },
          translated: {
            src: "/images/roam-translated.png",
            alt: "Site web Roam montrant le contenu traduit en plusieurs langues",
            caption: "Traduction transparente du contenu à travers différentes locales."
          }
        }
      },
      projectC: {
        title: "Arrondissement de Londres d'Islington – Initiative de Recherche Communautaire",
        shortDescription: "Direction d'un projet de recherche communautaire complet pour améliorer les services publics et renforcer les relations communautaires",
        tags: ["Analyse de Données", "Recherche", "Gestion de Projet", "Secteur Public"],
        video: {
          src: "https://www.youtube.com/embed/hqi2ut09hVA",
          title: "Vidéo de Présentation du Projet",
          caption: "Aperçu de l'Initiative de Recherche Communautaire et de son impact."
        },
        introduction: {
          title: "Introduction",
          content: "Pendant mon temps à l'arrondissement de Londres d'Islington, j'ai reconnu un besoin pressant de mieux comprendre les besoins, préoccupations et priorités divers de nos résidents. Les données existantes étaient obsolètes et insuffisantes pour une élaboration de politiques éclairée et une allocation efficace des ressources. Déterminé à combler cette lacune, j'ai initié un projet de recherche communautaire complet pour recueillir des informations exploitables, améliorer les services publics et renforcer les relations communautaires."
        },
        action: {
          title: "Action",
          researchInitiative: {
            title: "Conception et Direction d'une Initiative de Recherche à Grande Échelle",
            projectPlanning: {
              title: "Planification du Projet et Obtention de l'Adhésion",
              content: "J'ai commencé par développer une proposition détaillée du projet décrivant les objectifs, les méthodologies, les calendriers et les besoins budgétaires. Pour obtenir l'adhésion de la direction générale et des parties prenantes clés, j'ai présenté un argumentaire convaincant soulignant l'impact potentiel sur le bien-être de la communauté et l'allocation efficace des ressources."
            },
            surveyDevelopment: {
              title: "Développement et Méthodologie de l'Enquête",
              content: "Pour nous assurer de recueillir des données complètes, j'ai conçu un instrument d'enquête couvrant des sujets tels que le logement, les soins de santé, l'éducation et les services sociaux. J'ai mené des tests pilotes avec 100 résidents pour affiner les questions et améliorer la clarté. Utilisant Qualtrics, j'ai créé et distribué l'enquête en ligne."
            },
            dataCollection: {
              title: "Collecte de Données Multi-Canaux et Coordination des Parties Prenantes",
              content: "Reconnaissant l'importance d'atteindre un public diversifié, j'ai coordonné avec divers départements et organisations communautaires pour déployer des enquêtes en ligne via les plateformes du conseil et les réseaux sociaux. J'ai organisé la distribution physique à travers les installations publiques et les événements communautaires. Pour engager les résidents non anglophones, j'ai collaboré avec des services de traduction et organisé des groupes de discussion en plusieurs langues."
            }
          }
        },
        impact: {
          title: "Impact",
          decisionMaking: {
            title: "Prise de Décision Basée sur les Données",
            content: "Les résultats de la recherche nous ont permis de développer 15 nouvelles initiatives politiques abordant les problèmes clés de la communauté. Nous avons réussi à rediriger plus de 2 millions de livres sterling du budget vers des zones sous-ressourcées. La mise en œuvre de nouveaux programmes basés sur la recherche a amélioré les services dans le logement, les soins de santé et l'éducation."
          },
          stakeholderRelations: {
            title: "Relations avec les Parties Prenantes",
            content: "En impliquant de multiples parties prenantes tout au long du projet, nous avons renforcé les relations au sein du conseil et avec des partenaires externes. Cette approche collaborative a conduit à une augmentation de 40% de la participation communautaire aux initiatives du conseil. Les résidents ont rapporté des niveaux plus élevés de satisfaction et de confiance envers le gouvernement local."
          }
        },
        skillsAndRelevance: {
          title: "Compétences Acquises et Pertinence pour l'Entreprise",
          projectManagement: {
            title: "Gestion de Projet Stratégique",
            content: "En dirigeant une équipe interfonctionnelle de 12 membres, j'ai perfectionné ma capacité à coordonner les efforts à travers les départements et avec des partenaires externes. L'application des méthodologies Agile a permis une adaptation du projet et une gestion efficace des flux de travail, des compétences directement transférables à la gestion de projets complexes dans le secteur privé."
          },
          stakeholderEngagement: {
            title: "Engagement des Parties Prenantes et Obtention de l'Adhésion",
            content: "Obtenir l'adhésion de la direction générale et des parties prenantes clés a été crucial pour le succès du projet. J'ai développé des stratégies de communication persuasives pour aligner des intérêts et priorités divers, une compétence essentielle pour piloter des initiatives au sein des entreprises et assurer le soutien des décideurs."
          },
          dataAnalytics: {
            title: "Analyse de Données et Génération d'Insights",
            content: "J'ai amélioré mes compétences en analyse statistique avancée en utilisant Python, R et SPSS. En utilisant des outils de visualisation de données comme Power BI et Tableau, j'ai transformé des données complexes en insights exploitables. Ces capacités sont cruciales dans le secteur privé pour prendre des décisions commerciales éclairées et développer des stratégies basées sur les données."
          },
          communication: {
            title: "Communication Efficace et Collaboration",
            content: "Gérer des relations complexes avec les parties prenantes a nécessité une communication claire et efficace. J'ai facilité la collaboration entre les départements et les organisations externes, assurant l'alignement sur les objectifs du projet. Cette expérience est précieuse dans tout environnement commercial où le travail en équipe interfonctionnel et la gestion des parties prenantes sont essentielles au succès."
          }
        },
        lessonsLearned: {
          title: "Leçons Apprises",
          content: "J'ai appris que l'engagement efficace nécessite des approches multi-canaux pour atteindre un public diversifié, qu'il s'agisse de clients, de clients ou d'équipes internes. Les boucles de rétroaction continues renforcent la pertinence et l'impact des initiatives, conduisant à de meilleurs résultats. Les efforts collaboratifs entre les départements et avec des partenaires externes aboutissent à des solutions plus complètes et durables, un principe qui est valable dans le secteur privé pour stimuler l'innovation et atteindre les objectifs commerciaux."
        },
        images: {
          survey: {
            src: "/images/community-survey.png",
            alt: "Membres de la communauté participant à l'enquête",
            caption: "Engagement des résidents complétant l'enquête lors d'un événement local."
          },
          gantt: {
            src: "/images/islington-gantt.png",
            alt: "Diagramme de Gantt pour le projet",
            caption: "Diagramme de Gantt illustrant le calendrier et les tâches du projet."
          }
        }
      },
      projectE: {
        title: "Flux de Demande de Visa Amélioré avec Gestion Sécurisée des Documents",
        shortDescription: "Développement d'un système de demande de visa complet avec stockage sécurisé des documents et capacités de réutilisation",
        tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe"],
        introduction: {
          title: "Introduction",
          content: "J'ai dirigé le développement d'une plateforme de demande de visa intuitive qui révolutionne la manière dont les utilisateurs gèrent leurs demandes et documents. Une innovation clé que j'ai introduite a été le système de stockage sécurisé des documents, garantissant que les utilisateurs n'ont plus besoin de télécharger le même document deux fois. Cela a considérablement simplifié le processus de demande tout en maintenant les normes de sécurité les plus élevées."
        },
        technicalImplementation: {
          title: "Implémentation Technique",
          coreTechnologies: {
            title: "Technologies Principales",
            items: [
              "Frontend : TypeScript, Next.js et React pour une interface utilisateur réactive",
              "Backend : Supabase pour le stockage sécurisé des documents et la gestion des utilisateurs",
              "Traitement des Paiements : Intégration de l'API Stripe pour des transactions sécurisées",
              "Sécurité : Chiffrement de bout en bout pour le stockage et la transmission des documents"
            ]
          },
          documentManagement: {
            title: "Fonctionnalités de Gestion des Documents",
            items: [
              "Coffre-fort sécurisé pour le stockage des informations sensibles",
              "Catégorisation et validation automatiques des documents",
              "Réutilisation intelligente des documents à travers plusieurs demandes",
              "Suivi automatique des dates d'expiration et notifications de renouvellement"
            ]
          }
        },
        applicationFlow: {
          title: "Flux de Demande",
          steps: {
            nationality: {
              title: "Étape 1 : Sélection de la Nationalité",
              content: "Les utilisateurs commencent leur parcours en sélectionnant leur nationalité, ce qui détermine les options de visa disponibles et les exigences en matière de documents.",
              image: {
                src: "/images/roam-flow-1.png",
                alt: "Étape 1 : L'utilisateur sélectionne sa nationalité",
                caption: "Étape 1 : Interface intuitive de sélection de la nationalité"
              }
            },
            visaType: {
              title: "Étape 2 : Sélection du Type de Visa",
              content: "En fonction de la nationalité, les utilisateurs se voient présenter les types de visa éligibles et leurs exigences.",
              image: {
                src: "/images/roam-flow-2.png",
                alt: "Étape 2 : Types de visa disponibles",
                caption: "Étape 2 : Présentation claire des options de visa disponibles"
              }
            },
            documents: {
              title: "Étape 3 : Gestion des Documents",
              content: "Les utilisateurs peuvent télécharger de nouveaux documents ou réutiliser ceux précédemment stockés, avec validation et catégorisation automatiques.",
              image: {
                src: "/images/roam-flow-3.png",
                alt: "Étape 3 : Interface de téléchargement des documents",
                caption: "Étape 3 : Système de gestion des documents simplifié"
              }
            }
          }
        },
        impact: {
          title: "Impact et Résultats",
          metrics: [
            "Augmentation des taux de complétion des demandes de 60%",
            "Réduction du temps de téléchargement des documents de 75%",
            "Amélioration des scores de satisfaction des utilisateurs de 45%",
            "Diminution des tickets de support liés aux problèmes de documents de 80%"
          ]
        },
        technicalSkills: {
          title: "Compétences Techniques Améliorées",
          skills: [
            "Développement avancé en TypeScript et Next.js",
            "Architecture de système de gestion sécurisée des documents",
            "Gestion d'état complexe dans les applications React",
            "Intégration de plusieurs APIs tierces",
            "Mise en œuvre de protocoles de sécurité robustes"
          ]
        },
        futureDevelopments: {
          title: "Développements Futurs",
          planned: [
            "Validation et vérification des documents alimentées par l'IA",
            "Partage amélioré des documents entre les demandes familiales",
            "Services automatiques de traduction des documents",
            "Application mobile pour le téléchargement des documents"
          ]
        },
        conclusion: {
          title: "Conclusion",
          content: "Ce projet démontre ma capacité à développer des systèmes complexes centrés sur l'utilisateur tout en maintenant des normes de sécurité élevées. Le système de gestion sécurisée des documents a transformé le processus de demande de visa, le rendant plus efficace et convivial tout en assurant les niveaux les plus élevés de protection des données."
        }
      }
    }
}; 