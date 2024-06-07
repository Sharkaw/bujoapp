import { getJournalById } from "@/app/actions";

export default async function JournalPage ({user, journalId}) {
    // const userJournal = await getJournalById("222");
    // console.log(userJournal.title);
    const userJournal = journalId;
    return (
        <>
            <h1>hellou</h1>
            <p>{userJournal.title}</p>
            <p>{userJournal.Notes_collection[0].title}</p>
            <p>{userJournal.To_do_lists_collection[0].title}</p>
        </>
    )
}