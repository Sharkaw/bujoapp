import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { sessionOptions } from "@/app/lib/session";
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

        console.log("Attempting to find user with email:", email);
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
        console.log("User found:", user);

        const match = await bcrypt.compare(password, user.password);
        console.log("Password match:", match);

        if (match) {
            console.log("Creating session...");
            const response = NextResponse.next();

            try {
                const session = await getIronSession(
                    req,
                    response,
                    sessionOptions
                );
                session.user = { id: user.id, email: user.email };
                await session.save();
                console.log("Session saved:", session);

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
                console.error("Error saving session:", sessionError);
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
            console.log("Invalid credentials");
            return new NextResponse(
                JSON.stringify({ message: "Invalid credentials" }),
                {
                    status: 401,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
    } catch (error) {
        console.error("Error during login:", error);
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
