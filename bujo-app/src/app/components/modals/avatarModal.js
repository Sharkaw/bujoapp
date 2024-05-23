import React from 'react';
import Image from 'next/image';

const Modal = ({ showModal, toggleModal, handlePictureSelect }) => {
  if (!showModal) return null;

  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Choose avatar</h3>
            <button type="button" className="text-gray-400 hover:text-gray-600" onClick={toggleModal}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12.586l-4.293-4.293-1.414 1.414L8.586 14 4.293 18.293l1.414 1.414L10 15.414l4.293 4.293 1.414-1.414L11.414 14l4.293-4.293-1.414-1.414L10 12.586z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative cursor-pointer" onClick={() => handlePictureSelect(`/profileimages/${num}.png`)}>
                <Image src={`/profileimages/${num}.png`} alt={`Picture ${num}`} className="rounded-lg" width={100} height={100} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end p-4 border-t">
            <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;