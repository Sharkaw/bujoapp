import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
async function POST(req) {
    console.log("Headers:", req.headers);
    const body = await req.json();
    console.log("Body:", body);

    const { username, password } = body;

    console.log("HERE", password);

    try {
        const user = await prisma.user.findUnique({
            where: {
                // email: email,
                username: username,
            },
            // select: {
            //     id: true,
            //     email: true,
            //     password: true,
            //     isLoggedIn: true,
            // },
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