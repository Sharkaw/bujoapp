import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
export default async function registerHandler(req, res) {
    if (req.method === "POST") {
        const { userName, email, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await prisma.user.create({
                data: {
                    username: userName,
                    email: email,
                    password: hashedPassword,
                },
            });
            res.status(200).json({ id: user.id, username: user.username });
        } catch (error) {
            console.error("Failed to register user:", error);
            res.status(500).json({
                message: "Failed to register user",
                error: error.message,
            });
        } finally {
            await prisma.$disconnect();
        }
    }
}
