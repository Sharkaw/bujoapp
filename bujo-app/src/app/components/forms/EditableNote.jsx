"use client";

import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const EditableNote = ({ title, date, content, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [noteTitle, setNoteTitle] = useState(title || "");
    const [noteContent, setNoteContent] = useState(content || "");
    const [originalTitle, setOriginalTitle] = useState(title || "");
    const [originalContent, setOriginalContent] = useState(content || "");

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setOriginalTitle(noteTitle);
        setOriginalContent(noteContent);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        if (window.confirm("Are you sure you want to cancel your changes?")) {
            setNoteTitle(originalTitle);
            setNoteContent(originalContent);
            setIsEditing(false);
        }
    };

    const handleDeleteClick = () => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            onDelete();
        }
    };

    return (
        <div className="notes flex-col w-full border-4 border-gray-800 mt-5">
            <div className="flex w-full py-3 justify-between">
                {isEditing ? (
                    <>
                        <label
                            htmlFor={`note-title-${date}`}
                            className="sr-only"
                        >
                            Title
                        </label>
                        <input
                            id={`note-title-${date}`}
                            type="text"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                            placeholder="Title"
                            className="text-gray-800 mt-2 ml-4 font-semibold text-center"
                        />
                    </>
                ) : (
                    <p className="text-gray-800 mt-2 ml-4 font-semibold text-center">
                        {noteTitle}
                    </p>
                )}
                <p className="text-gray-800 mt-2 font-semibold text-sm text-center">
                    {date}
                </p>
                <div className="flex">
                    {isEditing ? (
                        <>
                            <FiCheck
                                onClick={handleSaveClick}
                                className="h-6 w-6 mr-5 cursor-pointer"
                            />
                            <FiX
                                onClick={handleCancelClick}
                                className="h-6 w-6 mr-5 cursor-pointer"
                            />
                        </>
                    ) : (
                        <FiEdit3
                            onClick={handleEditClick}
                            className="h-6 w-6 mr-5 cursor-pointer"
                        />
                    )}
                    <FiTrash
                        onClick={handleDeleteClick}
                        className="h-6 w-6 mr-10 cursor-pointer"
                    />
                </div>
            </div>
            {isEditing ? (
                <>
                    <label htmlFor={`note-content-${date}`} className="sr-only">
                        Content
                    </label>
                    <textarea
                        id={`note-content-${date}`}
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        placeholder="Note..."
                        className="text-gray-800 mb-5 mx-6 w-[calc(100%-3rem)] h-60"
                    />
                </>
            ) : (
                <p className="text-gray-800 mb-5 mx-6">{noteContent}</p>
            )}
        </div>
    );
};

export default EditableNote;
