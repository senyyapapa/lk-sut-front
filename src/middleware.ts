import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {


  const access_token = request.cookies.get('access_token')?.value
  let refresh_token = request.cookies.get('refresh_token')?.value


  if (access_token) {
    try {
      const res = await fetch('http://31.134.144.194:80/checktoken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token }),
      })

      if (res.ok) {

        return NextResponse.next()
      }

    } catch (err) {
      console.error('Ошибка при проверке access_token:', err)
    }
  } else {
      try {
        const res = await fetch('http://31.134.144.194:80/refresh', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh_token }),
        })

        if (!res.ok) throw new Error('Ошибка обновления токена')

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



  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: [
    '/((?!_next|api|login).*)',
  ], 
}
