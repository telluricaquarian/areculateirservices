import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PageLoader } from '@/components/PageLoader'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'A-La-Carte Automation Workflow Services',
  description: '5 Extremely Boring Services Your Business Actually Needs. Backed by Research & Studies.',
  generator: 'v0.app',
  icons: {
    icon:     '/roundedservicesfavicon.png?v=3',
    shortcut: '/roundedservicesfavicon.png?v=3',
    apple:    '/roundedservicesfavicon.png?v=3',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground lg:h-screen lg:overflow-hidden`}>
        <PageLoader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
