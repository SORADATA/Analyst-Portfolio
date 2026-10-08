export const profile = {
  name: 'Moussa SISSOKO',
  role: 'Data Analytics & Engineer',
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
    role: 'Data & Analytics Engineer',
    period: '2025 — 2026',
    location: 'Paris',
    highlights: [
      'Construction et maintenance des pipelines de données (ETL).',
      'Automatisation des workflows avec Apache Airflow et structuration SQL.',
      'Gouvernance de la donnée et conception de dashboards stratégiques.',
    ],
  },
  {
    company: 'Banque de France',
    short: 'BdF',
    role: 'Data Analyst — Stage',
    period: 'Avr. — Août 2025',
    location: 'France',
    highlights: [
      'Développement d’outils NLP sur données bancaires (R Shiny).',
      'Analyses statistiques macroéconomiques pour appuyer les études internes.',
    ],
  },
  {
    company: 'CDEF Maine-et-Loire',
    short: 'CDEF',
    role: 'Gestionnaire Finances',
    period: 'Été 2023',
    location: 'Angers',
    highlights: [
      'Pilotage financier via Power BI.',
      'Modélisation budgétaire sous Excel et fiabilisation des flux comptables.',
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
    title: 'AlphaEdge — Allocation CAC 40',
    category: 'Finance quantitative · MLOps',
    summary:
      'Framework d’allocation d’actifs : feature engineering, détection de régimes de marché (K-Means), prédiction (XGBoost, LightGBM) et optimisation de portefeuille (Black-Litterman, CVaR, Sharpe, Sortino). Exécution automatisée et suivi des métriques en CI/CD.',
    stack: ['Python', 'XGBoost', 'PyPortfolioOpt', 'Streamlit', 'CI/CD'],
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

export const approach = [
  {
    step: 'Collecter & fiabiliser',
    text: 'Ingestion multi-sources, contrôles qualité et tests systématiques pour une donnée digne de confiance.',
  },
  {
    step: 'Modéliser',
    text: 'Modèles SQL documentés, statistiques rigoureuses et machine learning adapté au problème métier.',
  },
  {
    step: 'Restituer',
    text: 'Dashboards clairs et indicateurs actionnables pour éclairer la décision stratégique.',
  },
]
