import React from 'react';
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsJournalBookmarkFill } from "react-icons/bs";

const JournalTitlePage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-3 lg:mx-10">
      <div className="flex flex-col mt-5 w-full mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className="text-gray-800">Journal Title</h1>
          {/* <div className="ml-10">
            <BaseButton title="Create new" variant="primary" type="submit" />
          </div> */}
        </div>
        <div className="flex-col w-full mt-5">
          {/* <div className="flex w-full py-3 justify-between border-b-2 border-gray-300 border-dashed"> */}
          <div className="flex w-full py-3 justify-between">
            <p className="text-gray-800 mt-2 w-1/3 font-bold text-center text-3xl tracking-wider font-kalam">Titles</p>
            <p className="text-gray-800 mt-2 w-1/3 font-bold text-center text-3xl tracking-wider font-kalam">Dates</p>
            <p className="text-gray-800 mt-2 w-1/3 font-bold text-center text-3xl tracking-wider font-kalam">Type</p>
          </div>
          <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">Title 1</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">17.03.2024</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">To Do</p>
          </div>
          <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">Title 2</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">05.03.2024</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">Notes</p>
          </div>
          <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">Title 3</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">18.03.2024</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">Sticky Notes</p>
          </div>
          <div className="flex w-full py-1 justify-between hover:bg-gray-200 cursor-pointer">
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">Title 4</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">18.03.2024</p>
            <p className="text-gray-800 mt-2 w-1/3 font-semibold text-center">Calendar</p>
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
        {/* <div className="flex flex-wrap gap-2 mt-0 md:mt-5">
          <div className="flex m-3 lg:m-5 w-40 md:w-48 lg:w-72">
            <div className="flex flex-col">
              <BsJournalBookmarkFill className="h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60" />
              <p className="text-gray-800 mt-2 ml-4 font-semibold text-center text-xl w-max-32">Note title Note title Note title</p>
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
        </div> */}
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

export default JournalTitlePage;