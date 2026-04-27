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
  title: 'Areculateir — Premium Web & Automation Systems for Local Business',
  description: 'Areculateir builds premium websites and automation systems for local businesses losing revenue to slower, better-looking competitors. Founded by Llewellyn Y. Fisher, Sydney.',
  metadataBase: new URL('https://areculateirservices.vercel.app'),
  openGraph: {
    title: 'Areculateir — Premium Web & Automation Systems',
    description: 'We build premium sites and automation systems for local businesses that deserve to look as good as they actually are. Founded by Llewellyn Y. Fisher.',
    url: 'https://areculateirservices.vercel.app',
    siteName: 'Areculateir',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areculateir — Premium Web & Automation Systems',
    description: 'Premium websites and automation systems for local businesses. Founded by Llewellyn Y. Fisher, Sydney AU.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/roundedservicesfavicon.png?v=3',
    shortcut: '/roundedservicesfavicon.png?v=3',
    apple: '/roundedservicesfavicon.png?v=3',
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
