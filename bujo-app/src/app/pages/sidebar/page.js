import SidebarMenu from "@/app/components/SidebarMenu";
import { PrismaClient } from "@prisma/client";

export default async function Sidebar() {
    const prisma = new PrismaClient();
    const username = "Alice";

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
    console.log(journals.Bookshelf[0].journal);
    return <SidebarMenu journals={journals.Bookshelf[0].journal} />;
}
