import { describe, expect, beforeAll, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "../RegisterForm";
import userEvent from "@testing-library/user-event";
import { registerUser } from "@/app/actions";

const user = userEvent.setup();

vi.mock("@/app/actions", () => ({
    registerUser: vi.fn().mockResolvedValue({ success: true }),
}));

vi.mock("next/navigation", () => ({
    redirect: vi.fn(),
}));

describe("Register", () => {
    beforeAll(() => {
        render(<RegisterForm />);
    });

    it("renders the register form", async () => {
        expect(await screen.findByLabelText(/Username/i)).toBeInTheDocument();
        expect(await screen.findByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByTestId("password-input")).toBeInTheDocument();
        expect(
            screen.getByTestId("confirm-password-input")
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", {
                name: "Create",
            })
        ).toBeInTheDocument();
    });

    it("validates password input", async () => {
        const passwordInput = screen.getByTestId("password-input");
        const confirmPasswordInput = screen.getByTestId(
            "confirm-password-input"
        );
        const createButton = screen.getByRole("button", {
            name: "Create",
        });

        //Empty password
        await user.click(createButton);

        expect(
            await screen.findByText("Please type password")
        ).toBeInTheDocument();
        expect(registerUser).not.toHaveBeenCalled();

        //Too short password
        await user.clear(passwordInput);
        await user.type(passwordInput, "short");
        await user.click(createButton);

        expect(
            await screen.findByText(
                "Password needs to be atleast 8 characters."
            )
        ).toBeInTheDocument();
        expect(registerUser).not.toHaveBeenCalled();

        //Not right characters
        await user.clear(passwordInput);
        await user.type(passwordInput, "shortsummer");
        await user.click(createButton);

        expect(
            await screen.findByText(
                "Password needs to contain uppercase, lowercase, number and two special characters."
            )
        ).toBeInTheDocument();
        expect(registerUser).not.toHaveBeenCalled();

        //confirm password different
        await user.clear(passwordInput);
        await user.clear(confirmPasswordInput);
        await user.type(passwordInput, "CorrectPassword1!");
        await user.type(confirmPasswordInput, "DifferentPassword1!");
        user.click(createButton);

        expect(
            await screen.findByText("Passwords don't match")
        ).toBeInTheDocument();
        expect(registerUser).not.toHaveBeenCalled();
    });

    it("validate email", async () => {
        const emailInput = await screen.findByLabelText(/Email/i);
        const createButton = screen.getByRole("button", {
            name: "Create",
        });

        await user.clear(emailInput);
        await user.type(emailInput, "alice.test");
        await user.click(createButton);

        expect(
            await screen.findByText("Invalid email address")
        ).toBeInTheDocument();
        expect(registerUser).not.toHaveBeenCalled();
    });

    it("submits form with valid inputs", async () => {
        const usernameInput = await screen.findByLabelText(/Username/i);
        const emailInput = await screen.findByLabelText(/Email/i);
        const passwordInput = screen.getByTestId("password-input");
        const confirmPasswordInput = screen.getByTestId(
            "confirm-password-input"
        );
        const createButton = screen.getByRole("button", {
            name: "Create",
        });

        await user.clear(passwordInput);
        await user.clear(confirmPasswordInput);
        await user.clear(emailInput);
        await user.clear(usernameInput);

        await user.type(usernameInput, "Summer");
        await user.type(emailInput, "test@example.com");
        await user.type(passwordInput, "CorrectPassword1!");
        await user.type(confirmPasswordInput, "CorrectPassword1!");
        await user.click(createButton);

        await waitFor(() => {
            expect(registerUser).toHaveBeenCalledWith({
                username: "Summer",
                email: "test@example.com",
                password: "CorrectPassword1!",
                confirmPassword: "CorrectPassword1!",
            });
            expect(registerUser).toHaveBeenCalledTimes(1);
        });
    });
});
