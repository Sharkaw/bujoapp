"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LongButton } from "@/app/components/common/LongButton";
import profile from "@/assets/profile.png";
import Modal from "@/app/components/modals/avatarModal";
import UpdateUserForm from "../components/forms/UpdateUserForm";
import { useForm } from "react-hook-form";
import { UpdateUserData } from "../actions";

const ProfilePage = ({ user }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState(null);
    const [pictureDimensions, setPictureDimensions] = useState({
        width: 100,
        height: 100,
    });
    const [showEditMode, setShowEditMode] = useState(false);

    useEffect(() => {
        if (selectedPicture) {
            const img = new Image();
            img.src = selectedPicture;
            img.onload = () => {
                setPictureDimensions({ width: img.width, height: img.height });
            };
        }
    }, [selectedPicture]);

    const toggleModal = () => setShowModal(!showModal);
    const toggleEditMode = () => setShowEditMode(!showEditMode);

    const handlePictureSelect = (picture) => {
        setSelectedPicture(picture);
        toggleModal();
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: user.username,
            email: user.email,
            password: "",
        },
    });

    const handleCancel = () => {
        reset();
        toggleEditMode();
    };

    const [data, setData] = useState();

    const processUpdate = async (data) => {
        const updates = {};

        if (data.email) {
            updates.email = data.email;
        } else {
            updates.email = user.email;
        }
        if (data.username) {
            updates.username = data.username;
        } else {
            updates.username = user.username;
        }
        if (data.password) {
            updates.password = data.password;
        } else {
            updates.password = user.password;
        }

        const result = await UpdateUserData(user.username, updates);

        if (!result || !result.success) {
            console.log("Something went wrong");
            if (result && result.error) {
                console.log(result.error);
            }
            return;
        }

        reset();
        setData(result.data);
        revalidatePath("/profile");
    };

    return (
        <div className="flex flex-col md:flex-row mb-10 w-full mt-8 m-1 p-1">
            <div className="flex flex-col w-full md:items-end md:w-1/2">
                <div className="md:items-start justify-end md:justify-start mb-5 px-5">
                    <h1 className="text-5xl text-center md:text-left">
                        Personal info
                    </h1>
                    <UpdateUserForm
                        readOnly={!showEditMode}
                        register={register}
                        errors={errors}
                    />
                    <div className="flex flex-col items-center md:items-start">
                        <LongButton
                            title={!showEditMode ? "Edit profile" : "Cancel"}
                            variant="success"
                            onClick={
                                !showEditMode ? toggleEditMode : handleCancel
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center  md:justify-start pr-3 mt-4 px-5">
                <div className="max-w-40 mx-auto">
                    <Image src={profile} alt="user" className="rounded-full" />
                </div>
                <p className="my-5 text-center font-bold">{user.username}</p>
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <LongButton
                        title="Choose avatar"
                        variant="primary"
                        onClick={toggleModal}
                    />
                    <LongButton
                        title="Save profile"
                        variant="success"
                        type="submit"
                        onClick={handleSubmit(processUpdate)}
                    />
                    <LongButton
                        title="Delete profile"
                        variant="danger"
                        type="submit"
                    />
                </div>
            </div>
            <Modal
                showModal={showModal}
                toggleModal={toggleModal}
                handlePictureSelect={handlePictureSelect}
            />
        </div>
    );
};

export default ProfilePage;
