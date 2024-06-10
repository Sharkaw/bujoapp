"use client"
import { createContext, useState } from "react";

const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
    const [journal, setJournal] = useState([]);

    return (
        <JournalContext.Provider value = {{ journal, setJournal }}>
            {children}
        </JournalContext.Provider>
    );
};

export default JournalContext;