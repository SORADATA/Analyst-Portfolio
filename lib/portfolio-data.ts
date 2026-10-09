export const profile = {
  name: 'Moussa SISSOKO',
  role: 'Data Analyst & Analytics Engineer',
  focus: 'Finance & Économie',
  email: 'sissokomoussa611@gmail.com',
  github: 'https://github.com/SORADATA',
  cv: 'https://drive.google.com/file/d/1kAiQGEpQX7gRSh-k1NaBseyeRxMCACtH/view?usp=drive_link',
  location: 'Paris, France',
}

export const expertise = [
  {
    id: '01',
    title: 'Data Engineering',
    description:
      'Conception de pipelines ETL/ELT fiables, modélisation SQL et orchestration des flux de bout en bout.',
    tools: ['SQL', 'Apache Airflow', 'dbt', 'Snowflake', 'BigQuery', 'GCP'],
  },
  {
    id: '02',
    title: 'Analytics & NLP',
    description:
      'Analyse statistique avancée, économétrie et traitement du langage naturel appliqués aux données financières.',
    tools: ['Python', 'R', 'Pandas', 'SAS', 'Text Mining'],
  },
  {
    id: '03',
    title: 'Machine Learning',
    description:
      'Modèles prédictifs, scoring de risque, détection de régimes et clustering, industrialisés en CI/CD.',
    tools: ['scikit-learn', 'XGBoost', 'LightGBM', 'K-Means', 'MLOps'],
  },
  {
    id: '04',
    title: 'Business Intelligence',
    description:
      'Tableaux de bord décisionnels pour piloter la performance et rendre la donnée actionnable.',
    tools: ['Power BI', 'DAX', 'Tableau', 'R Shiny', 'Apache Superset', 'Streamlit'],
  },
]

export const experiences = [
  {
    company: "Ministère de l'Économie et des Finances",
    short: 'MEF',
    role: 'Data & Analytics Engineer — Alternance',
    period: '2025 — Août 2026',
    location: 'Paris',
    highlights: [
      'Ai conçu et mis en production plus de 4 pipelines de données de bout en bout, orchestrés avec Apache Airflow, de la collecte multi-sources (API, applications métiers, tableurs collaboratifs) jusqu’à la base décisionnelle.',
      'Ai assuré le suivi, la maintenance et l’évolution des pipelines en production : correctifs, gestion des partitions, évolutions de configuration et fiabilisation continue.',
      'Ai structuré les données en modèles SQL versionnés avec Git, couverts par des contrôles qualité automatisés et une documentation maintenue à jour.',
      'Ai contribué à l’architecture cible (traitement, base décisionnelle PostgreSQL, datavisualisation) et livré des tableaux de bord de pilotage aux équipes métiers.',
    ],
  },
  {
    company: 'Banque de France',
    short: 'BdF',
    role: 'Data Analyst — Stage',
    period: 'Avr. — Août 2025',
    location: 'France',
    highlights: [
      'Ai développé une application R Shiny de text mining pour exploiter des corpus de documents bancaires (exploration, scoring de sentiment, synthèse d’insights).',
      'Ai mené des analyses statistiques et macroéconomiques pour appuyer les études internes et éclairer la décision.',
      'Ai structuré et documenté les traitements pour les rendre reproductibles par les équipes.',
    ],
  },
  {
    company: 'CDEF Maine-et-Loire',
    short: 'CDEF',
    role: 'Gestionnaire Finances',
    period: 'Été 2023',
    location: 'Angers',
    highlights: [
      'Ai assuré le pilotage financier via des tableaux de bord Power BI.',
      'Ai construit des modèles budgétaires sous Excel et fiabilisé les flux comptables.',
    ],
  },
]

export const education = [
  {
    degree: "Master Expertise Statistique pour l'Économie et la Finance",
    school: 'Université de Lorraine',
    period: '2024 — 2026',
  },
  {
    degree: 'Licence Économie & Gestion',
    school: "Université d'Angers",
    period: '2022 — 2024',
  },
]

