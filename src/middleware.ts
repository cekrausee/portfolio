import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  if (process.env.NODE_ENV !== 'production' && req.nextUrl.pathname === '/next') notFound()
  return NextResponse.next()
}

export const config = { matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)' }
