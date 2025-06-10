import prisma from "../config/prisma";

export const createUser = async (username: string, password: string) => {
  return prisma.user.create({ data: { username, password } });
};

export const findUserByUsername = async (username: string) => {
  return prisma.user.findUnique({ where: { username } });
};

export const findUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};
