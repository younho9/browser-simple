import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

describe("", () => {
	it("loads and displays greeting", async () => {
		// ARRANGE
		render(<App />);
		const button = screen.getByText("count is 0");

		fireEvent.click(button); // 1
		fireEvent.click(button); // 2
		fireEvent.click(button); // 3
		fireEvent.click(button); // 4
		fireEvent.click(button); // 5
		fireEvent.click(button); // 6
		fireEvent.click(button); // 7
		fireEvent.click(button); // 8
		fireEvent.click(button); // 9
		fireEvent.click(button); // 10

		expect(screen.getByText("count is 10"));
	});
});
