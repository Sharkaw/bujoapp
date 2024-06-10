import React from "react";

const ProfileSkeleton = () => {
    return (
        <div
            className="flex flex-col md:flex-row mb-10 w-full mt-8 m-1 p-1 animate-pulse"
        >
            <div className="flex flex-col w-full md:w-1/2">
                <div className="md:items-start justify-end md:justify-start mb-5 px-5">
                    <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                    <div className="flex flex-col items-center md:items-start mt-5">
                        <div className="h-10 bg-gray-300 rounded w-1/3 mb-3"></div> 
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:justify-start pr-3 mt-4 px-5">
                <div className="max-w-40 mx-auto mb-4">
                    <div className="w-36 h-36 bg-gray-300 rounded-full"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-5"></div>
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSkeleton;
