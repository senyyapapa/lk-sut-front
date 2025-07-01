import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'

export async function POST(request: NextRequest) {
    const access_token =  await     request.json()
    const res = await axios.post('http://192.168.0.181:80/checktoken', 
        {
            access_token: access_token,
        }
    )

    const status = res.status
    const response = NextResponse.json({status: status})
    return response 
}
