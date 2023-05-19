import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(data: any) {
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      image: data.image
    },
  })

  return newUser
}


export async function findUsers() {
  const users = await prisma.user.findMany()

  return users
}
