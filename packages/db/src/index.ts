import { PrismaClient } from './generated/client/index.js';

export * from './generated/client/index.js';
export const prisma = new PrismaClient();
