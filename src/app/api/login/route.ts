import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { env } from "process";



export async function POST(request: NextRequest) {
  const {email, password} = await request.json()

  try{
    const res = await axios.post(`${process.env.API_URL}/login`, 
      {
        email: email,
        password: password,
      }
    )

    const {access_token, refresh_token} = res.data
    if (access_token === undefined && refresh_token === undefined) {
      return NextResponse.json({error: "Пустые значения"})
    }
    const response = NextResponse.json({success: true})

    response.headers.append(
      'Set-Cookie',
      `access_token=${access_token}; HttpOnly; Path=/; Max-Age=${process.env.ACCESS_TOKEN_MAX_AGE}; SameSite=Strict`
    )
    response.headers.append(
      'Set-Cookie',
      `refresh_token=${refresh_token}; HttpOnly; Path=/; Max-Age=${process.env.REFRESH_TOKEN_MAX_AGE}; SameSite=Strict`
    )

    return response
  } catch(err) {
    console.error(err)
    return NextResponse.json(
      { success: false, error: 'Ошибка авторизации' },
      { status: 401 }
    )
  }
}
