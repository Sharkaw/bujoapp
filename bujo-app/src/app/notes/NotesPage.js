"use client";

import { useState } from "react";
import { BaseButton } from "@/app/components/common/BaseButton";
import "./notes.css";
import EditableNote from "../components/forms/EditableNote";

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
                    <h1 className="text-5xl text-gray-800 mb-5">Notes</h1>
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
