"use client";

import { useState } from "react";
import ProfilePage from "./Profile";
import Header from "./Header";
import profile from "@/assets/profile.png";

const ProfileClientWrapper = ({ user }) => {
    const [selectedPicture, setSelectedPicture] = useState(profile.src);

    return (
        <>
            <Header selectedPicture={selectedPicture} />
            <ProfilePage 
                user={user} 
                selectedPicture={selectedPicture} 
                setSelectedPicture={setSelectedPicture} 
            />
        </>
    );
};

export default ProfileClientWrapper;
