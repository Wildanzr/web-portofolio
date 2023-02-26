import './globals.css'

export const metadata = {
  title: 'Graita Sukma Febriansyah Triwildan Azmi',
  description: 'Graita Sukma Febriansyah Triwildan Azmi, a full-stack developer from Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
