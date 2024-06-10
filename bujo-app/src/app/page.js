"use client"
import React from "react";
import { redirect } from "next/navigation";

import { useState, createContext } from "react";

export const UserContext = createContext();

const MainPage = () => {
    let [user, setUser] = useState({
        id: 313,
        name: "seppo",
    });

    <UserContext.Provider value={user} >
    return <div>{redirect("/login")}</div>;
    </UserContext.Provider>
};

export default MainPage;
