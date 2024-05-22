import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
    const isMatch = bcrypt.compare(password, hashedPassword);
    return isMatch;
};
