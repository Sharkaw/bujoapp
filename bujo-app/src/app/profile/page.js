import { getSession, getUserData } from "../actions";
import ProfilePage from "./Profile";
const Profile = async () => {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return <>{session && <ProfilePage user={user} />}</>;
    } catch (error) {
        console.error("Could not get profile", error);
    }
};

export default Profile;
