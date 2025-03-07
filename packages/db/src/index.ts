import { PrismaClient } from './generated/client/index';

export * from './generated/client/index';
export const prisma = new PrismaClient();
