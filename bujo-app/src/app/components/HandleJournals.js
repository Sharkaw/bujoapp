import { getSession, userHasJournals } from "@/app/actions";
import Journals from "./Journals";

export async function getJournals() {
    try {
        const session = await getSession();
        const hasJournals = await userHasJournals(session.user.id);
        console.log(hasJournals);
        return (
            <></>
        );
    } catch (error) {
        console.error("Failed to load journals:", error);
    }
} 