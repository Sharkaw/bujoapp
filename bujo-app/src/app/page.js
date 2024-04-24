import Image from "next/image";
import { BaseButton } from "./common/BaseButton";
import { LongButton } from "./common/LongButton";
import { IconButton } from "./common/IconButton";
import Sidebar from "./pages/sidebar/page";
import React from 'react';

const MainPage = () => {
  return (
    <div>
      Hello World!
    </div>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <div className="bg-white">
                    <BaseButton title="Button" variant="primary" />
                    <BaseButton title="Button" variant="success" />
                    <BaseButton title="Button" variant="danger" />
                    <BaseButton title="Button" variant="disabled" />
                </div>
                <div className="bg-white">
                    <LongButton title="Button" variant="primary" />
                    <LongButton title="Button" variant="success" />
                    <LongButton title="Button" variant="danger" />
                    <LongButton title="Button" variant="disabled" />
                </div>

                <div className="bg-white">
                    <IconButton />
                </div>
                <Sidebar />
  );
};

export default MainPage;
