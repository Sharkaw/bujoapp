"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LongButton } from '@/app/components/common/LongButton';
import { BaseButton } from '@/app/components/common/BaseButton';
import profile from '@/assets/profile.png';
import Modal from '@/app/components/modals/avatarModal';

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(profile.src);
  const [pictureDimensions, setPictureDimensions] = useState({ width: 100, height: 100 });

  useEffect(() => {
    if (selectedPicture) {
      const img = new window.Image();
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
    <div className="flex flex-col custom-md:flex-row mb-10 w-full mt-8 m-1 p-1">
      <div className="flex flex-col w-full custom-md:items-end custom-md:w-1/2 ">
          <div className="custom-md:items-start justify-end custom-md:justify-start mb-5 px-5">
              <h1 className="text-center custom-md:text-left">
                  Personal info
              </h1>
              <p className="mb-4 p-2 text-center custom-md:text-left">
                  Email: example@email.com
              </p>
              <p className="mb-4 p-2 text-center custom-md:text-left">
                  Password: ******
              </p>
              <div className="flex flex-col items-center custom-md:items-start">
                  <LongButton
                      title="Change password"
                      variant="success"
                  />
              </div>
          </div>
      </div>
      <div className="w-full custom-md:w-1/2 flex flex-col items-center justify-center custom-md:justify-start pr-3 mt-4 px-5">
      <div className="max-w-40 mx-auto">
          <Image src={selectedPicture} alt="user" className="rounded-full" width={pictureDimensions.width} height={pictureDimensions.height} />
      </div>
          <p className="my-5 text-center font-bold">Username</p>
          <div className="flex flex-col items-center custom-md:items-start space-y-3">
          <LongButton
            title="Choose avatar"
            variant="primary"
            onClick={toggleModal}
            />
            <LongButton
            title="Save profile"
            variant="success"
            type="submit"
            />
            <LongButton
            title="Delete profile"
            variant="danger"
            type="submit"
            />
            </div>
          </div>
        <Modal showModal={showModal} toggleModal={toggleModal} handlePictureSelect={handlePictureSelect} />
    </div>
  );
};

export default ProfilePage;
