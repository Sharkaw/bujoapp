"use client";

import React, { useState } from "react";
import { BaseButton } from "@/app/components/common/BaseButton";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import "./notes.css";

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

const NotesPage = () => {
    const [notes, setNotes] = useState([]);

    const handleCreateNew = () => {
        const newNote = {
            id: Date.now(),
            title: "",
            date: new Date().toLocaleDateString(),
            content: "",
        };
        setNotes([...notes, newNote]);
    };

    const handleDeleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] mb-10 mx-10 lg:mx-20">
            <div className="flex flex-col mt-5 w-full mx-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="text-gray-800 mb-5">Notes</h1>
                    <div className="ml-10">
                        <BaseButton
                            title="Create new"
                            variant="primary"
                            type="button"
                            onClick={handleCreateNew}
                        />
                    </div>
                </div>
                {notes.map((note) => (
                    <EditableNote
                        key={note.id}
                        title={note.title}
                        date={note.date}
                        content={note.content}
                        onDelete={() => handleDeleteNote(note.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotesPage;
