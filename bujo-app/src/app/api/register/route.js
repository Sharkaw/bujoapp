import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { sessionOptions } from "@/app/lib/session";
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";

export async function POST(req) {
    const body = await req.json();
    const { username, email, password } = body;

    if (req.method !== "POST") {
        return new NextResponse(
            JSON.stringify({ message: "Method not allowed" }),
            { status: 405, headers: { "Content-Type": "application/json" } }
        );
    }

    try {
        const checkUser = await prisma.user.findFirst({
            where: { email },
        });

        if (checkUser) {
            return new NextResponse(
                JSON.stringify({ message: "User already exists" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                password: hashedPassword,
                email,
                username,
            },
        });

        const response = new NextResponse();

        try {
            const session = await getIronSession(req, response, sessionOptions);
            session.user = { id: user.id, email: user.email };
            await session.save();

            return new NextResponse(
                JSON.stringify({
                    message: "New user logged in",
                    id: user.id,
                    email: user.email,
                }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        } catch (error) {
            return new NextResponse(
                JSON.stringify({
                    message: "Login failed.",
                    error: error.message,
                }),
                {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
    } catch (error) {
        console.error("Failed to register user:", error);
        return new NextResponse(
            JSON.stringify({
                message: "Failed to register user",
                error: error.message,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    } finally {
        await prisma.$disconnect();
    }
}
