import { describe, test, expect, vi, beforeEach, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm"; // Adjust the path as necessary
import userEvent from "@testing-library/user-event";
import { login } from "@/app/actions"; // Adjust the path as necessary
import prisma from "@/app/lib/prisma"; // Adjust the path as necessary
import { comparePassword } from "@/app/lib/auth"; // Adjust the path as necessary
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

const user = userEvent.setup();

describe("Login", () => {
    beforeAll(() => {
        render(<LoginForm />);
    });

    test("form is rendered", () => {
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /login/i })
        ).toBeInTheDocument();
    });

    test("user can write to form inputs", async () => {
        const emailInput = await screen.findByLabelText(/Email/i);
        const passwordInput = await screen.findByLabelText(/Password/i);

        await user.type(emailInput, "Alice@test.test");
        await user.type(passwordInput, "securepassword1234");

        expect(emailInput).toHaveDisplayValue("Alice@test.test");
        expect(passwordInput).toHaveDisplayValue("securepassword1234");
    });
});
