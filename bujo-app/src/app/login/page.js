"use client";

import LoginForm from "@/app/components/forms/LoginForm";
import Link from "next/link";

export default function Form() {
    return (
        <div className="m-1 p-1 bg-white h-full w-full max-w-xs text-gray-800 justify-center">
            <h1 className="mt-8">Log in</h1>
            <p className="p-1 m-1 inline-block align-baseline font-bold text-sm">
                New to BuJo?{" "}
                <Link
                    href="/register"
                    className=" text-blue-500 hover:text-blue-800"
                >
                    Create an account
                </Link>
            </p>
            <LoginForm />
        </div>
    );
}
