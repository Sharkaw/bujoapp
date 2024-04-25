"use client";

import LoginForm from "@/app/components/forms/LoginForm";

export default function Form() {
    return (
        <div className="m-1 p-1 bg-white h-full w-full max-w-xs text-gray-800 justify-center">
            <h1>Log in</h1>
            <p className="p-1 m-1 inline-block align-baseline font-bold text-sm">
                New to BuJo?{" "}
                <a href="#" className=" text-blue-500 hover:text-blue-800">
                    Create an account
                </a>
            </p>
            <LoginForm />
        </div>
    );
}
