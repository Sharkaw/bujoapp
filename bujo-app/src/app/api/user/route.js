import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
async function POST(req) {
    const { username, email, password } = await req.json();
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                password: hashedPassword,
                email: email,
                username: username,
            },
        });
        // Suvi: Ready for setting up iron session
        // req.session.user = {
        //     id: user.id,
        //     username: user.username,
        //     isLoggedIn: true,
        // };
        await req.session.save();

        return NextResponse.json(
            { id: user.id, username: user.username },
            { status: 200 }
        );
    } catch (error) {
        console.error("Failed to register user:", error);
        return NextResponse.json(
            {
                message: "Failed to register user",
                error: error.message,
            },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

export { POST };
