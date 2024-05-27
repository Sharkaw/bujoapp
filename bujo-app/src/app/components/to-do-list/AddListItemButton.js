"use client";

import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

export function AddListItemButton() {

    function addListItem(event) {
        console.log("add new line");
    }

    return (
        <div className="flex w-full h-16 justify-between">
            <GrAddCircle onClick={addListItem} className="text-gray-800 self-center mt-4 mx-4 font-bold w-10 h-10 cursor-pointer"/>
          </div>
    );
}
