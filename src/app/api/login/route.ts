import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    const {email, password} = await req.json()

    try {
        const res = await axios.post('http://192.168.0.181:80/login', {
            email: email,
            password: password,
        })
        if (res.data == undefined) {
          return NextResponse.json({success : false, error: 'Ошибка авторизации'}, {status: 401})
        } 

          const {access_token, refresh_token} = res.data
          const response = NextResponse.json({success: true})
    response.headers.append(
      'Set-Cookie',
      `access_token=${access_token}; HttpOnly; Path=/; Max-Age=5; SameSite=Strict`
    )
    response.headers.append(
      'Set-Cookie',
      `refresh_token=${refresh_token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`
    )

    return response
    } catch(error) {
        console.log('Ошибка авторизации',error)
        return NextResponse.json(
      { success: false, error: 'Ошибка авторизации' },
      { status: 401 }
    )
    }

}
