import bcrypt from "bcrypt";

export const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};
