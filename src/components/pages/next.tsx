'use client'

import { Link } from '@/components/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'

export const NextPage = () => {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  return (
    <main className='space-y-12'>
      <div className='space-y-3'>
        <h1 className='title font-mono'>next</h1>
        <h2 className='pl-1'>An utility package to bootstrap a Next.js project.</h2>
      </div>
      <div className='flex pl-1'>
        <div className='text-muted-foreground flex items-center justify-between gap-x-12 rounded-sm text-sm'>
          <span className='font-mono'>$ bunx @cekrause/next</span>
          <button
            onClick={() => {
              if (timeout.current) return

              setCopied(true)

              timeout.current = setTimeout(() => {
                setCopied(false)
                timeout.current = null
              }, 2500)
            }}
            className='hover:bg-accent focus-visible:bg-accent rounded-sm p-3 transition-colors'
          >
            <AnimatePresence
              key={copied ? 'copied' : 'to_copy'}
              mode='popLayout'
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {!copied && <Copy className='size-3' />}
                {copied && <Check className='size-3' />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      <Link
        href='https://github.com/cekrausee/next'
        target='_blank'
        className='pl-1'
      >
        Source
      </Link>
    </main>
  )
}
