// This is a seed file for Prisma

import { prisma } from "@/app/lib/prisma";

async function main() {
    const alice = await prisma.user.upsert({
        where: {
            email: "alice@example.test",
            username: "Alice",
        },
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
                        journal: {
                            create: [
                                //first journal
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
                                                        {
                                                            title: "Wednesday 30.",
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
                                    To_do_lists_collection: {
                                        create: [
                                            {
                                                title: "Shopping list",
                                                To_do_list_item: {
                                                    create: [
                                                        {
                                                            content: "Milk",
                                                            status: true,
                                                        },
                                                        {
                                                            content: "Cheese",
                                                            status: false,
                                                        },
                                                        {
                                                            content: "Apples",
                                                            status: false,
                                                        },
                                                        {
                                                            content:
                                                                "Chocolate",
                                                            status: true,
                                                        },
                                                        {
                                                            content: "Bread",
                                                            status: true,
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    Calendar_collection: {
                                        create: [
                                            {
                                                title: "January",
                                                Calendar_item: {
                                                    create: [
                                                        {
                                                            title: "Meeting",
                                                            content:
                                                                "Meeting with Matt 14:15.",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },

                                //Second journal
                                {
                                    title: "My Year 2023",
                                    Notes_collection: {
                                        create: [
                                            {
                                                title: "Nice days",
                                                Notes_item: {
                                                    create: [
                                                        {
                                                            title: "At the beach",
                                                            content:
                                                                "Aliquam nunc est, porta quis placerat sed, consequat ac orci. Mauris eget nibh imperdiet, imperdiet turpis sed, ornare tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam diam tortor, vulputate ac turpis sed, interdum dignissim lacus. Nulla tempor luctus velit non dictum. Vestibulum congue in tellus a lobortis. Curabitur vehicula dolor id dolor tincidunt, ut eleifend risus facilisis. Aliquam pulvinar pretium pretium. Nullam luctus sodales sapien pharetra laoreet. Fusce nec imperdiet enim, ut egestas lacus. Nulla luctus nulla feugiat orci semper, eu viverra tortor facilisis. Suspendisse imperdiet eget felis eu tristique",
                                                        },
                                                        {
                                                            title: "In movies",
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
                                                                "Sunday was sunny day",
                                                        },
                                                        {
                                                            content:
                                                                "There was snow on monday.",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    To_do_lists_collection: {
                                        create: [
                                            {
                                                title: "To Do",
                                                To_do_list_item: {
                                                    create: [
                                                        {
                                                            content:
                                                                "Read a book",
                                                            status: true,
                                                        },
                                                        {
                                                            content:
                                                                "Write poem",
                                                            status: false,
                                                        },
                                                        {
                                                            content:
                                                                "Sing a song",
                                                            status: false,
                                                        },
                                                        {
                                                            content:
                                                                "Eat good meal",
                                                            status: true,
                                                        },
                                                        {
                                                            content:
                                                                "Run to work",
                                                            status: true,
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    Calendar_collection: {
                                        create: [
                                            {
                                                title: "May",
                                                Calendar_item: {
                                                    create: [
                                                        {
                                                            title: "Meeting",
                                                            content:
                                                                "Meeting with Alyse 14:15.",
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

    const john = await prisma.user.upsert({
        where: {
            email: "john@example.test",
            username: "John",
        },
        update: {},
        create: {
            username: "John",
            password: "test1234",
            email: "john@example.test",
            picture: "./public/2.png",
            Bookshelf: {
                create: [
                    {
                        title: "My Bookshelf",
                        description: "A collection of my journals.",
                        journal: {
                            create: [
                                //first journal
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
                                                        {
                                                            title: "Wednesday 30.",
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
                                    To_do_lists_collection: {
                                        create: [
                                            {
                                                title: "Shopping list",
                                                To_do_list_item: {
                                                    create: [
                                                        {
                                                            content: "Milk",
                                                            status: true,
                                                        },
                                                        {
                                                            content: "Cheese",
                                                            status: false,
                                                        },
                                                        {
                                                            content: "Apples",
                                                            status: false,
                                                        },
                                                        {
                                                            content:
                                                                "Chocolate",
                                                            status: true,
                                                        },
                                                        {
                                                            content: "Bread",
                                                            status: true,
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    Calendar_collection: {
                                        create: [
                                            {
                                                title: "January",
                                                Calendar_item: {
                                                    create: [
                                                        {
                                                            title: "Meeting",
                                                            content:
                                                                "Meeting with Matt 14:15.",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },

                                //Second journal
                                {
                                    title: "My Year 2023",
                                    Notes_collection: {
                                        create: [
                                            {
                                                title: "Nice days",
                                                Notes_item: {
                                                    create: [
                                                        {
                                                            title: "At the beach",
                                                            content:
                                                                "Aliquam nunc est, porta quis placerat sed, consequat ac orci. Mauris eget nibh imperdiet, imperdiet turpis sed, ornare tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam diam tortor, vulputate ac turpis sed, interdum dignissim lacus. Nulla tempor luctus velit non dictum. Vestibulum congue in tellus a lobortis. Curabitur vehicula dolor id dolor tincidunt, ut eleifend risus facilisis. Aliquam pulvinar pretium pretium. Nullam luctus sodales sapien pharetra laoreet. Fusce nec imperdiet enim, ut egestas lacus. Nulla luctus nulla feugiat orci semper, eu viverra tortor facilisis. Suspendisse imperdiet eget felis eu tristique",
                                                        },
                                                        {
                                                            title: "In movies",
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
                                                                "Sunday was sunny day",
                                                        },
                                                        {
                                                            content:
                                                                "There was snow on monday.",
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    To_do_lists_collection: {
                                        create: [
                                            {
                                                title: "To Do",
                                                To_do_list_item: {
                                                    create: [
                                                        {
                                                            content:
                                                                "Read a book",
                                                            status: true,
                                                        },
                                                        {
                                                            content:
                                                                "Write poem",
                                                            status: false,
                                                        },
                                                        {
                                                            content:
                                                                "Sing a song",
                                                            status: false,
                                                        },
                                                        {
                                                            content:
                                                                "Eat good meal",
                                                            status: true,
                                                        },
                                                        {
                                                            content:
                                                                "Run to work",
                                                            status: true,
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    Calendar_collection: {
                                        create: [
                                            {
                                                title: "May",
                                                Calendar_item: {
                                                    create: [
                                                        {
                                                            title: "Meeting",
                                                            content:
                                                                "Meeting with Alyse 14:15.",
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
    console.log({ alice, john });
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
