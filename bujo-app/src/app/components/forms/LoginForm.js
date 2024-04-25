"use client";
import { LongButton } from "@/app/components/common/LongButton";

export default function LoginForm() {
    return (
        <form className=" bg-white rounded mx-12 p-2 pb-8 mb-4">
            <div className="mb-8 p-1 border-b">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                >
                    Username/email
                </label>
                <input
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                />
            </div>
            <div className="mb-8 p-1 border-b">
                <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    className=" appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <LongButton title="Login" variant="success" />
                <a
                    className="m-1 p-1 inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </form>
    );
}
