import { getSession, getUserData, userHasJournals } from "../actions";
import BookShelfPage from "./BookshelfPage";
export default async function Profile() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        const hasJournals = await userHasJournals(session.user.id);
        console.log(hasJournals);

        return <>{session && <BookShelfPage user={user} hasJournals={hasJournals} />}</>;
    } catch (error) {
        console.error("Could not get bookshelf", error);
    }
}