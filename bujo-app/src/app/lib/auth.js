const bcrypt = require("bcrypt");

const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};

exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
