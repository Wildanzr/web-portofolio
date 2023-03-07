import { ReactNode } from 'react'
import { GlobalProvider } from '@/contexts/Global'

import './globals.css'

export const metadata = {
  title: 'Graita Sukma Febriansyah Triwildan Azmi',
  description:
    'Graita Sukma Febriansyah Triwildan Azmi, a full-stack developer from Indonesia',
  keywords: 'Graita Sukma Febriansyah Triwildan Azmi, Graita Sukma Febriansyah, Wildanz Reyz, Wildanzreyz, Wildan, Graita, Sukma, Febriansyah, Triwildan, Azmi, Graita Sukma, Graita Sukma Febriansyah, Graita Sukma Febriansyah Triwildan',
  abstract: 'Graita Sukma Febriansyah Triwildan Azmi, a full-stack developer from Indonesia',
  applicationName: "Wildan's Portfolio",
  authors: [{ name: 'Graita Sukma Febriansyah Triwildan Azmi', url: 'https://wildanzr.my.id' }],
  creator: 'Graita Sukma Febriansyah Triwildan Azmi',
  publisher: 'Vercel',
  viewport: 'width=device-width, initial-scale=1',
  twitter: {
    siteId: '@wildanzr24',
    creatorId: '@wildanzr24',
    card: 'summary_large_image',
    site: '@wildanzr24',
    creator: '@wildanzr24',
    title: 'Graita Sukma Febriansyah Triwildan Azmi',
    description: 'Graita Sukma Febriansyah Triwildan Azmi, a full-stack developer from Indonesia',
    images: 'https://wildanzr.my.id/images/me.png'
  }
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-main text-snow"
      style={{ scrollBehavior: 'smooth' }}
      id="theme"
    >
      <GlobalProvider>
        <body>{children}</body>
      </GlobalProvider>
    </html>
  )
}
