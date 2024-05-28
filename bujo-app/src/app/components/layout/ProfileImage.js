import { getSession, getUserData } from "@/app/actions";
import Image from "next/image";

export default async function ProfileImage() {
    try {
        const session = await getSession();
        const user = await getUserData(session.user.id);

        return (
            <>
                {session && (
                    <Image
                        src={user.picture}
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
