"use server"
import { getIronSession } from "iron-session";

import {getSession } from "@/app/actions"

// const prisma = new PrismaClient();

// export const getSession = async () => {
//     const session = await getIronSession(cookies(), sessionOptions);

//     if (!session.isLoggedIn) {
//         session.isLoggedIn = defaultSession.isLoggedIn;
//     }

//     return session;
// };

export const test = async (userId) => {
    const session = await getSession();
    // session.user.journals = "pöö";
    // session.user.journals = ["yksiö", "kaksio"];
    // session.user.bookshelf = "313";
    // session.user = {
    //     seppo: "pöö",
    // }
    await session.save();
    console.log("test");
    console.log(session.user.journals);
    console.log(session.user.bookshelf);
};