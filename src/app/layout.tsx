import './globals.scss'
import { Poppins } from 'next/font/google'

const inter = Poppins({
   subsets: ['latin-ext'], 
   weight: ['400', '500', '600'] 
})

export const metadata = {
  title: 'Matheus Ferreira',
  description: 'Portfolio Simples.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
