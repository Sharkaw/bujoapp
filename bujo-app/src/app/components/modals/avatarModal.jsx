import React, { useState } from "react";
import Image from "next/image";
import { BaseButton } from "@/app/components/common/BaseButton";

const Modal = ({ showModal, toggleModal, handlePictureSelect }) => {
    const [tempSelectedPicture, setTempSelectedPicture] = useState(null);

    if (!showModal) return null;

    const handlePictureClick = (picture) => {
        setTempSelectedPicture(picture);
    };

    const handleSave = () => {
        if (tempSelectedPicture) {
            handlePictureSelect(tempSelectedPicture);
        }
        toggleModal();
    };

    return (
        <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Choose avatar
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-600"
                            onClick={toggleModal}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12.586l-4.293-4.293-1.414 1.414L8.586 14 4.293 18.293l1.414 1.414L10 15.414l4.293 4.293 1.414-1.414L11.414 14l4.293-4.293-1.414-1.414L10 12.586z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div
                                key={num}
                                className="relative cursor-pointer"
                                onClick={() =>
                                    handlePictureClick(
                                        `/profileimages/${num}.png`
                                    )
                                }
                            >
                                <Image
                                    src={`/profileimages/${num}.png`}
                                    alt={`Picture ${num}`}
                                    className={`w-28 h-28 rounded-full ${
                                        tempSelectedPicture ===
                                        `/profileimages/${num}.png`
                                            ? "ring-2 ring-gray-300"
                                            : ""
                                    }`}
                                    width={112}
                                    height={112}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-end p-4 border-t">
                        <div className="px-4 py-2 text-white rounded">
                            <BaseButton
                                title="Select"
                                variant="success"
                                type="button"
                                onClick={handleSave}
                                data-testid="select-button"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
