import { getSession, getUserData } from "../actions";
import ProfilePage from "./ProfilePage";
export default async function Profile() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return <>{session && <ProfilePage user={user} />}</>;
    } catch (error) {
        console.error("Could not get profile", error);
    }
}
