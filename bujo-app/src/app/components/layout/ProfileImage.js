import { getSession, getUserData } from "@/app/actions";
import Image from "next/image";

export default async function ProfileImage() {
    const defaultPicture = "/profileimages/7.png";
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return (
            <>
                {session && (
                    <Image
                        src={user.picture ? user.picture : defaultPicture}
                        alt="Profile"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                )}
            </>
        );
    } catch (error) {
        console.error("Could not get profile image", error);
    }
}
