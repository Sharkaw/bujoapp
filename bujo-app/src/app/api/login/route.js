import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

async function POST(req) {
    console.log("Headers:", req.headers);
    const body = await req.json();
    console.log("Body:", body);

    const { email, password } = body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                email: true,
                password: true,
            },
        });

        if (user && (await bcrypt.compare(password, user.password))) {
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
