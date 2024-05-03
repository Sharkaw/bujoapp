import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
function testHandler(req) {
    return NextResponse.json({ message: 'Helloooo!' }, { status: 200 })
}

async function registerHandler(req) {
    const { userName, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username: userName,
                email: email,
                password: hashedPassword,
            },
        });
        return NextResponse.json({ id: user.id, username: user.username }, {status: 200});
    } catch (error) {
        console.error("Failed to register user:", error);
        return NextResponse.json({
            message: "Failed to register user",
            error: error.message,
        }, {status: 500});
    } finally {
        await prisma.$disconnect();
    }
}
// These have to be defined for the handlers to be accessible! These follow the same naming conventions as normal HTTP methods. -Petri
export { testHandler as GET};
export { registerHandler as POST};