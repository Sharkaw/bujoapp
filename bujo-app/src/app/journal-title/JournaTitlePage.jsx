import Link from "next/link";

const JournalTitlePage = () => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3 lg:mx-10">
            <div className="flex flex-col mt-5 w-full mx-auto">
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
                    <Link href="/notes">
                        <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
                            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                                Demo Notes
                            </p>
                            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                                05.03.2024
                            </p>
                            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                                Notes
                            </p>
                        </div>
                    </Link>
                    <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
                        <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                            Title 3
                        </p>
                        <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                            18.03.2024
                        </p>
                        <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                            Sticky Notes
                        </p>
                    </div>
                    <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
                        <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                            Title 4
                        </p>
                        <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                            18.03.2024
                        </p>
                        <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">
                            Calendar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalTitlePage;
