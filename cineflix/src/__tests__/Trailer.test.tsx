import { render, screen } from "@testing-library/react";
import Trailer from "../components/Trailer";
import { MemoryRouter, Route, Routes } from "react-router";

test("Teaser Component renders successfully", () => {
	render(
		<MemoryRouter initialEntries={["/"]}>
			<Routes>
				<Route path="/" element={<Trailer />}></Route>
			</Routes>
		</MemoryRouter>
	);

	const movieTitle = screen.getByText("Sintel");
	expect(movieTitle).toBeInTheDocument();
});
