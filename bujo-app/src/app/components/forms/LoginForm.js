"use client";
import { login } from "@/app/actions";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { LongButton } from "../common/LongButton";
import ThemeContext from "@/app/lib/ThemeContext";
import ThemeToggle from "../ThemeToggle";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [data, setData] = useState();

    const processForm = async (data) => {
        const result = await login(data);

        if (!result) {
            console.log("Something went wrong");
            return;
        }

        if (result.error) {
            console.log(result.error);
            return;
        }
        reset();
        setData(result.data);
    };
    const { theme, user } = useContext(ThemeContext);

    return (
        <div>
            {/* <div
                className={`min-h-screen ${
                    theme === "light" ? "bg-white" : "bg-gray-900"
                }`}
            >
                <title>Next.js with Tailwind CSS and useContext</title>
                <meta
                    name="description"
                    content="A sample project using Next.js, Tailwind CSS, and useContext"
                />
                <link rel="icon" href="/favicon.ico" />

                <main className="flex flex-col items-center justify-center py-20">
                    <h1
                        className={`text-4xl ${
                            theme === "light" ? "text-black" : "text-white"
                        }`}
                    >
                        Welcome to Next.js with Tailwind CSS
                    </h1>
                    <p>{user}</p>
                    <ThemeToggle />
                </main>
            </div> */}
        <form
            className=" bg-white rounded mx-12 p-2 pb-8 mb-4"
            onSubmit={handleSubmit(processForm)}
        >
            <div className="mb-4 p-1 border-b">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    {...register("email", {
                        required: "Please type email",
                    })}
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                {errors.email?.message}
            </p>
            <div className="mb-4 p-1 border-b">
                <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    {...register("password", {
                        required: "Please type password",
                    })}
                    className=" appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                />
            </div>
            <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                {errors.password?.message}
            </p>
            <div className="flex flex-col justify-center items-center">
                <LongButton title="Login" variant="success" type="submit" />
                <a
                    className="m-1 p-1 inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </form>
        </div>
    );
}
