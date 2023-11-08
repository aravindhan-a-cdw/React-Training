import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

test("Button renders successfully", () => {
	render(<Button>Submit</Button>);

	const element = screen.getByText(/Submit/i);

	expect(element).toBeInTheDocument();
});
