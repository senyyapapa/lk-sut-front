import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh_token')?.value

  if (!refreshToken) {
    return NextResponse.json({ error: 'No refresh token' }, { status: 401 })
  }

  try {

    const res = await fetch('http://192.168.0.181:80/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to refresh token' }, { status: 401 })
    }

    const data = await res.json()


    const response = NextResponse.json(data)

    response.headers.append(
      'Set-Cookie',
      `access_token=${data.access_token}; HttpOnly; Path=/; Max-Age=900; SameSite=Strict`
    )

    return response
  } catch (error) {
    console.error('Error refreshing token:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
