export const defaultSession = {
    isLoggedIn: false,
};

export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "Bujo-app",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
};
