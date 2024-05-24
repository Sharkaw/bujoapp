"use client";

import { useState } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { TiInputCheckedOutline } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

// tilan määritykseen ominaisuus status, jonka arvo voi olla true tai false
// let isDone = false;

export function ToDoListItem(props) {

    // console.log(props);
    const [status, setStatus] = useState(props.status);
    const [title, setTitle] = useState(props.title);

    const unCheckdivStyle = "flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed";
    const checkdivStyle = "flex w-full h-16 justify-between border-b-2 border-gray-300 border-dashed";
    const unCheckInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-gray-800 font-semibold text-3xl font-kalam self-center focus:outline-none focus:shadow-outline";
    const checkInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-stone-400 font-semibold text-3xl font-kalam self-center focus:outline-none focus:shadow-outline";

    function handleCheckBox(event) {
        // alert("heip");
        // if (!status) {
        //     setStatus(true);
        // } else {
        //     setStatus(false);
        // }
        setStatus(prevValue => {
            return !prevValue;
        });
        // console.log(status);
    }

    function updateTitle(event) {
        const toDoTitle = event.target.value;
        // const elementName = event.target.name;
        // console.log(elementName);
        setTitle(toDoTitle);
        // console.log(toDoTitle);
    }

function deleteItem(event) {
        console.log("delete");
    }

    return (
        // <div className="flex w-full justify-between border-b-2 border-gray-300 border-dashed">
        //     <TiInputCheckedOutline className="text-stone-400 mr-2 text-6xl cursor-pointer"/>
        //     <p className=" text-stone-400 mt-2 w-11/12 font-semibold text-3xl font-kalam self-center">Done</p>
        //   </div>
        <div className= { status ? checkdivStyle : unCheckdivStyle }> 
            { status ? <TiInputCheckedOutline className="text-stone-400 mx-0 w-20 h-20 cursor-pointer self-center" onClick={handleCheckBox}/> : <ImCheckboxUnchecked className="text-gray-800 self-center mx-4 font-bold w-10 h-10 cursor-pointer" onClick={handleCheckBox}/> }
            {/* <p className="text-gray-800 mt-2 w-11/12 font-semibold text-3xl font-kalam  self-center">{title}</p> */}
            <input className= { status ? checkInputStyle     : unCheckInputStyle } id="userName" type="text" placeholder="new to do" name="to-do-item" value={title} onChange={updateTitle}></input>
            <RiDeleteBin6Line onClick={deleteItem} className="text-gray-800 self-center mx-4 font-bold w-7 h-7 cursor-pointer"/>
        </div>
    );
}
