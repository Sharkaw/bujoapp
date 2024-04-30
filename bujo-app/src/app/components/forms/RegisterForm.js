"use client";
import { LongButton } from "@/app/components/common/LongButton";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <form
            className=" bg-white rounded mx-12 p-2 pb-8 mb-4"
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
        >
            <div className="mb-4 p-1">
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="userName"
                    >
                        Username
                    </label>
                    <input
                        {...register("userName", {
                            required: {
                                value: 2,
                                message: "Please enter your username",
                            },
                            validate: {},
                        })}
                        className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="userName"
                        type="text"
                        placeholder="Username"
                    />
                    <hr />
                    <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                        {errors.userName?.message}
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
                <input
                    {...register("password", {
                        required: "Please type password",
                        minLength: {
                            value: 4,
                            message:
                                "Password needs to be longer than 4 characters.",
                        },
                        pattern: {
                            value: /[A-Za-z]{3}/,
                            message:
                                "Password needs to contain uppercase, lowercase, numbers and special characters.",
                        },
                    })}
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                />
                <hr />
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
                        require: true,
                        validate: (value) =>
                            value === password || "Passwords don't match",
                    })}
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="******************"
                />
                <hr />
                <p className=" text-red-700 font-light text-xs mb-2 min-h-4">
                    {errors.confirmPassword && (
                        <span>{errors.confirmPassword?.message}</span>
                    )}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <LongButton
                    title="Create"
                    variant="success"
                    type="submit"
                    // onClick={handleSubmit(onSubmit)}
                />
            </div>
        </form>
    );
}
