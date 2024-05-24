import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImCheckboxUnchecked } from "react-icons/im";
import { TiInputCheckedOutline } from "react-icons/ti";
import { ToDoListItem } from '../components/to-do-list/ToDoListItem';
import { AddListItemButton } from '../components/to-do-list/AddListItemButton';
import { BaseButton } from "@/app/components/common/BaseButton";

import "./style.css";

const ToDoListPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-5 md:mx-10">
      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-row justify-between">
          <h1 className="text-gray-800">To Do List</h1>
          <div className="ml-10">
            <BaseButton title="Save List" variant="primary" type="submit" />
          </div>
        </div>
        <div className="list flex-col w-full mt-5 border-8 border-gray-800 border-solid p-5">
          <ToDoListItem title={"to do task 1"} status={false} />
          <ToDoListItem title={"to do task 2"} status={false} />
          <ToDoListItem title={"to do task 3"} status={true} />
          <ToDoListItem title={"to do task 4"} status={false} />
          <ToDoListItem title={"to do task 5"} status={true} />
          <ToDoListItem title={"to do task 6"} status={false} />
          <ToDoListItem title={"to do task 7"} status={true} />
          <ToDoListItem title={"to do task 8"} status={false} />
          <ToDoListItem title={""} status={false} />

          <AddListItemButton />
          {/* <div className="flex w-full h-16 justify-between">
            <GrAddCircle className="text-gray-800 self-center mt-4 mx-4 font-bold w-10 h-10 cursor-pointer"/>
          </div> */}
          {/* <div className="flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed">
            <ImCheckboxUnchecked className="text-gray-800 self-center mx-4 font-bold w-10 h-10 cursor-pointer"/>
            <textarea className="text-gray-800 mt-2 w-11/12 font-semibold text-3xl font-kalam self-center border-none row">to do html</textarea>
          </div> */}
          {/* <div className="flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed">
            <ImCheckboxUnchecked className="text-gray-800 self-center mx-4 font-bold w-10 h-10 cursor-pointer"/>
            <p className="text-gray-800 mt-2 w-11/12 font-semibold text-xl font-kalam self-center">to do html</p>
            <RiDeleteBin6Line className="text-gray-800 self-center mx-4 font-bold w-6 h-6 cursor-pointer"/>
          </div>
          <div className="flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed">
            <TiInputCheckedOutline className="text-stone-400 ml-1 mr-[6px] w-16 h-16 cursor-pointer self-center"/>
            <p className=" text-stone-400 mt-2 w-11/12 font-semibold text-xl font-kalam self-center">Done html</p>
            <RiDeleteBin6Line className="text-gray-800 self-center mx-4 font-bold w-6 h-6 cursor-pointer"/>
          </div> */}
        </div>
      </div>
    </div>
  );  
};

export default ToDoListPage;