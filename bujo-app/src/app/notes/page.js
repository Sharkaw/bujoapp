import { getSession, getUserData } from "../actions";
import NotesPage from "./NotesPage";
export default async function Profile() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return <>{session && <NotesPage user={user} />}</>;
    } catch (error) {
        console.error("Could not get notes", error);
    }
}