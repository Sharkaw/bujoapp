// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client"); //tällä toimii tarpeeksi pitkälle seed ei varsinaisesti vielä oikein

const prisma = new PrismaClient();

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: "alice@prisma.testi" },
        update: {},
        create: {
            email: "alice@prisma.testi",
            password: "aliceTesti1",
            name: "Alice",
            picture:
                "https://images.freeimages.com/image/previews/e84/buzzy-bean-girl-smiling-cartoon-png-5690326.png?fmt=webp&h=350",
            Bookshelf: {
                create: [
                    {
                        title: "My Favorite Notes",
                        description: "A collection of my favorite notes.",
                    },
                ],
            },
        },
    });

    const bob = await prisma.user.upsert({
        where: { email: "bob@prisma.testi" },
        update: {},
        create: {
            email: "bob@prisma.io",
            password: "bobTesti2",
            name: "Bob",
            Bookshelf: {
                create: [
                    {
                        title: "My life",
                        description: "A collection of my notes.",
                    },
                    {
                        title: "Working hard",
                        description: "A collection of my study notes.",
                    },
                ],
            },
        },
    });
    console.log({ alice, bob });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
