import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

describe("Login", () => {
    test("form is rendered", () => {
        render(<LoginForm />);
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    });
});
