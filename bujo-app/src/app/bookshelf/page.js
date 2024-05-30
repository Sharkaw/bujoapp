import { getSession, getUserData } from "../actions";
import BookShelfPage from "./BookshelfPage";
export default async function Profile() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return <>{session && <BookShelfPage user={user} />}</>;
    } catch (error) {
        console.error("Could not get profile", error);
    }
}
