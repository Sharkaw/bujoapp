import { getSession, userHasJournals } from "@/app/actions";
import SidebarMenu from "@/app/components/layout/SidebarMenu";

export default async function Sidebar() {
    try {
        const session = await getSession();
        const hasJournals = await userHasJournals(session.user.id);

        return <>{session && <SidebarMenu journals={hasJournals} />}</>;
    } catch (error) {
        console.error("Failed to load sidebar:", error);
    }
}