export type Project = {
  title: string
  category: string
  summary: string
  stack: string[]
  repo?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'AlphaEdge — Portefeuille multi-marchés',
    category: 'Finance quantitative · MLOps',
    summary:
      'Système quantitatif multi-marchés (CAC 40, NASDAQ, marchés émergents) : un ensemble empilé (XGBoost, LightGBM, Ridge calibré) estime chaque mois la probabilité de hausse de chaque action, puis alimente un portefeuille Black-Litterman sous contrainte de risque (CVaR 95 %, covariance Ledoit-Wolf). Validation anti-fuite temporelle (purged CV avec embargo, walk-forward) et pipeline quotidien automatisé via GitHub Actions. Chaque marché se configure par un simple fichier, et un nouveau modèle n’est mis en production que s’il bat le champion (registre MLflow, test shadow).',
    stack: [
      'Python',
      'XGBoost',
      'LightGBM',
      'Optuna',
      'MLflow',
      'PyPortfolioOpt',
      'GitHub Actions',
      'Streamlit',
    ],
    repo: 'https://github.com/SORADATA/Alphaedge-quant-analytics',
    demo: 'https://cac40-smart-portfolio-asset.streamlit.app/',
    featured: true,
  },
  {
    title: 'Banking Analytics & Scoring',
    category: 'Data Engineering',
    summary:
      'Architecture ELT transformant des données bancaires brutes en KPIs financiers fiables : scoring de valeur, segmentation de risque et ratios de liquidité, avec tests automatisés.',
    stack: ['dbt Core', 'Snowflake', 'SQL', 'CI/CD'],
    repo: 'https://github.com/SORADATA/dbt-snowflake-banking-analytics',
  },
  {
    title: 'Quant Risk — VaR & CVaR',
    category: 'Gestion des risques',
    summary:
      'Moteur de risque multi-actifs : VaR/CVaR historique et Monte Carlo, stress tests et backtesting pour valider la couverture en conditions extrêmes (fat tails).',
    stack: ['Python', 'NumPy', 'Monte Carlo', 'Backtesting'],
    repo: 'https://github.com/SORADATA/Risk-Management',
  },
  {
    title: 'NYC Yellow Taxi ETL',
    category: 'Data Engineering',
    summary:
      'Pipeline de bout en bout : ingestion, contrôle qualité, typage et features, puis chargement dans BigQuery orchestré par Airflow pour alimenter la BI.',
    stack: ['Airflow', 'BigQuery', 'Python', 'GCP'],
    repo: 'https://github.com/SORADATA/New-York-Yellow-taxi-ETL',
  },
  {
    title: 'Text Mining App',
    category: 'NLP · Dataviz',
    summary:
      'Application R Shiny interactive : exploration de corpus, scoring de sentiment et synthèse d’insights pour accélérer l’analyse de retours clients et de documents.',
    stack: ['R', 'Shiny', 'NLP'],
    repo: 'https://github.com/SORADATA/shiny-text-mining-app',
    demo: 'https://0qbv48-sissoko-moussa.shinyapps.io/Analytics_text/',
  },
  {
    title: 'AuraContent',
    category: 'IA générative · Automatisation',
    summary:
      'Usine de contenu entièrement automatisée qui transforme des sujets tendances en YouTube Shorts via Gemini, Edge-TTS et un montage FFmpeg dynamique.',
    stack: ['Python', 'Gemini AI', 'FFmpeg', 'Streamlit'],
    repo: 'https://github.com/SORADATA/AuraContent',
    demo: 'https://ai-youtube-shorts-generator.streamlit.app/',
  },
]

export type ApproachStep = {
  step: string
  text: string
  points: string[]
  tools: string[]
  deliverable: string
}

export const approach: ApproachStep[] = [
  {
    step: 'Collecter & structurer',
    text: 'Je rassemble des sources hétérogènes dans un socle unique et maîtrisé.',
    points: [
      'Applications métiers, tableurs collaboratifs et sources externes via API',
      'Dépôt de fichiers et stockage objet pour les exports manuels',
      'Extraction planifiée et reproductible, sans intervention manuelle',
    ],
    tools: ['APIs REST', 'Grist', 'MinIO', 'Python'],
    deliverable: 'Données brutes centralisées et traçables',
  },
  {
    step: 'Traiter & fiabiliser',
    text: 'Je transforme la donnée en base décisionnelle documentée et testée.',
    points: [
      'Pipelines ETL orchestrés avec Apache Airflow',
      'Modèles SQL versionnés avec Git, tests qualité automatisés',
      'Base décisionnelle PostgreSQL et documentation à jour',
    ],
    tools: ['Apache Airflow', 'PostgreSQL', 'SQL', 'dbt', 'Git'],
    deliverable: 'Base décisionnelle fiable et documentée',
  },
  {
    step: 'Restituer & exploiter',
    text: 'Je rends la donnée lisible et utile à la décision.',
    points: [
      'Tableaux de bord clairs, indicateurs actionnables',
      'Statistiques et machine learning adaptés au problème métier',
      'Accès autonome pour les équipes métiers',
    ],
    tools: ['Dataviz', 'Power BI', 'Streamlit', 'Superset'],
    deliverable: 'Dashboards de pilotage pour la décision',
  },
]