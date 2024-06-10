import { getNotesById, getSession, getUserData } from "../actions";
import NotesPage from "./NotesPage";
export default async function Profile() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);
        const collectionId = "66602252-9bcd-4258-90f1-52eabab91e73";

        return (
            <>
                {session && (
                    <NotesPage user={user} collectionId={collectionId} />
                )}
            </>
        );
    } catch (error) {
        console.error("Could not get notes", error);
    }
}
