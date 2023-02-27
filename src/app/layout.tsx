import { ReactNode } from 'react'
import { GlobalProvider } from '@/contexts/Global'

import './globals.css'

export const metadata = {
  title: 'Graita Sukma Febriansyah Triwildan Azmi',
  description:
    'Graita Sukma Febriansyah Triwildan Azmi, a full-stack developer from Indonesia'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <GlobalProvider>
      <html
        lang="en"
        className="bg-main text-snow"
        style={{ scrollBehavior: 'smooth' }}
        id="theme"
      >
        <body>{children}</body>
      </html>
    </GlobalProvider>
  )
}
