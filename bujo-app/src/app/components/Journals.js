"use client"
import { useContext } from "react";
import JournalContext from "../lib/JournalContext";
import { getSession, userHasJournals } from "@/app/actions";

async function test (setJournal) {
    // const session = await getSession();
    // return session.user.id;
    
}
const test2 = (setJournal) => {
    setJournal(() => {
        [{
            id: 222,
            title: "context test"
        },
        {
            id: 333,
            title: "context test2"
        }]
    });
}

const Journals = ({hasJournals}) => {
    // const { jounal, setJournal } = useContext(JournalContext);
    console.log("journal > 0");
    console.log(hasJournals);
    
    // hasJournals ? (
    //     hasJournals.map((journal, index) => (
    //         console.log(journal)
    //     ))
    // ) : (
    //     console.log("paska")
    // )
    // console.log(test());
    // test2(setJournal);
    // if (journals.length > 0) {
    //     console.log("journal > 0");
    // } else {
    //     console.log("journal < 0");
    // }
    // return(
    //     <></>
    // );
    
};

export default Journals;