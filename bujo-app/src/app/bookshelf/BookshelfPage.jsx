"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { BaseButton } from "@/app/components/common/BaseButton";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsJournalBookmarkFill } from "react-icons/bs";
import BookshelfSkeleton from "../components/skeleton/BookshelfSkeleton";
import JournalContext from "../lib/JournalContext";
import Journals from "../components/Journals";

const BookShelfPage = ({ hasJournals }) => {
    const { journal, setJournal } = useContext(JournalContext);

    useEffect(() => {
        setJournal(hasJournals);
    }, [hasJournals, setJournal]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to show the skeleton
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <BookshelfSkeleton />;
    }

    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3">
            <div className="flex flex-col mt-5 w-full mx-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="text-5xl text-gray-800 mb-5">Bookshelf</h1>
                    <Journals journals={hasJournals} />
                    <div className="ml-10">
                        <BaseButton
                            title="Create new"
                            variant="primary"
                            type="submit"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-0 md:mt-5">
                    {journal ? (
                        journal.map((journal, index) => (
                            <div className="flex m-3  w-40 md:w-48" key={index}>
                                <div className="flex flex-col">
                                    <Link href={`/journal/${journal.id}`}>
                                        <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40" />
                                        <p className="text-gray-800 font-semibold text-center text-xl w-max-32">
                                            {journal.title}
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-end h-32 md:h-40">
                                    <FiEdit3 className="h-6 w-6 mb-5 cursor-pointer" />
                                    <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookShelfPage;
