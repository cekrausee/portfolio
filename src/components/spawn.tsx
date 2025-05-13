'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export const Spawn = ({ children, className, triggeredByPathname }: { children: ReactNode; className?: string; triggeredByPathname?: boolean }) => {
  const pathname = usePathname()

  return (
    <AnimatePresence
      key={triggeredByPathname ? pathname : undefined}
      mode='popLayout'
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 15
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
