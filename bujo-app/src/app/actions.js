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

        session.isLoggedIn = true;

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

export const userHasJournals = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                Bookshelf: {
                    include: {
                        journal: true,
                    },
                },
            },
        });

        if (user && user.Bookshelf && user.Bookshelf.length > 0) {
            const hasJournals = user.Bookshelf.some(
                (bookshelf) => bookshelf.journal && bookshelf.journal.length > 0
            );
            return hasJournals;
        }

        return false;
    } catch (error) {
        console.error("Failed to fetch user journals:", error);
        return false;
    } finally {
        await prisma.$disconnect();
    }
};

export const getUserData = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: id },
        });
        return user;
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    } finally {
        await prisma.$disconnect();
    }
};

export const UpdateUserData = async (username, formData) => {
    const session = getSession();

    try {
        const user = await prisma.user.update({
            where: { username: username },
            data: {
                username: formData.username,
                email: formData.email,
                // password: newPassword,
            },
        });

        await session.save();

        return { succes: true, error: "User data updated" };
    } catch (error) {
        console.error("Failed to update user data:", error);
    } finally {
        await prisma.$disconnect();
    }
};
