"use client";
import { ImCheckboxUnchecked } from "react-icons/im";

function handleCheckBox() {
    // alert("heip");
}

export function CheckBox({ title, status}) {
    return (
        <div className="flex w-full h-[60px] justify-between border-b-2 border-gray-300 border-dashed" onClick={handleCheckBox}>
            <ImCheckboxUnchecked className="text-gray-800 mr-4 ml-3 w-1/12 font-bold text-center text-3xl cursor-pointer  self-center"/>
            <p className="text-gray-800 mt-2 w-11/12 font-semibold text-3xl font-kalam  self-center">{title}</p>
        </div>
    );
}
