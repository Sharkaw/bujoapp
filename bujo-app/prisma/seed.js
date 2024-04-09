// This is a seed file for Prisma

// const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const usersData = [
    {
        username: "Jane",
        password: "securepassword",
        email: "jane@example.testi",
        picture: "./public/1.png",
        Bookshelf: {
            create: [
                {
                    title: "My Favorite Books",
                    description: "A collection of my favorite books.",
                },
            ],
        },
    },
    {
        username: "Bob",
        password: "testi123",
        email: "bob@example.testi",
        picture: "./public/2.png",
        Bookshelf: {
            create: [
                {
                    title: "Year 2024",
                    description: "Collection of notes from year 2024",
                },
                {
                    title: "Year 2023",
                    description: "Collection of notes from year 2023",
                },
            ],
        },
    },
];

async function main() {
    const userCreationPromises = usersData.map((userData) =>
        prisma.user.create({
            data: userData,
            include: {
                Bookshelf: true,
            },
        })
    );

    const users = await Promise.all(userCreationPromises);
    console.log(users);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
