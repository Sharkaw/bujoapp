import { getSession, getUserData, userHasJournals } from "../actions";
import Journals from "../components/Journals";
import BookShelfPage from "./BookshelfPage";
export default async function Profile() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        //
        const hasJournals = await userHasJournals(session.user.id);
        console.log(hasJournals);
        // <Journals journals={hasJournals}/>

        return <>{session && <BookShelfPage user={user} hasJournals={hasJournals} />}</>;
    } catch (error) {
        console.error("Could not get profile", error);
    }
}