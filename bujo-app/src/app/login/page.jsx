"use client";

import { useState, useEffect } from "react";
import LoginForm from "@/app/components/forms/LoginForm";
import Link from "next/link";
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
        <div className="m-1 p-1 h-full w-full max-w-xs text-gray-800 justify-center">
            <h1 className="text-5xl mt-8">Log in</h1>
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
