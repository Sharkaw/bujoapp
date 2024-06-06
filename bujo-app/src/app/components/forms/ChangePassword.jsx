"use client";

import { useState, useEffect, useRef } from "react";
import ShowPasswordStrength from "./ShowPasswordStrength";
import { passwordStrength } from "check-password-strength";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function ChangePassword({ register, errors, watch }) {
    const [strength, setStrength] = useState(0);
    const [passwordShown, setPasswordShown] = useState(false);

    const password = useRef({});
    password.current = watch("password", "");

    useEffect(() => {
        if (password.current) {
            setStrength(passwordStrength(password.current).id);
        }
    }, [password.current, watch]);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="pl-6">
            <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="password"
            >
                New password
            </label>
            <div className="mb-4 p-1 border-b flex items-center">
                <input
                    {...register("password", {
                        minLength: {
                            value: 8,
                            message:
                                "Password needs to be at least 8 characters.",
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:
                                "Password needs to contain uppercase, lowercase, number and special character.",
                        },
                    })}
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={passwordShown ? "text" : "password"}
                    placeholder="******************"
                />
                <i onClick={togglePasswordVisibility}>
                    {passwordShown ? <FiEye /> : <FiEyeOff />}
                </i>
            </div>

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
                    validate: (value) =>
                        value === password.current || "Passwords don't match",
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
    );
}
