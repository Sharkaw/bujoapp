import { getJournalById } from "@/app/actions";
import Link from "next/link";
import { FiEdit, FiFileText } from "react-icons/fi";

export default async function JournalPage({ params }) {
    const userJournal = await getJournalById(params.journalId);

    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3">
            <div className="flex flex-col mt-5 w-full mx-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="text-5xl mb-5">{userJournal.title}</h1>
                </div>
                <div className="flex flex-wrap gap-2 mt-0 md:mt-5">
                    {userJournal.Notes_collection ? (
                        userJournal.Notes_collection.map(
                            (noteCollection, index) => (
                                <div
                                    className="flex m-3  w-40 md:w-48"
                                    key={index}
                                >
                                    <div className="flex flex-col">
                                        <Link
                                            // href={`/bookshelf/journal/notes/${noteCollection.id}`}
                                            href="/notes"
                                        >
                                            <FiFileText className="h-32 w-32 md:h-40 md:w-40" />
                                            <p className="text-gray-800 font-semibold text-center text-xl w-max-32">
                                                {noteCollection.title}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        )
                    ) : (
                        <></>
                    )}

                    {userJournal.To_do_lists_collection ? (
                        userJournal.To_do_lists_collection.map(
                            (toDoLists, index) => (
                                <div
                                    className="flex m-3  w-40 md:w-48"
                                    key={index}
                                >
                                    <div className="flex flex-col">
                                        <Link
                                            // href={`/bookshelf/journal/notes/${toDoLists.id}`}
                                            href="/to-do-list"
                                        >
                                            <FiEdit className="h-32 w-32 md:h-40 md:w-40" />
                                            <p className="text-gray-800 font-semibold text-center text-xl w-max-32">
                                                {toDoLists.title}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        )
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}
