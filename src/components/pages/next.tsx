import { Link } from '@/components/link'
import { ClipboardButton } from '../clipboard-button'

export const NextPage = () => {
  const command = 'bunx @cekrause/next@latest'

  return (
    <main className='space-y-12'>
      <div className='space-y-3'>
        <h1 className='title font-mono'>next</h1>
        <h2 className='pl-0.5 text-sm md:text-base'>An utility package to bootstrap a Next.js project.</h2>
      </div>
      <div className='flex pl-0.5'>
        <div className='text-muted-foreground flex items-center justify-between gap-x-12 rounded-sm text-sm'>
          <span className='font-mono'>$ {command}</span>
          <ClipboardButton value={command} />
        </div>
      </div>
      <ul className='space-y-1.5'>
        <li>
          <Link
            href='https://github.com/cekrausee/next'
            target='_blank'
            className='pl-0.5'
          >
            Source
          </Link>
        </li>
        <li>
          <Link
            href={process.env.NODE_ENV === 'production' ? 'https://cekrause.eu' : '/'}
            className='pl-0.5'
          >
            Me
          </Link>
        </li>
      </ul>
    </main>
  )
}
