import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/portfolio/theme-provider'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
})

const siteUrl = 'https://soradata.github.io/Analyst-Portfolio/'
// Sur GitHub Pages, le site vit dans un sous-dossier : les icônes doivent en tenir compte
const basePath = process.env.GITHUB_PAGES === 'true' ? '/Analyst-Portfolio' : ''
const shareImage = {
  url: `${siteUrl}og.png`,
  width: 1200,
  height: 630,
  alt: 'Moussa Sissoko, Data Analyst & Analytics Engineer : transformer la donnée en décisions fiables',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Moussa SISSOKO | Data Analyst & Analytics Engineer',
  description:
    'Data Analyst & Analytics Engineer. Pipelines de données fiables, modèles prédictifs et dashboards de pilotage, avec une expertise en finance et en économie.',
  keywords: [
    'Data Analyst',
    'Analytics Engineer',
    'Data Engineer',
    'SQL',
    'Python',
    'dbt',
    'Airflow',
    'Snowflake',
    'BigQuery',
    'Power BI',
    'ETL',
    'Machine Learning',
    'Paris',
    'Moussa Sissoko',
  ],
  authors: [{ name: 'Moussa SISSOKO' }],
  openGraph: {
    title: 'Moussa SISSOKO | Data Analyst & Analytics Engineer',
    description:
      'Pipelines de données, modèles prédictifs et dashboards pour piloter la performance et éclairer la décision.',
    url: siteUrl,
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Moussa Sissoko',
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moussa SISSOKO | Data Analyst & Analytics Engineer',
    description:
      'Pipelines de données, modèles prédictifs et dashboards pour piloter la performance et éclairer la décision.',
    images: [shareImage.url],
  },
  icons: {
    icon: [
      { url: `${basePath}/icon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/icon-light-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b14' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${jakarta.variable} ${plexMono.variable} scroll-smooth`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId="G-0LXZTSKX01" />
        )}
      </body>
    </html>
  )
}