import React from "react";

const BookShelfSkeleton = ({ darkMode }) => {
    const skeletonBgColor = darkMode ? "bg-gray-800" : "bg-white-";
    const skeletonTextColor = darkMode ? "text-gray-300" : "text-gray-800";

    return (
        <div className={`flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3 ${skeletonBgColor}`}>
            <div className="flex flex-col mt-5 w-full mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="h-12 bg-gray-300 w-1/3 mb-5"></div> 
                    <div className="ml-10">
                        <div className="h-12 w-32 bg-gray-300"></div> 
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-0 md:mt-5">
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="flex m-3  w-40 md:w-48">
                            <div className="flex flex-col">
                                <div className="h-32 w-32 md:h-40 md:w-40 bg-gray-300"></div> 
                                <div className="h-8 bg-gray-300 mt-2 ml-4"></div> 
                            </div>
                            <div className="flex flex-col justify-end h-32 md:h-40">
                                <div className="h-6 w-6 bg-gray-300 mb-5"></div> 
                                <div className="h-6 w-6 bg-gray-300"></div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookShelfSkeleton;
