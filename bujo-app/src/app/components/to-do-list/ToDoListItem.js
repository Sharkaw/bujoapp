"use client";
import { CloudCog } from "lucide";
// import { useState } from "react/cjs/react.production.min";
// import { useState } from "react/cjs/react.development";
import { useState } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { TiInputCheckedOutline } from "react-icons/ti";

// tilan määritykseen ominaisuus status, jonka arvo voi olla true tai false
// let isDone = false;

export function ToDoListItem(props) {

    // console.log(props);
    const [status, setStatus] = useState(props.status);
    const [title, setTitle] = useState(props.title);

    const unCheckdivStyle = "flex w-full h-[60px] justify-between border-b-2 border-gray-300 border-dashed";
    const checkdivStyle = "flex w-full justify-between border-b-2 border-gray-300 border-dashed";
    const unCheckInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-gray-800 font-semibold text-3xl font-kalam self-center focus:outline-none focus:shadow-outline";
    const checkInputStyle = "appearance-none border-none bg-transparent rounded w-11/12 py-2 px-3 text-stone-400 font-semibold text-3xl font-kalam self-center focus:outline-none focus:shadow-outline";

    function handleCheckBox(event) {
        // alert("heip");
        if (!status) {
            setStatus(true);
        } else {
            setStatus(false);
        }
        console.log(status);
        // const elementName = event.target.name;
        // console.log(elementName);
    }

    function updateTitle(event) {
        const toDoTitle = event.target.value;
        // const elementName = event.target.name;
        // console.log(elementName);
        setTitle(toDoTitle);
        console.log(toDoTitle);
    }

    return (
        // <div className="flex w-full justify-between border-b-2 border-gray-300 border-dashed">
        //     <TiInputCheckedOutline className="text-stone-400 mr-2 text-6xl cursor-pointer"/>
        //     <p className=" text-stone-400 mt-2 w-11/12 font-semibold text-3xl font-kalam self-center">Done</p>
        //   </div>
        <div className= { status ? checkdivStyle : unCheckdivStyle }> 
            { status ? <TiInputCheckedOutline className="text-stone-400 mr-2 text-6xl cursor-pointer" onClick={handleCheckBox}/> : <ImCheckboxUnchecked className="text-gray-800 mr-4 ml-3 w-1/12 font-bold text-center text-3xl cursor-pointer  self-center" onClick={handleCheckBox}/> }
            {/* <p className="text-gray-800 mt-2 w-11/12 font-semibold text-3xl font-kalam  self-center">{title}</p> */}
            <input className= { status ? checkInputStyle     : unCheckInputStyle } id="userName" type="text" placeholder="to do" name="to-do-item" value={title} onChange={updateTitle}></input>
        </div>
    );
}
