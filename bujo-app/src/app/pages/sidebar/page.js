"use client";
import SidebarMenu from "@/app/components/SidebarMenu";

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const user = "Alice"; //getSession(context)

    const journals = await prisma.journal.findMany({
        where: {
            userName: user,
        },
        select: {
            title: true,
        },
    });
    return { props: { journals } };
}

export default function Sidebar({ journals }) {
    return <SidebarMenu journals={journals} />;
}
