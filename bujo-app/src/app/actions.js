"use server";

import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "./lib/lib";
import { cookies } from "next/headers";
import { hashPassword, comparePassword } from "./lib/auth";
// import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const getSession = async () => {
    const session = await getIronSession(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return session;
};
export const login = async (formData) => {
    const session = await getSession();

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: formData.email,
        },
        select: {
            id: true,
            username: true,
            email: true,
            password: true,
        },
    });

    const match = await comparePassword(formData.password, user.password);

    if (match) {
        session.user = {
            id: user.id,
            email: user.email,
            username: user.username,
        };

        await session.save();

        // redirect("/register");
        return { succes: true, error: "User logger in" };
    } else {
        console.log("User could not bee logged in");
        return { succes: false, error: "Wrong credentials" };
    }
};
export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/");
};

export const registerUser = async (formData) => {
    const session = await getSession();
    const { email, password, username } = formData;

    const checkUser = await prisma.user.findFirst({
        where: { email },
    });

    if (checkUser) {
        return new NextResponse(
            JSON.stringify({ message: "User already exists" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            password: hashedPassword,
            email,
            username,
        },
    });

    session.user = { id: user.id, email: user.email, username: user.username };
    await session.save();
    await prisma.$disconnect();
};