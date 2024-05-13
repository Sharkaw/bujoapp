import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

async function POST(req) {
    const body = await req.json();
    console.log("Body:", body);

    const { email, password } = body;

    try {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                email: email,
            },
            select: {
                id: true,
                username: true,
                email: true,
                password: true,
            },
        });

        const match = await bcrypt.compare(password, user.password);

        if (user && match) {
            return NextResponse.json(
                { id: user.id, email: user.email },
                { status: 200 }
            );
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (error) {
        throw new Error("Login failed.");
    }
}

export { POST };
