import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Metis Agency',
  description: 'Top Digital Agency in BD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>

      <NextTopLoader 
         color="#2865E9"
         initialPosition={0.08}
         crawlSpeed={200}
         height={3}
         crawl={true}
         speed={200}
         showSpinner={false}
         zIndex={1600}
        />
        {children}
        </body>
    </html>
  )
}
