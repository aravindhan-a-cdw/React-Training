import { render, screen } from "@testing-library/react";
import Input from "../components/Input";

test("Input renders successfully", () => {
	render(<Input name="test" id="test" type="text" />);

	const element = screen.getByTestId("input");

	expect(element).toBeInTheDocument();
});
