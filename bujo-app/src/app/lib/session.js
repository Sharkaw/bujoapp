export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "Bujo-test",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
