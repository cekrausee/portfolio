'use client'

import { Link } from '@/components/link'
import { ReactNode } from 'react'

const List = ({ children, label }: { children: ReactNode; label: string }) => (
  <div className='space-y-3'>
    <div>
      <label className='text-sm md:text-base'>{label}</label>
    </div>
    <ul className='space-y-1.5'>{children}</ul>
  </div>
)

export const Page = () => (
  <main className='flex h-min flex-col space-y-12'>
    <div className='space-y-3'>
      <h1 className='title'>
        Henrique
        <br />
        Software engineer
      </h1>
      <h2 className='p-[1px] text-sm md:pl-1 md:text-base'>
        <span>Coding for </span>
        <Link
          href='https://clinia.io'
          target='_blank'
          className='font-sans'
        >
          Clinia
        </Link>
        <span>. Based in Lisbon.</span>
      </h2>
    </div>
    <div className='space-y-6 p-[1px] md:pl-1'>
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
          <Link href='/next'>next</Link>
        </li>
      </List>
    </div>
  </main>
)
