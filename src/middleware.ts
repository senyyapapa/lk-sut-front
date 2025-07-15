import { NextRequest, NextResponse } from 'next/server'

async function refreshToken(request: NextRequest, refreshTokenValue: string) {
  try {

    const res = await fetch(`${process.env.API_URL}/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshTokenValue }),
      signal: AbortSignal.timeout(Number(process.env.FETCH_TIMEOUT))
    })

    if (!res.ok) {
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('refresh_token')
      return response
    }

    const { access_token: newAccessToken, refresh_token: newRefreshToken } = await res.json()

    const response = NextResponse.next()
    response.cookies.set({
      name: 'access_token',
      value: newAccessToken,
      httpOnly: true,
      path: '/',
      maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
      sameSite: 'strict',
    })
    response.cookies.set({
      name: 'refresh_token',
      value: newRefreshToken,
      httpOnly: true,
      path: '/',
      maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
      sameSite: 'strict',
    })

    return response
  } catch (err) {
    console.error('Ошибка при обновлении токенов в middleware:', err)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')?.value
  const refreshTokenValue = request.cookies.get('refresh_token')?.value

  if (!accessToken) {
    if (refreshTokenValue) {
      return await refreshToken(request, refreshTokenValue)
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const res = await fetch(`${process.env.API_URL}/checktoken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_token: accessToken }),
      signal: AbortSignal.timeout(Number(process.env.FETCH_TIMEOUT))
    })

    if (res.ok) {
      return NextResponse.next()
    }

    if (refreshTokenValue) {
      return await refreshToken(request, refreshTokenValue)
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }

  } catch (err) {
    console.error('Ошибка при проверке access_token:', err)
    if (refreshTokenValue) {
      return await refreshToken(request, refreshTokenValue)
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
}
