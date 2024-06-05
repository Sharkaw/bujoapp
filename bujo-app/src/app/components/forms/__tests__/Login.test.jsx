import { describe, test, expect, vi, beforeEach, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";
import userEvent from "@testing-library/user-event";

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

    test("error is displayed when email value is invalid", async () => {
        const emailInput = await screen.findByLabelText(/Email/i);
        const loginButton = screen.getByRole("button", {
            name: /login/i,
            type: "submit",
        });

        await user.type(emailInput, "Alicetest.test");

        // Example validation check
        // expect(emailInput.validationMessage).toBe("Please type email");
    });
});
