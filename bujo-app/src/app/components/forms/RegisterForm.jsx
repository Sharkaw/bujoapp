"use client";
import { LongButton } from "@/app/components/common/LongButton";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import ShowPasswordStrength from "./ShowPasswordStrength";
import { passwordStrength } from "check-password-strength";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { redirect } from "next/navigation";
import { registerUser } from "@/app/actions";

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const [strength, setStrength] = useState(0);

    const password = useRef({});
    password.current = watch("password", "");

    useEffect(() => {
        if (password.current) {
            setStrength(passwordStrength(password.current).id);
        }
    }, [password.current]);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const onSubmit = async (data) => {
        await registerUser(data);
        reset();
        redirect("/");
    };

    return (
        <form
            className=" bg-white rounded mx-12 p-2 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="mb-4 p-1">
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Please enter your username",
                            },
                            validate: {},
                        })}
                        className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                    <hr />
                    <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                        {errors.username?.message}
                    </p>
                </div>
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    {...register("email", {
                        required: "Please enter valid email address",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                        },
                    })}
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
                <hr />
                <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                    {errors.email?.message}
                </p>
                <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <div className="flex items-center">
                    <input
                        {...register("password", {
                            required: "Please type password",
                            minLength: {
                                value: 8,
                                message:
                                    "Password needs to be atleast 8 characters.",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "Password needs to contain uppercase, lowercase, number and two special characters.",
                            },
                        })}
                        className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="******************"
                        data-testid="password-input"
                    />
                    <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? <FiEye /> : <FiEyeOff />}
                    </i>
                </div>
                <hr className="pb-1" />
                <ShowPasswordStrength strength={strength} />
                <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                    {errors.password?.message}
                </p>
                <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="confirmPassword"
                >
                    Confirm password
                </label>
                <input
                    {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                            value === password.current ||
                            "Passwords don't match",
                    })}
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="******************"
                    data-testid="confirm-password-input"
                />
                <hr />
                <p className=" text-red-700 font-light text-xs mb-2 min-h-4">
                    {errors.confirmPassword && (
                        <span>{errors.confirmPassword?.message}</span>
                    )}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <LongButton title="Create" variant="success" type="submit" />
            </div>
        </form>
    );
}
