import { configureStore } from "@reduxjs/toolkit";
import SearchBar from ".";
import filter from "../../actions/filter";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore({ reducer: { filter } });

describe("Button Renders text", () => {
	it("Testing Modal and functionality", async () => {
		render(
			<Provider store={mockStore}>
				<SearchBar placeholder="Search"></SearchBar>
			</Provider>
		);
		const input = screen.getByPlaceholderText("Search") as HTMLInputElement;
		expect(input).toBeInTheDocument();
		await userEvent.type(input, "abc{enter}");
		expect(input.value).toBe("abc");
	});
});
