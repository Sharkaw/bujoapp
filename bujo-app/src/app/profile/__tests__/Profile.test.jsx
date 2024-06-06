import { describe, expect, beforeAll, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfilePage from "@/app/profile/ProfilePage";

const user = userEvent.setup();

const mockUser = {
    id: 1,
    email: "alice@example.com",
    username: "alice",
    picture: "/profileimages/1.png",
};

describe("Profile", () => {
    beforeAll(() => {
        render(<ProfilePage user={mockUser} />);
    });
    it("render profile view", () => {
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /edit profile/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /choose avatar/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /save profile/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /delete profile/i })
        ).toBeInTheDocument();
    });

    it("renders the profile image", () => {
        const image = screen.getByTestId("profile-image");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("alt", "user");

        const src = image.getAttribute("src");
        const originalSrc = src.match(/url=([^&]*)/)[1];
        expect(decodeURIComponent(originalSrc)).toBe("/profileimages/1.png");
    });

    it.todo("Should change only username", async () => {});
    it.todo("Should change only email", async () => {});
});
