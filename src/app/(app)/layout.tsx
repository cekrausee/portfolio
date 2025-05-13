import { Spawn } from '@/components/spawn'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { headers } from 'next/headers'
import { ReactNode } from 'react'
import './index.css'

export const metadata: Metadata = {
  title: 'cekrause',
  description: 'Software engineer. Based in Lisbon.'
}

const sans = localFont({
  src: '../../assets/fonts/satoshi.ttf',
  variable: '--font-satoshi'
})

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

const Layout = async ({ children, index, next }: { children: ReactNode; index: ReactNode; next: ReactNode }) => {
  const h = await headers()
  const host = h.get('host')

  return (
    <html lang='en'>
      <body className={(sans.variable, mono.variable)}>
        <Spawn className='flex h-svh'>
          <div className='w-24 border-r border-dashed'>
            <div className='h-24 border-b border-dashed' />
          </div>
          <div className='flex-1'>
            <div className='h-24 w-full border-b border-dashed' />
            <Spawn
              className='p-8'
              triggeredByPathname
            >
              {host?.startsWith('localhost') && children}
              {host === 'cekrause.eu' && index}
              {host === 'next.cekrause.eu' && next}
            </Spawn>
          </div>
        </Spawn>
        <Analytics />
      </body>
    </html>
  )
}

export default Layout
