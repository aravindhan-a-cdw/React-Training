import { fireEvent, render, screen } from "@testing-library/react";
import CheckBox from ".";
import "@testing-library/jest-dom";

describe("Button Renders text", () => {
	it("Testing checkbox and functionality", () => {
		const mockHandler = jest.fn();
		render(
			<CheckBox
				data-testid="checkbox"
				name="check"
				checked={true}
				clickHandler={mockHandler}
			></CheckBox>
		);
		const element = screen.getByRole("checkbox") as HTMLInputElement;
		fireEvent.click(element);
		expect(element.checked).toBe(true);
		expect(element).toBeInTheDocument();
		expect(mockHandler).toHaveBeenCalledTimes(1);
		expect(mockHandler).toHaveBeenCalledWith("check", false);
	});
});
