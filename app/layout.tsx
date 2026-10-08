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
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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