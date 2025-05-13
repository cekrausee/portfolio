import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const { host, pathname } = req.nextUrl

  if (!host.startsWith('localhost') && pathname === '/next') notFound()
  return NextResponse.next()
}

export const config = { matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)' }
