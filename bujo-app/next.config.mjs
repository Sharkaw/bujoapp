/** @type {import('next').NextConfig} */
// const path = require("path");
// import * as path from "path";
// import { fileURLToPath } from "url";
// const __dirname = import.meta.dirname;

// const nextConfig = {
//     webpack: (config) => {
//         config.resolve.alias["@"] = path.resolve(__dirname, "src");
//         return config;
//     },
// };

// export default nextConfig;

import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(filename);

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias["@"] = path.join(__dirname, "src");
        return config;
    },
};

export default nextConfig;
