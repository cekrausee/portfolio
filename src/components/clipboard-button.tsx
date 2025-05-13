'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'

export const ClipboardButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  return (
    <button
      onClick={() => {
        if (timeout.current) return

        navigator.clipboard.writeText(value)
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
  )
}
