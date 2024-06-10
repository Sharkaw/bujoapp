"use client"
import { useState, useContext } from "react";
// import { UserContext } from "@/useContext/context";

import { UserContext } from "@/app/page";

export default function DemoPage() {
    // const [user] = useState({
    //     id: 313,
    //     name: "seppo",
    // });
    const user = useContext(UserContext);

    return (
        // <UserContext.Provider value={user}>
            <div>
                <h1>demo useContext</h1>
                <p>{user.name}</p>
                {/* <p>{params.slug}</p> */}
            </div>
    );
}