import { render, screen } from "@testing-library/react";
import MovieDescription from "../components/MovieDescription";
import React from "react";

test("MovieDescription renders successfully", () => {
	const movieData = {
		link: "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		movie: "Drishyam",
		likes: 222,
		id: 1,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
		actors: ["Mohanlal", "Meena", "Ansiba", "Ester", "Siddique", "Asha"],
	};
	render(<MovieDescription data={movieData} onLikeHandler={() => {}} />);

	const movieTitle = screen.getByText("Drishyam");
	expect(movieTitle).toBeInTheDocument();

	const movieDescription = screen.getByText(movieData.description);
	expect(movieDescription).toBeInTheDocument();

	const likes = screen.getByText(`${movieData.likes} Likes`);
	expect(likes).toBeInTheDocument();

	const image = screen.getByAltText(movieData.movie);
	expect(image).toBeInTheDocument();
});

test("MovieDescription renders Ad Poster", () => {
	const movieData = {
		link: "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		movie: "Drishyam",
		likes: 222,
		id: 1,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
		actors: ["Mohanlal", "Meena", "Ansiba", "Ester", "Siddique", "Asha"],
	};
	render(<MovieDescription data={movieData} onLikeHandler={() => {}} />);

	const adPoster = screen.getByAltText("Ad Poster");
	expect(adPoster).toBeInTheDocument();

	const adMessage = screen.getByText("Advertisement in 00:15");
	expect(adMessage).toBeInTheDocument();
});
