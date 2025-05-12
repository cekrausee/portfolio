'use client'

import { Link } from '@/components/link'
import { ReactNode } from 'react'

const List = ({ children, label }: { children: ReactNode; label: string }) => (
  <div className='space-y-1.5'>
    <div>
      <label>{label}</label>
    </div>
    <ul>{children}</ul>
  </div>
)

const Page = () => (
  <div className='flex max-h-svh min-h-svh'>
    <div className='dashed w-24 border-r'>
      <div className='dashed h-24 border-b' />
    </div>
    <div className='flex-1'>
      <div className='dashed h-24 w-full border-b' />
      <div className='p-8'>
        <main className='h-min space-y-8'>
          <div className='space-y-3'>
            <h1 className='text-6xl leading-tight'>
              Henrique
              <br />
              Software engineer
            </h1>
            <h2 className='pl-[3px]'>
              Coding for{' '}
              <Link
                href='https://clinia.io'
                target='_blank'
                className='font-sans'
              >
                Clinia
              </Link>
              . Based in Lisbon.
            </h2>
          </div>
          <div className='space-y-6 pl-[3px]'>
            <List label='Social'>
              <li>
                <Link
                  href='https://github.com/cekrausee'
                  target='_blank'
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/in/cekrause/'
                  target='_blank'
                >
                  LinkedIn
                </Link>
              </li>
            </List>
            <List label='Code'>
              <li>
                <Link
                  href='https://www.npmjs.com/package/@cekrause/next'
                  target='_blank'
                >
                  next
                </Link>
              </li>
            </List>
          </div>
        </main>
      </div>
    </div>
  </div>
)
export default Page
