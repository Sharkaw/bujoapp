"use client";
import Link from "next/link";
import RegisterForm from "../components/forms/RegisterForm";

export default function Form() {
    return (
        <div className="m-1 p-1 bg-white h-full w-full max-w-xs text-gray-800 justify-center">
            <h1 className="mt-8">Sign up</h1>
            <p className="p-1 m-1 inline-block align-baseline font-bold text-sm">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className=" text-blue-500 hover:text-blue-800"
                >
                    Login
                </Link>
            </p>
            <RegisterForm />
        </div>
    );
}
