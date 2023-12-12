import { fireEvent, render, screen } from "@testing-library/react";
import Modal from ".";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import darkMode from "../../actions/darkMode";

const mockStore = configureStore({ reducer: { darkMode } });

describe("Button Renders text", () => {
	it("Testing Modal and functionality", () => {
		const okMockHandler = jest.fn();
		const noMockHandler = jest.fn();
		const closeMockHandler = jest.fn();

		render(
			<Provider store={mockStore}>
				<Modal
					header="Title"
					body="Content"
					footer={
						<>
							<button onClick={okMockHandler}>Ok</button>
							<button onClick={noMockHandler}>No</button>
						</>
					}
					closeModalHandler={closeMockHandler}
				></Modal>
			</Provider>
		);
		const header = screen.getByText("Title");
		// fireEvent.click(element);
		expect(header).toBeInTheDocument();

		const bodyContent = screen.getByText("Content");
		expect(bodyContent).toBeInTheDocument();

		const closeModal = screen.getByText("x");
		expect(closeModal).toBeInTheDocument();

		fireEvent.click(closeModal);
		expect(closeMockHandler).toHaveBeenCalledTimes(1);

		const buttons = screen.getAllByRole("button");
		expect(buttons.length).toBe(2);
		buttons.forEach((btn) => fireEvent.click(btn));
		expect(okMockHandler).toHaveBeenCalledTimes(1);
		expect(noMockHandler).toHaveBeenCalledTimes(1);
	});
});
