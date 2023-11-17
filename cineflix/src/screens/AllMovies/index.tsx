import { useLoaderData } from "react-router";
import { ALL_MOVIES_CONSTANTS } from "../../constants/pageConstants";
import services from "../../services/movieService";
import styles from "./styles.module.scss";
import { useCallback, useState } from "react";
import Movie from "../../components/Movie";
import Button from "../../components/Button";
import movieServices from "../../services/movieService";
import MovieDescription from "../../components/MovieDescription";

/*
	@author Aravindhan A
	@description This component renders the all movies page
*/

type MovieData = {
	id: number;
	movie: string;
	link: string;
	likes: number;
	description: string;
	actors: Array<string>;
};

const AllMovies = () => {
	const [movies, setMovies] = useState<Array<MovieData>>(
		useLoaderData() as Array<MovieData>
	);
	console.log("All movies rendered");
	const [selectedMovie, setSelectedMovie] = useState(0);

	const [showLoadMore, setShowLoadMore] = useState(true);

	const increaseLike = (index: number) => {
		// This handler increases the likes of a movie
		setMovies((state) => {
			const newState = [...state];
			newState[index] = { ...state[index] };
			newState[index].likes = Number(newState[index].likes) + 1;
			return newState;
		});
	};

	const clickHandler = (movieIndex: number) => {
		setSelectedMovie(movieIndex);
	};

	const memoizedLikeHandler = useCallback(
		(index: number) => increaseLike(index),
		[]
	);

	const memoizedSelectHandler = useCallback(
		(index: number) => clickHandler(index),
		[]
	);

	const MoviesList = movies.map((data, index) => (
		<Movie
			key={data.id}
			arrayIndex={index}
			onClick={memoizedSelectHandler}
			onLike={memoizedLikeHandler}
			{...data}
		/>
	));

	const loadMoreHandler = async () => {
		// This handler loads more movies into the state
		const moreMovies = await movieServices.movieService(
			movies.length / 6 + 1
		);
		if (moreMovies.length < 6) {
			setShowLoadMore(false);
		}
		setMovies((state) => [...state, ...moreMovies]);
	};

	return (
		<main className={styles.mainContainer}>
			<h3>{ALL_MOVIES_CONSTANTS.PAGE_TITLE}</h3>
			<div className={styles.container}>
				<div className={styles.moviesContainer}>
					<div className={styles.moviesList}>{MoviesList}</div>
					<Button
						className={`${styles.loadMoreBtn} ${
							showLoadMore ? "" : styles.hidden
						}`}
						onClick={loadMoreHandler}
					>
						Load More
					</Button>
				</div>
				<div className={styles.movieDescription}>
					<MovieDescription
						arrayIndex={selectedMovie}
						onLikeHandler={memoizedLikeHandler}
						data={movies[selectedMovie]}
					/>
				</div>
			</div>
		</main>
	);
};

const loader = async () => {
	// This function gets movies from the api service.
	const data = await services.movieService(1);
	return data;
};

export { loader };

export default AllMovies;
