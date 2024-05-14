import React from 'react';
import Image from "next/image";
import { LongButton } from "@/app/components/common/LongButton";
import { BaseButton } from "@/app/components/common/BaseButton";
import { IconButton } from "@/app/components/common/IconButton";
import profile from "@/assets/profile.png";

const ProfilePage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10">
      <div className="flex flex-col mt-5 md:w-3/5 mx-auto">
        <h1 className="text-stone-900 mb-5">Personal info</h1>
        <p className="text-stone-900 mb-5 ml-10">Email: example@email.com</p>
        <p className="text-stone-900 mb-5 ml-10">Password: ******</p>
        <div className="w-48 ml-10"><LongButton title="Change password" variant="success" type="submit" /></div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 justify-around mx-auto max-w-80 mt-10 md:mt-0 pr-3">
        <div>
          <div className="max-w-40 md:max-w-60 mx-auto">
            <Image src={profile} alt="user" className=" rounded-full" />
          </div>
          <p className="w-full text-stone-900 my-5 text-center font-bold">Username</p>
          <div className="w-1/2 mx-auto">
          <BaseButton title="Edit photo" variant="primary" type="submit" />
          </div>
        </div>
        <div className="flex flex-col w-11/12 mt-10 md:mt-0 justify-between min-h-36">
          <BaseButton title="Save profile" variant="success" type="submit" />
          <BaseButton title="Delete profile" variant="danger" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
