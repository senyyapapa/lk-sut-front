import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { env } from "process";

export async function POST(request: NextRequest) {
  const access_token = await request.json();
  const res = await axios.post(`${process.env.API_KEY}/checktoken`, {
    access_token: access_token,
  });

  const status = res.status;
  const response = NextResponse.json({ status: status });
  return response;
}
