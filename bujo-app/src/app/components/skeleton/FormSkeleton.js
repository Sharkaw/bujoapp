import React from "react";

const FormSkeleton = () => {
    return (
        <div className="m-1 p-1 bg-white h-48 w-full max-w-xs text-gray-800 justify-center animate-pulse">
            <div className="h-10 bg-gray-300 rounded mt-8 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="space-y-4">
                <div className="h-10 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-10 bg-gray-300 rounded w-full mb-2"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-1/3 mt-6"></div>
        </div>
    );
};

export default FormSkeleton;
