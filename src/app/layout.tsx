import { MenuMobile } from '@/components/Navigation/MenuMobile'
import { Navbar } from '@/components/Navigation/Navbar'
import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/UI/Footer'

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
        <MenuMobile />

        <main className='min-h-screen' >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
