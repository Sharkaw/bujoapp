"use client";

import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

export function AddListItemButton() {

    // console.log(props);
    // const [status, setStatus] = useState(props.status);
    // const [title, setTitle] = useState(props.title);

    const unCheckdivStyle = "flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed";
    const checkdivStyle = "flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed";
    const unCheckInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-gray-800 font-semibold text-3xl font-kalam self-center focus:outline-none focus:shadow-outline";
    const checkInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-stone-400 font-semibold text-3xl font-kalam self-center focus:outline-none focus:shadow-outline";

    function addListItem(event) {
        alert("heip");
    }

    return (
        <div className="flex w-full h-16 justify-between">
            <GrAddCircle onClick={addListItem} className="text-gray-800 self-center mt-4 mx-4 font-bold w-10 h-10 cursor-pointer"/>
          </div>
    );
}
