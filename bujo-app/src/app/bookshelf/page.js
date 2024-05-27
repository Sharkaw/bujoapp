import React from "react";
import Link from "next/link";
import { BaseButton } from "@/app/components/common/BaseButton";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsJournalBookmarkFill } from "react-icons/bs";

const BookShelfPage = () => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3">
            <div className="flex flex-col mt-5 w-full mx-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="text-5xl text-gray-800 mb-5">Bookshelf</h1>
                    <div className="ml-10">
                        <BaseButton
                            title="Create new"
                            variant="primary"
                            type="submit"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-0 md:mt-5">
                    <div className="flex m-3  w-40 md:w-48">
                        <div className="flex flex-col">
                            <Link href="/journal-title">
                                <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40" />
                                <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl w-max-32">
                                    Demo Journal
                                </p>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-end h-32 md:h-40">
                            <FiEdit3 className="h-6 w-6 mb-5 cursor-pointer" />
                            <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex m-3  w-40 md:w-48">
                        <div className="flex flex-col">
                            <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40" />
                            <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl">
                                Journal title
                            </p>
                        </div>
                        <div className="flex flex-col justify-end h-32 md:h-40">
                            <FiEdit3 className="h-6 w-6 mb-5 cursor-pointer" />
                            <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex m-3  w-40 md:w-48">
                        <div className="flex flex-col">
                            <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40" />
                            <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl">
                                Journal title
                            </p>
                        </div>
                        <div className="flex flex-col justify-end h-32 md:h-40">
                            <FiEdit3 className="h-6 w-6 mb-5 cursor-pointer" />
                            <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex m-3  w-40 md:w-48">
                        <div className="flex flex-col">
                            <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40" />
                            <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl">
                                Journal title
                            </p>
                        </div>
                        <div className="flex flex-col justify-end h-32 md:h-40">
                            <FiEdit3 className="h-6 w-6 mb-5 cursor-pointer" />
                            <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookShelfPage;
