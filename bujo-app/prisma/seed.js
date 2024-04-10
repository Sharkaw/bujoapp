// This is a seed file for Prisma

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const alice = await prisma.user.upsert;
    ({
        where: { email: "alice@example.test" },
        update: {},
        create: {
            username: "Alice",
            password: "securepassword",
            email: "alice@example.test",
            picture: "./public/1.png",
            Bookshelf: {
                create: [
                    {
                        title: "My Bookshelf",
                        description: "A collection of my journals.",
                        Journal: {
                            create: [
                                {
                                    title: "My Year 2024",
                                    Notes_collection: {
                                        create: [
                                            {
                                                title: "Studies",
                                                Notes_item: {
                                                    create: [
                                                        {
                                                            title: "Friday 16.",
                                                            content:
                                                                "Aliquam nunc est, porta quis placerat sed, consequat ac orci. Mauris eget nibh imperdiet, imperdiet turpis sed, ornare tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam diam tortor, vulputate ac turpis sed, interdum dignissim lacus. Nulla tempor luctus velit non dictum. Vestibulum congue in tellus a lobortis. Curabitur vehicula dolor id dolor tincidunt, ut eleifend risus facilisis. Aliquam pulvinar pretium pretium. Nullam luctus sodales sapien pharetra laoreet. Fusce nec imperdiet enim, ut egestas lacus. Nulla luctus nulla feugiat orci semper, eu viverra tortor facilisis. Suspendisse imperdiet eget felis eu tristique",
                                                        },
                                                        {
                                                            title: "Monday 25.",
                                                            content:
                                                                "Aliquam nunc est, porta quis placerat sed, consequat ac orci. Mauris eget nibh imperdiet, imperdiet turpis sed, ornare tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam diam tortor, vulputate ac turpis sed, interdum dignissim lacus. Nulla tempor luctus velit non dictum. Vestibulum congue in tellus a lobortis. Curabitur vehicula dolor id dolor tincidunt, ut eleifend risus facilisis. Aliquam pulvinar pretium pretium. Nullam luctus sodales sapien pharetra laoreet. Fusce nec imperdiet enim, ut egestas lacus. Nulla luctus nulla feugiat orci semper, eu viverra tortor facilisis. Suspendisse imperdiet eget felis eu tristique",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    Sticky_notes_collection: {
                                        create: [
                                            {
                                                title: "My Sticky Notes",
                                                Sticky_note_item: {
                                                    create: [
                                                        {
                                                            content:
                                                                "Remember the milk!",
                                                        },
                                                        {
                                                            content:
                                                                "Call Alyse.",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    title: "My Year 2023",
                                    Notes_collection: {
                                        create: [
                                            {
                                                title: "Studies",
                                                Notes_item: {
                                                    create: [
                                                        {
                                                            title: "Friday 16.",
                                                            content:
                                                                "Aliquam nunc est, porta quis placerat sed, consequat ac orci. Mauris eget nibh imperdiet, imperdiet turpis sed, ornare tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam diam tortor, vulputate ac turpis sed, interdum dignissim lacus. Nulla tempor luctus velit non dictum. Vestibulum congue in tellus a lobortis. Curabitur vehicula dolor id dolor tincidunt, ut eleifend risus facilisis. Aliquam pulvinar pretium pretium. Nullam luctus sodales sapien pharetra laoreet. Fusce nec imperdiet enim, ut egestas lacus. Nulla luctus nulla feugiat orci semper, eu viverra tortor facilisis. Suspendisse imperdiet eget felis eu tristique",
                                                        },
                                                        {
                                                            title: "Monday 25.",
                                                            content:
                                                                "Aliquam nunc est, porta quis placerat sed, consequat ac orci. Mauris eget nibh imperdiet, imperdiet turpis sed, ornare tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam diam tortor, vulputate ac turpis sed, interdum dignissim lacus. Nulla tempor luctus velit non dictum. Vestibulum congue in tellus a lobortis. Curabitur vehicula dolor id dolor tincidunt, ut eleifend risus facilisis. Aliquam pulvinar pretium pretium. Nullam luctus sodales sapien pharetra laoreet. Fusce nec imperdiet enim, ut egestas lacus. Nulla luctus nulla feugiat orci semper, eu viverra tortor facilisis. Suspendisse imperdiet eget felis eu tristique",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    Sticky_notes_collection: {
                                        create: [
                                            {
                                                title: "My Sticky Notes",
                                                Sticky_note_item: {
                                                    create: [
                                                        {
                                                            content:
                                                                "Remember the milk!",
                                                        },
                                                        {
                                                            content:
                                                                "Call Alyse.",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    });

    console.log(`Database has been seeded. 🌱`);
    console.log({ alice });
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
