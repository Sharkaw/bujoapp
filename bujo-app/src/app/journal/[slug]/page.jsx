import { getJournalById } from "@/app/actions";
import Link from "next/link";

export default async function JournalPage ({params}) {
    console.log("params:", params.slug);
    const paramsJournalID = params.slug;
    // const userJournal = await getJournalById("222");
    const userJournal = await getJournalById(paramsJournalID);
    console.log("userJournal:", userJournal);
    // const userJournal = journalId;

    return (
        <>
            <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3 lg:mx-10">
            <div className="flex flex-col mt-5 w-full mx-auto">
            {userJournal ? (
                <>
                    <div className="flex flex-row justify-between">
                        <h1 className="text-5xl text-gray-800">
                            The Table of Contents
                        </h1>
                    </div>
                        <div className="flex-col w-full mt-5">
                            <div className="flex w-full py-3 justify-between">
                                <p className="text-gray-800 mt-2 w-1/3 font-bold text-center text-3xl tracking-wider font-kalam">
                                    Titles
                                </p>
                                <p className="text-gray-800 mt-2 w-1/3 font-bold text-center text-3xl tracking-wider font-kalam">
                                    Dates
                                </p>
                                <p className="text-gray-800 mt-2 w-1/3 font-bold text-center text-3xl tracking-wider font-kalam">
                                    Type
                                </p>
                            </div>
                        </div>
                        <Link href="/to-do-list">
                        <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
                            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                                Demo To Do
                            </p>
                            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                                17.03.2024
                            </p>
                            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                                To Do
                            </p>
                        </div>
                    </Link>
                </>
            ) : (
                <>
                    <div className="flex flex-row justify-between">
                        <h1 className="text-5xl text-gray-800">
                            Journals content not found.
                        </h1>
                    </div>
                </>
            )}

            {/* <p>{userJournal.title}</p>
            <p>{userJournal.Notes_collection[0].title}</p>
            <p>{userJournal.To_do_lists_collection[0].title}</p> */}
            </div>
        </div>
        </>
    )
}

// export default function JournalPage({params}) {
//     return (
//         <main>
//             <h1>Test Details</h1>
//             <p>{params.slug}</p>
//         </main>
//     );
// }
// import { getJournalById, getSession, getUserData } from "@/app/actions";
// import JournalPage from "./JournalPage";

// export default async function Journal({params}) {
//     console.log("params:", params.slug);
//     const paramsJournalID = params.slug;
//     try {
//         const session = await getSession();
//         const user = await getUserData(session.user.id);
//         // const journalId = await getJournalById("222");
//         const journalId = await getJournalById(paramsJournalID);

//         return <>{session && <JournalPage user={user} journalId={journalId}/>}</>;
//     } catch (error) {
//         console.error("Could not get journal", error);
//     }
// }
