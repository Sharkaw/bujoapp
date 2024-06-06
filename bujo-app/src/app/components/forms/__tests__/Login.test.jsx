import { describe, test, expect, beforeAll, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import LoginForm from "../LoginForm";
import userEvent from "@testing-library/user-event";
import { login } from "@/app/actions";

const user = userEvent.setup();
vi.mock("@/app/actions", () => ({
    login: vi.fn().mockResolvedValue({ success: true }),
}));

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

        expect(emailInput).toHaveValue("Alice@test.test");
        expect(passwordInput).toHaveValue("securepassword1234");
    });

    test("validates email input", async () => {
        const emailInput = await screen.findByLabelText(/Email/i);
        const loginButton = screen.getByRole("button", { name: /login/i });

        //empty input
        await user.clear(emailInput);
        await user.click(loginButton);

        expect(
            await screen.findByText("Please type email")
        ).toBeInTheDocument();
        expect(login).not.toHaveBeenCalled();

        //not an email
        await user.clear(emailInput);
        await user.type(emailInput, "alicetest");
        await user.click(loginButton);

        expect(
            await screen.findByText("Invalid email address")
        ).toBeInTheDocument();
        expect(login).not.toHaveBeenCalled();
    });

    test("validates password input", async () => {
        const passwordInput = await screen.findByLabelText(/Password/i);
        const loginButton = screen.getByRole("button", {
            name: /login/i,
        });

        //empty input
        await user.clear(passwordInput);
        await user.click(loginButton);

        expect(
            await screen.findByText("Please type password")
        ).toBeInTheDocument();
        expect(login).not.toHaveBeenCalled();
    });

    test("form is submitted", async () => {
        const emailInput = await screen.findByLabelText(/Email/i);
        const passwordInput = await screen.findByLabelText(/Password/i);
        const loginButton = screen.getByRole("button", { name: /login/i });

        await user.clear(emailInput);
        await user.clear(passwordInput);

        await user.type(emailInput, "alice@example.com");
        await user.type(passwordInput, "securepassword1234");

        await user.click(loginButton);

        await waitFor(() => {
            expect(login).toHaveBeenCalledWith({
                email: "alice@example.com",
                password: "securepassword1234",
            });
            expect(login).toHaveBeenCalledTimes(1);
        });
    });
});
