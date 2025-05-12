import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Link = ({ className, ...props }: ComponentProps<typeof NextLink>) => (
  <NextLink
    className={twMerge('button', className)}
    {...props}
  />
)
