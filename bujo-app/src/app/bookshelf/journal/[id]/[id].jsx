import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getJournalById } from "@/app/actions"; // New: Import getJournalById

const JournalDetail = () => {
    const router = useRouter();
    const { id } = router.query; // New: Get journal ID from URL
    const [journal, setJournal] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchJournal = async () => {
                const data = await getJournalById(id); // New: Fetch journal by ID
                console.log("Fetched journal data:", data); // New: Log fetched data
                setJournal(data); // New: Set journal state
            };
            fetchJournal();
        }
    }, [id]); // New: Dependency array with ID

    if (!journal) {
        return <p>Loading...</p>; // New: Loading state
    }

    return (
        <div>
            <h1 className="text-4xl">{journal.title}</h1>
            <div>
                <h2 className="text-2xl">Notes</h2>
                {journal.Notes_collection.map((collection) => (
                    <div key={collection.id}>
                        <h3 className="text-xl">{collection.title}</h3>
                        {collection.Notes_item.map((item) => (
                            <div key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-2xl">Sticky Notes</h2>
                {journal.Sticky_notes_collection.map((collection) => (
                    <div key={collection.id}>
                        <h3 className="text-xl">{collection.title}</h3>
                        {collection.Sticky_note_item.map((item) => (
                            <div key={item.id}>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-2xl">To-Do Lists</h2>
                {journal.To_do_lists_collection.map((collection) => (
                    <div key={collection.id}>
                        <h3 className="text-xl">{collection.title}</h3>
                        {collection.To_do_list_item.map((item) => (
                            <div key={item.id}>
                                <p>{item.content}</p>
                                <p>{item.status ? "Done" : "Not Done"}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-2xl">Calendar</h2>
                {journal.Calendar_collection.map((collection) => (
                    <div key={collection.id}>
                        <h3 className="text-xl">{collection.title}</h3>
                        {collection.Calendar_item.map((item) => (
                            <div key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JournalDetail;