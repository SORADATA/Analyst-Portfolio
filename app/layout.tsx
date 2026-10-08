import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: 'Moussa SISSOKO | Data Analytics & Engineer',
  description:
    "Data Analytics & Engineer spécialisé en finance et en économie. Pipelines de données, modèles prédictifs et dashboards pour éclairer la décision stratégique.",
  keywords: [
    'Data Engineer',
    'Data Analyst',
    'Finance',
    'Airflow',
    'dbt',
    'Snowflake',
    'Power BI',
    'Machine Learning',
    'Moussa Sissoko',
  ],
  authors: [{ name: 'Moussa SISSOKO' }],
  openGraph: {
    title: 'Moussa SISSOKO | Data Analytics & Engineer',
    description:
      'Pipelines de données, modèles prédictifs et dashboards pour la finance et l’économie.',
    type: 'website',
    locale: 'fr_FR',
  },
  generator: 'v0.app',
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
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${plexMono.variable} scroll-smooth bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
