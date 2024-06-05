import { describe, expect, beforeAll, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RegisterForm from "../RegisterForm";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Register", () => {
    const mockRegisterUser = vi.fn();

    vi.mock("../app/actions", () => ({
        registerUser: mockRegisterUser,
    }));
    beforeAll(() => {
        render(<RegisterForm />);
    });

    //  const usernameInput = await screen.findByLabelText(/Username/i);
    //     const emailInput = await screen.findByLabelText(/Email/i);
    //     const passwordInput = screen.getByTestId("password-input");
    //     const confirmPasswordInput = screen.getByTestId("confirm-password-input");
    //     const createButton = screen.getByRole("button", {
    //         value: "Create",
    //     });

    it("renders the register form", async () => {
        expect(await screen.findByLabelText(/Username/i)).toBeInTheDocument();
        expect(await screen.findByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByTestId("password-input")).toBeInTheDocument();
        expect(
            screen.getByTestId("confirm-password-input")
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", {
                value: "Create",
            })
        ).toBeInTheDocument();
    });

    it("validates password input", async () => {
        const passwordInput = screen.getByTestId("password-input");
        const confirmPasswordInput = screen.getByTestId(
            "confirm-password-input"
        );
        const createButton = screen.getByRole("button", {
            value: "Create",
        });

        //Empty password
        await user.click(createButton);

        expect(
            await screen.findByText("Please type password")
        ).toBeInTheDocument();
        expect(mockRegisterUser).not.toHaveBeenCalled();

        //Too short password
        await user.type(passwordInput, "short");
        await user.click(createButton);

        expect(
            await screen.findByText(
                "Password needs to be atleast 8 characters."
            )
        ).toBeInTheDocument();
        expect(mockRegisterUser).not.toHaveBeenCalled();

        //Not right characters
        await user.type(passwordInput, "shortsummer");
        await user.click(createButton);

        expect(
            await screen.findByText(
                "Password needs to contain uppercase, lowercase, number and two special characters."
            )
        ).toBeInTheDocument();
        expect(mockRegisterUser).not.toHaveBeenCalled();

        //confirm password different
        await user.clear(passwordInput);
        await user.type(passwordInput, "CorrectPassword1!");
        await user.type(confirmPasswordInput, "DifferentPassword1!");
        user.click(createButton);

        expect(
            await screen.findByText("Passwords don't match")
        ).toBeInTheDocument();
        expect(mockRegisterUser).not.toHaveBeenCalled();
    });
});
