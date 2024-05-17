"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LongButton } from '@/app/components/common/LongButton';
import { BaseButton } from '@/app/components/common/BaseButton';
import profile from '@/assets/profile.png';

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [pictureDimensions, setPictureDimensions] = useState({ width: 100, height: 100 });

  useEffect(() => {
    if (selectedPicture) {
      const img = new Image();
      img.src = selectedPicture;
      img.onload = () => {
        setPictureDimensions({ width: img.width, height: img.height });
      };
    }
  }, [selectedPicture]);

  const toggleModal = () => setShowModal(!showModal);

  const handlePictureSelect = (picture) => {
    setSelectedPicture(picture);
    toggleModal();
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10">
      <div className="flex flex-col mt-5 md:w-3/5 mx-auto">
        <h1 className="text-stone-900 mb-5">Personal info</h1>
        <p className="text-stone-900 mb-5 ml-10">Email: example@email.com</p>
        <p className="text-stone-900 mb-5 ml-10">Password: ******</p>
        <div className="w-48 ml-10">
          <LongButton title="Change password" variant="success" type="submit" onClick={toggleModal} />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 justify-item-center mx-auto max-w-80 mt-10 md:mt-0 pr-3">
        <div>
          <div className="md:max-w-40 mx-auto mt-4">
            <Image src={profile} alt="user" className=" rounded-full" />
          </div>
          <p className="w-full text-stone-900 my-5 text-center font-bold">Username</p>
          <div className="flex flex-col mt-10 md:mt-0 justify-center min-h-36">
            <BaseButton title="Choose avatar" variant="primary" type="submit" onClick={toggleModal} />
            <BaseButton title="Save profile" variant="success" type="submit" />
            <BaseButton title="Delete profile" variant="danger" type="submit" />
          </div>
        </div>
      </div>
      {/* modal */}
      {showModal && (
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
              {/* profile pictures */}
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
      )}
    </div>
  );
};

export default ProfilePage;
