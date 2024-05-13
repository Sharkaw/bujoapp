import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
async function GET(req) {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    const { username } = await req.body;

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

export { GET, POST };
