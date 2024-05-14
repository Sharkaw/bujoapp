import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

module.exports = {
    prisma: globalForPrisma.prisma || new PrismaClient(),
};

if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = module.exports.prisma;
