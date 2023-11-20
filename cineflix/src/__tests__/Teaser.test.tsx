import { render, screen } from "@testing-library/react";
import Teaser from "../components/Teaser";
import { MemoryRouter, Route, Routes } from "react-router";

test("Advertisement in Teaser component", async () => {
	const movieData = {
		videoSrc:
			"https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		title: "Drishyam",
		id: 1,
	};

	render(
		<MemoryRouter initialEntries={["/"]}>
			<Routes>
				<Route path="/" element={<Teaser data={movieData} />}></Route>
			</Routes>
		</MemoryRouter>
	);

	const adPoster = screen.getByAltText("Ad Poster");
	expect(adPoster).toBeInTheDocument();

	// fireEvent.click(await screen.findByAltText("Play button"));
});
