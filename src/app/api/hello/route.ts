
import { NextResponse } from 'next/server'
import { createUser, findUsers } from '@/repository/user'

export async function POST(req: Request) {
  const res = await req.json()

  const users = createUser(res)

  return NextResponse.json(users)
}


export async function GET() {

  const users = await findUsers()

  console.log(users)

  return NextResponse.json(users)
}
