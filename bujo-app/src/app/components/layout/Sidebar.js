import { getSession } from "@/app/actions";
import SidebarMenu from "@/app/components/layout/SidebarMenu";
import { PrismaClient } from "@prisma/client";

export default async function Sidebar() {
    const prisma = new PrismaClient();
    try {
        // const username = "Alice";
        const session = await getSession();
        console.log(session);
        const username = session.user.username;

        const journals = await prisma.user.findUnique({
            where: { username: username },
            include: {
                Bookshelf: {
                    include: {
                        journal: true,
                    },
                },
            },
        });

        return (
            <>
                {session.isLoggedIn && (
                    <SidebarMenu journals={journals?.Bookshelf[0].journal} />
                )}
            </>
        );
    } catch (error) {
        console.error("Failed to fetch bookshelves:", error);
    } finally {
        await prisma.$disconnect();
    }
}
