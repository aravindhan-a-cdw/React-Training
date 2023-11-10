import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";
import "@testing-library/jest-dom";

describe("Button Renders text", () => {
	it("Hello is rendered in the screen", () => {
		render(<Button>Hello</Button>);
		const element = screen.getByText("Hello");
		expect(element).toBeInTheDocument();
	});
});
