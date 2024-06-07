import { getJournalById, getSession, getUserData } from "@/app/actions";
import JournalPage from "./JournalPage";

export default async function Journal() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);
        const journalId = await getJournalById("222");

        return <>{session && <JournalPage user={user} journalId={journalId}/>}</>;
    } catch (error) {
        console.error("Could not get journal", error);
    }
}
