"use client";

import { useState } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { TiInputCheckedOutline } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

export function ToDoListItem(props) {

    const [status, setStatus] = useState(props.status);
    const [title, setTitle] = useState(props.title);

    const unCheckdivStyle = "flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed";
    const checkdivStyle = "flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed";
    const unCheckInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-gray-800 font-semibold text-xl font-kalam self-center focus:outline-none focus:shadow-outline";
    const checkInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-stone-400 font-semibold text-xl font-kalam self-center focus:outline-none focus:shadow-outline";

    function handleCheckBox(event) {
        setStatus(prevValue => {
            return !prevValue;
        });
    }

    function updateTitle(event) {
        const toDoTitle = event.target.value;
        setTitle(toDoTitle);
    }

function deleteItem(event) {
        console.log("delete");
    }

    return (
        <div className= { status ? checkdivStyle : unCheckdivStyle }> 
            { status ? <TiInputCheckedOutline className="text-stone-400 ml-1 mr-[6px] w-16 h-16 cursor-pointer self-center" onClick={handleCheckBox}/> : <ImCheckboxUnchecked className="text-gray-800 self-center mx-4 font-bold w-10 h-10 cursor-pointer" onClick={handleCheckBox}/> }
            <input className= { status ? checkInputStyle     : unCheckInputStyle } id="userName" type="text" placeholder="new to do" name="to-do-item" value={title} onChange={updateTitle}></input>
            <RiDeleteBin6Line onClick={deleteItem} className="text-gray-800 self-center mx-4 font-bold w-6 h-6 cursor-pointer"/>
        </div>
    );
}
