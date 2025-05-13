import { NextRequest, NextResponse } from 'next/server'

const origins = ['https:/cekrause.eu', 'https://next.cekrause.eu']

const setHeaders = (res: NextResponse, origin: string) => {
  if (!origins.includes(origin)) return

  res.headers.set('Access-Control-Allow-Origin', origin)
  res.headers.set('Access-Control-Allow-Credentials', 'true')
  res.headers.set('Access-Control-Allow-Methods', 'GET')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

export const middleware = (req: NextRequest) => {
  const { origin, pathname } = req.nextUrl
  let res: NextResponse<unknown>

  if (process.env.NODE_ENV === 'production' && pathname === '/next') res = NextResponse.redirect('https://next.cekrause.eu')
  else res = NextResponse.next()

  setHeaders(res, origin)

  return res
}

export const config = { matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)' }
