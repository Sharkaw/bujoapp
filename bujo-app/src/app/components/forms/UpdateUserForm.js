"use client";

export default function UpdateUserForm({ readOnly, register, errors }) {
    return (
        <form>
            <div className="mb-4 p-1 border-b">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    {...register("username", {
                        required: "Please type username",
                    })}
                    className="appearance-none border-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    disabled={readOnly}
                />
            </div>
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
                    disabled={readOnly}
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
                    disabled={readOnly}
                />
            </div>
            <p className="text-red-700 font-light text-xs mb-2 min-h-4">
                {errors.password?.message}
            </p>
        </form>
    );
}
