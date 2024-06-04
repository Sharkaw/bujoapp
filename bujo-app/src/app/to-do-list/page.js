import { getSession, getUserData } from "../actions";
import ToDoListPage from "./ToDoListPage";

export default async function ToDo() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return <>{session && <ToDoListPage user={user} />}</>;
    } catch (error) {
        console.error("Could not get profile", error);
    }
}