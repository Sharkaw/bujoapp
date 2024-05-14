"use client";
import { LongButton } from "@/app/components/common/LongButton";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(data),
        });

        console.log(await response.json());
    };

    return (
        <form
            className=" bg-white rounded mx-12 p-2 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
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
    );
}
