import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { sessionOptions } from "@/app/lib/session";
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

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

        if (match) {
            const response = NextResponse.next();

            try {
                const session = await getIronSession(
                    req,
                    response,
                    sessionOptions
                );
                session.user = { id: user.id, email: user.email };

                await session.save();

                return new NextResponse(
                    JSON.stringify({
                        message: "User logged in",
                        id: user.id,
                        email: user.email,
                    }),
                    {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                    }
                );
            } catch (sessionError) {
                return new NextResponse(
                    JSON.stringify({
                        message: "Error saving session",
                        error: sessionError.message,
                    }),
                    {
                        status: 500,
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }
        } else {
            return new NextResponse(
                JSON.stringify({ message: "Invalid credentials" }),
                {
                    status: 401,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: "Login failed.", error: error.message }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}

export { POST };
