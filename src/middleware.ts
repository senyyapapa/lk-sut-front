import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



const REFRESH_TOKEN_URL = '/api/refresh'

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname


  if (currentPath === '/login') {
    return NextResponse.next()
  }


  const accessToken = request.cookies.get('access_token')?.value

  if (accessToken === undefined || !accessToken) {

    const response = await fetch(`${request.nextUrl.origin}${REFRESH_TOKEN_URL}`, {
      method: 'GET',
      headers: {
        Cookie: `refresh_token=${request.cookies.get('refresh_token')?.value}`,
      },
      next: { tags: ['refresh'] },
    })

    if (response.status === 200) {
      const newAccessToken = response.headers.get('set-cookie')?.match(/access_token=([^;]+)/)?.[1]

      if (newAccessToken) {
        const redirectUrl = new URL(currentPath, request.url)
        return NextResponse.redirect(redirectUrl)
      }
    } else {

      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api|login).*)',
  ],
}
