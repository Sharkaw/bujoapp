"use server";

import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "./lib/lib";
import { cookies } from "next/headers";
import { hashPassword, comparePassword } from "./lib/auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

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
            picture: true,
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

        return { success: true, error: "User logger in" };
    } else {
        console.log("User could not bee logged in");
        return { success: false, error: "Wrong credentials" };
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

    const hashedPassword = hashPassword(password);
    const defaultPicture = "/profileimages/7.png";

    const user = await prisma.user.create({
        data: {
            password: hashedPassword,
            email,
            username,
            picture: defaultPicture,
        },
    });

    session.user = {
        id: user.id,
        email: user.email,
        username: user.username,
        picture: user.picture,
    };
    await session.save();
    await prisma.$disconnect();
};

export const checkIfEmailExists = async (userId, email) => {
    const checkUser = await prisma.user.findFirst({
        where: {
            email: email,
            NOT: {
                id: userId,
            },
        },
    });

    if (checkUser) {
        return { exists: true, message: "Email already exists" };
    } else {
        return { exists: false, message: "Email is available" };
    }
};

export const userHasJournals = async (userId) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                Bookshelf: {
                    take: 1,
                    include: {
                        journal: true,
                    },
                },
            },
        });

        if (!user || !user.Bookshelf.length) {
            return null;
        }

        return user.Bookshelf[0].journal;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getJournalById = async (journalId) => {
    try {
        const journal = await prisma.journal.findUnique({
            where: { id: journalId },
            include: {
                Notes_collection: {
                    include: {
                        Notes_item: true,
                    },
                },
                Sticky_notes_collection: {
                    include: {
                        Sticky_note_item: true,
                    },
                },
                To_do_lists_collection: {
                    include: {
                        To_do_list_item: true,
                    },
                },
                Calendar_collection: {
                    include: {
                        Calendar_item: true,
                    },
                },
            },
        });
        return journal;
    } catch (error) {
        console.error(error);
        return null;
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
    const session = await getSession();

    try {
        await prisma.user.update({
            where: { username: username },
            data: {
                username: formData.username,
                email: formData.email,
                // password: formData.password,
                picture: formData.picture,
            },
        });

        await session.save();
        revalidatePath("/profile");

        return { success: true, error: "User data updated" };
    } catch (error) {
        console.error("Failed to update user data:", error);
    } finally {
        await prisma.$disconnect();
    }
};

export const getNotesById = async (collectionId) => {
    try {
        const notes = await prisma.notes_collection.findUnique({
            where: { id: collectionId },
            include: {
                Notes_item: true,
            },
        });
        return notes;
    } catch (error) {
        console.error("Failed to get user notes:", error);
    } finally {
        await prisma.$disconnect();
    }
};
