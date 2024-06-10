"use client";

import { useEffect, useState } from "react";
import { checkIfEmailExists } from "@/app/actions";
// import ChangePassword from "./ChangePassword";
// import { LongButton } from "../common/LongButton";

export default function UpdateUserForm({
    readOnly,
    register,
    errors,
    watch,
    user,
    resetField,
    showEditMode,
}) {
    const [showMessage, setShowMessage] = useState(false);
    const [emailMessage, setEmailMessage] = useState("");
    // const [showChangePassword, setShowChangePassword] = useState(false);

    const handleCancel = () => {
        resetField("password");
        resetField("confirmPassword");
        // setShowChangePassword(!showChangePassword);
    };

    const handleEmailCheck = async (email) => {
        if (email && email !== user.email) {
            const { exists, message } = await checkIfEmailExists(
                user.id,
                email
            );
            if (exists) {
                setEmailMessage(message);
                setShowMessage(true);
            } else {
                setEmailMessage(message);
                setShowMessage(false);
            }
        } else {
            setShowMessage(false);
            setEmailMessage("");
        }
    };

    const email = watch("email");
    useEffect(() => {
        handleEmailCheck(email);
    }, [email]);

    return (
        <form>
            <div className="flex flex-col items-center md:items-start">
                <div className="mb-4 p-1 border-b ">
                    <label
                        className="block text-gray-800 dark:text-white ext-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        {...register("username")}
                        className="appearance-none border-none bg-transparent rounded py-2 px-3 text-gray-800 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        disabled={readOnly}
                    />
                </div>
                <div className="mb-4 p-1 border-b">
                    <label
                        className="block text-gray-800 dark:text-white text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        {...register("email")}
                        className="appearance-none border-none bg-transparent rounded py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email"
                        disabled={readOnly}
                    />
                </div>
                {showMessage && (
                    <p className="text-red-700 font-light text-xs mb-2">
                        {emailMessage}
                    </p>
                )}
                <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                    {errors.email?.message}
                </p>
                <div className="flex flex-col items-center md:items-start">
                    {/* NOTE(Suvi): Hiding this unfinish snippet to wait for implementation */}
                    {/* {showEditMode && (
                        <>
                            <LongButton
                                title={
                                    !showChangePassword
                                        ? "Change Password"
                                        : "Cancel"
                                }
                                variant="primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCancel();
                                }}
                            />
                            {showChangePassword && (
                                <div className="mt-4 ">
                                    <ChangePassword
                                        register={register}
                                        errors={errors}
                                        watch={watch}
                                    />
                                </div>
                            )}
                        </>
                    )} */}
                </div>
            </div>
        </form>
    );
}
