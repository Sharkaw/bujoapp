import { useEffect, useState } from 'react';
import { getSession, getUserData } from "@/app/actions";
import Image from "next/image";

export default function ProfileImage() {
    const [profilePicture, setProfilePicture] = useState(null);
    const defaultPicture = "/profileimages/7.png";

    useEffect(() => {
        async function fetchData() {
            try {
                const session = await getSession();
                const user = await getUserData(session.user.id);
                const picture = user.picture || defaultPicture;
                setProfilePicture(picture);
            } catch (error) {
                console.error("Could not get profile image", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            {profilePicture && (
                <Image
                    src={profilePicture}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            )}
        </>
    );
}
