import { getSession, getUserData } from "../actions";
import JournalTitlePage from "./JournaTitlePage";
export default async function Journal() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return <>{session && <JournalTitlePage user={user} />}</>;
    } catch (error) {
        console.error("Could not get journal title page", error);
    }
}