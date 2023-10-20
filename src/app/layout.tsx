import { Navbar } from '@/components/Navigation/Navbar'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valorant Guide',
  description: 'Entenda mais sobre Valorant e seus agentes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className='scroll-smooth'>
      <body className='bg-brand-white-100 text-brand-gray-500 scrollbar-thin scrollbar-thumb-brand-red-500 scrollbar-track-brand-gray-800' >
        <Navbar />

        <main className='min-h-screen pb-10' >
          {children}
        </main>
      </body>
    </html>
  )
}
