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

// export const userHasJournals = async (userId) => {
//     try {
//       const user = await prisma.user.findUnique({
//         where: {
//           id: userId,
//         },
//         include: {
//           Bookshelf: {
//             take: 1, 
//             include: {
//               journal: true,
//             },
//           },
//         },
//       });
  
//       console.log("user: " + user);
//       console.log("user.Bookshelf: " + user.Bookshelf);
//         console.log("user.Bookshelf.journal: " + user.Bookshelf.journal);
//       if (!user || !user.Bookshelf.length) {
//         return null;
//       }
  
//      return user.Bookshelf.journal;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   }; 

export const userHasJournals = async (userId) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                Bookshelf: {
                    include: {
                        journal: true,
                    },
                },
            },
        });
        // console.log("user: " + user);
        // console.log("user.Bookshelf: " + user.Bookshelf);
        // console.log("user.Bookshelf.journal: ");
        // console.log(user.Bookshelf[0].journal);
        if (!user || !user.Bookshelf || user.Bookshelf[0].journal.length === 0) {
            return null; //tai false?
        }

        // return user.Bookshelf[0].journal;
        return user.Bookshelf[0].journal;
    } catch (error) {
        console.error("Error: ", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
};

// export const userHasJournals = async (username) => {
//     try {
//         const user = await prisma.user.findUnique({
//             where: { username },
//             include: {
//                 Bookshelf: {
//                     include: {
//                         journal: true,
//                     },
//                 },
//             },
//         });

//         if (user && user.Bookshelf && user.Bookshelf.length > 0) {
//             const hasJournals = user.Bookshelf.some(
//                 (bookshelf) => bookshelf.journal && bookshelf.journal.length > 0
//             );
//             return hasJournals;
//         }

//         return false;
//     } catch (error) {
//         console.error("Failed to fetch user journals:", error);
//         return false;
//     } finally {
//         await prisma.$disconnect();
//     }
// };

export const getToDoListItems = async (userId, toDoListID) => {
    try {
        // const allUsers = await prisma.To_do_list_item.findMany();
        // const user = await prisma.user.findUnique({
        //     where: { username },
        //     include: {
        //         Bookshelf: {
        //             include: {
        //                 journal: true,
        //             },
        //         },
        //     },
        // });
        // const user = await prisma.user.findUnique({
        //     where: {
        //         id: userId,
        //     },
        //     include: {
        //         Bookshelf: {
        //             include: {
        //                 journal: true,
        //             },
        //         },
        //     },
        // });
        // const bookshelf = await prisma.bookshelf.findMany({
        //     where: {
        //         userId: userId,
        //     },
        //     include: {
        //         journal: {
        //             include: {
        //                 todolist: true,
        //             },
        //         },
                
        //         // To_do_lists_collection: {
        //         //     title: true,
        //         // },
        //     },
        // });
        
        const bookshelf = await prisma.bookshelf.findMany({
            where: {
                userId: userId,
            },
            include: {
                journal: {
                    include: {
                        To_do_lists_collection: {
                            where: {
                                id: "333",
                            },
                        },
                    },
                },
                
                // To_do_lists_collection: {
                //     title: true,
                // },
            }
        });
        console.log("bookshelf");
        console.log(bookshelf);
        console.log(bookshelf[0].journal.To_do_lists_collection);
        // console.log(bookshelf.journal.todolist);
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                Bookshelf: {
                    include: {
                        journal: {
                            include: {
                                To_do_lists_collection: {
                                    include: {
                                        To_do_list_item: {
                                            // where: {
                                            //     id: "333",
                                            // },
                                            include: {
                                                // To_do_list_item: true,
                                                To_do_list_item: {
                                                    where: {
                                                        to_do_lists_collectionId: "333",
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            }
                        },
                    },
                },
            },
        });

        console.log("user");
        console.log(user);
        console.log("journal");
        console.log(user.Bookshelf[0].journal);
        console.log("muuta");
        // console.log(user.Bookshelf[0].journal.To_do_lists_collection);
        // console.log(user.Bookshelf[0].journal[0].to_do_list_collection);
        // user.Bookshelf[0].journal.To_do_lists_collection.map((journal, index) => {
        //     console.log("tes" + index);
        // });
        // console.log("user: " + user);
        // console.log(user.Bookshelf[0].journal);
        // console.log("user.Bookshelf.journal: " + user.Bookshelf.journal);
        // const listTask = await prisma.To_do_list_item.findMany({
        //     where: { 
        //         to_do_lists_collectionId: "333"
        //      },
        // });
        // console.log(listTask);
        // const user = await prisma.user.findUnique({
        //     where: { username },
        //     include: {
        //         Bookshelf: {
        //             include: {
        //                 journal: true,
        //             },
        //         },
        //     },
        // });

        // if (user && user.Bookshelf && user.Bookshelf.length > 0) {
        //     const hasJournals = user.Bookshelf.some(
        //         (bookshelf) => bookshelf.journal && bookshelf.journal.length > 0
        //     );
        //     return hasJournals;
        // }

        // return false;
    } catch (error) {
        console.error("Failed to fetch user journals:", error);
        return false;
    } finally {
        await prisma.$disconnect();
    }
};