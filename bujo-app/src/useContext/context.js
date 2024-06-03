"use client"
import { createContext } from "react";

import { User } from "./User";

export const UserContext = createContext();

export function useUserContext() {
    const user = useContext(UserContext);

    if (user === undefined) {
        throw new Error("userContext undefined");
    }

    return user;
}