"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RegisterForm from "../components/forms/RegisterForm";
import FormSkeleton from "@/app/components/skeleton/FormSkeleton";

export default function Form() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to show the skeleton
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <FormSkeleton />;
    }


    return (
        <div className="m-1 p-1 bg-white h-full w-full max-w-xs text-gray-800 justify-center">
            <h1 className="text-5xl mt-8">Sign up</h1>
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
