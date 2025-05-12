import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import './index.css'

export const metadata: Metadata = {
  title: 'cekrause',
  description: 'Software engineer. Based in Lisbon.'
}

const sans = localFont({
  src: '../assets/fonts/satoshi.ttf',
  variable: '--font-satoshi'
})

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body className={(sans.variable, mono.variable)}>
      {children}
      <Analytics />
    </body>
  </html>
)

export default Layout
