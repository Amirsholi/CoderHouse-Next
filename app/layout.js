import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/ui/Header"
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commmerce',
  description: 'Mi E-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className} >
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
