import { Spawn } from '@/components/spawn'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { headers as Headers } from 'next/headers'
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

const Layout = async ({ children, index, next }: { children: ReactNode; index: ReactNode; next: ReactNode }) => {
  const production = process.env.NODE_ENV === 'production'
  const headers = await Headers()
  const host = headers.get('host')

  return (
    <html lang='en'>
      <body className={(sans.variable, mono.variable)}>
        <Spawn className='flex h-svh'>
          <div className='md:w-24 md:border-r md:border-dashed'>
            <div className='md:h-24 md:border-b md:border-dashed' />
          </div>
          <div className='flex-1'>
            <div className='md:h-24 md:border-b md:border-dashed' />
            <Spawn
              className='p-8'
              triggeredByPathname
            >
              {!production && children}
              {production && host === 'cekrause.eu' && index}
              {production && host === 'next.cekrause.eu' && next}
            </Spawn>
          </div>
        </Spawn>
        <Analytics />
      </body>
    </html>
  )
}

export default Layout
