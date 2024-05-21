import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { LongButton } from "@/app/components/common/LongButton";
import { IconButton } from "@/app/components/common/IconButton";
import { BaseButton } from "@/app/components/common/BaseButton";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsJournalBookmarkFill } from "react-icons/bs";

// import "./notes.css";

// import profile from "@/assets/profile.png";

const BookShelfPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3 lg:mx-10">
      <div className="flex flex-col mt-5 w-full mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className="text-gray-800 mb-5">Bookshelf</h1>
          <div className="ml-10">
            <BaseButton title="Create new" variant="success" type="submit" />
            {/* <BaseButton title="Delete" variant="danger" type="submit" /> */}
          </div>
        </div>
        {/* <div className="flex flex-wrap md:w-1/4 gap-2 mt-0 md:mt-5 justify-center">
          <BsJournalBookmarkFill className=" h-60 w-60" />
          <BsJournalBookmarkFill className="h-9 w-9" />
          <BsJournalBookmarkFill className="h-9 w-9" />
          <BsJournalBookmarkFill className="h-9 w-9" />
        </div>
        <div className="flex flex-wrap gap-2 mt-0 md:mt-5 justify-center">
          <div className="flex flex-col">
            <div className="flex self-end">
              <FiEdit3 className="h-8 w-8 mr-5 cursor-pointer"/>
              <RiDeleteBin6Line className="h-8 w-8 mr-10 cursor-pointer" />
            </div>
            <BsJournalBookmarkFill className=" h-60 w-60" />
            <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl">Note title</p>
          </div>
        </div> */}
        <div className="flex flex-wrap gap-2 mt-0 md:mt-5">
          <div className="flex m-3 lg:m-5 w-40 md:w-48 lg:w-72">
            <div className="flex flex-col">
              <Link href="/journal-title">
                <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60" />
                <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl w-max-32">Demo Journal</p>
              </Link>
            </div>
            <div className="flex flex-col justify-end h-32 md:h-40 lg:h-60">
              <FiEdit3 className="h-8 w-8 mb-5 cursor-pointer"/>
              <RiDeleteBin6Line className="h-8 w-8 cursor-pointer" />
            </div>
          </div>
          <div className="flex m-3 lg:m-5 w-40 md:w-48 lg:w-72">
            <div className="flex flex-col">
              <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60" />
              <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl">Note title</p>
            </div>
            <div className="flex flex-col justify-end h-32 md:h-40 lg:h-60">
              <FiEdit3 className="h-8 w-8 mb-5 cursor-pointer"/>
              <RiDeleteBin6Line className="h-8 w-8 cursor-pointer" />
            </div>
          </div>
          <div className="flex m-3 lg:m-5 w-40 md:w-48 lg:w-72">
            <div className="flex flex-col">
              <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60" />
              <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl">Note title</p>
            </div>
            <div className="flex flex-col justify-end h-32 md:h-40 lg:h-60">
              <FiEdit3 className="h-8 w-8 mb-5 cursor-pointer"/>
              <RiDeleteBin6Line className="h-8 w-8 cursor-pointer" />
            </div>
          </div>
          <div className="flex m-3 lg:m-5 w-40 md:w-48 lg:w-72">
            <div className="flex flex-col">
              <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60" />
              <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl">Note title</p>
            </div>
            <div className="flex flex-col justify-end h-32 md:h-40 lg:h-60">
              <FiEdit3 className="h-8 w-8 mb-5 cursor-pointer"/>
              <RiDeleteBin6Line className="h-8 w-8 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* <div className="notes flex-col w-full border-4 border-slate-300 mt-10">
          <div className="flex w-full py-3 justify-between">
            <p className="text-gray-800 mt-2 ml-4 font-semibold text-center">Note title</p>
            <p className="text-gray-800 mt-2 font-semibold text-sm text-center">01.05.2024</p>
            <div className="flex">
              <FiEdit3 className="h-8 w-8 mr-5 cursor-pointer"/>
              <RiDeleteBin6Line className="h-8 w-8 mr-10 cursor-pointer" />
            </div>
          </div>
          <p className="text-gray-800 mb-5 mx-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, consequatur? Veritatis, repellendus id molestiae deserunt fugit, explicabo exercitationem magni libero veniam vero voluptatum? Aperiam inventore officiis iure culpa ipsum exercitationem earum consequatur expedita architecto perspiciatis asperiores rerum optio ratione at doloremque cumque deserunt magnam, sed obcaecati? Officiis iste et sunt quasi nesciunt eveniet qui ex labore eum unde reiciendis veniam consectetur praesentium necessitatibus dolorum tempora laboriosam id, modi molestiae, placeat enim similique corporis. Incidunt illo facere accusantium quod! Hic delectus voluptas provident maiores minima illum omnis doloremque, assumenda similique soluta minus, rem repellendus temporibus nemo doloribus blanditiis officia eveniet debitis!
          </p>
        </div> */}
      </div>
      
    </div>
  );  
};

export default BookShelfPage;