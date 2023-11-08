import { useLoaderData } from "react-router";
import { ALL_MOVIES_CONSTANTS } from "../../constants/pageConstants";
import services from "../../services/movieService";
import styles from "./styles.module.scss";
import { useCallback, useState } from "react";
import Movie from "../../components/Movie";
import Button from "../../components/Button";
import movieServices from "../../services/movieService";
import MovieDescription from "../../components/MovieDescription";

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
	const [selectedMovie, setSelectedMovie] = useState(0);

	const [showLoadMore, setShowLoadMore] = useState(true);

	const likeHandler = useCallback(function (index: number) {
		setMovies((state) => {
			const newState = [...state];
			newState[index].likes = Number(newState[index].likes) + 1;
			return newState;
		});
	}, []);

	const MoviesList = movies.map((data, index) => (
		<Movie
			key={data.id}
			onClick={() => setSelectedMovie(index)}
			onLike={() => likeHandler(index)}
			{...data}
		/>
	));

	const loadMoreHandler = async () => {
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
						onLikeHandler={() => likeHandler(selectedMovie)}
						data={movies[selectedMovie]}
					/>
				</div>
			</div>
		</main>
	);
};

const loader = async () => {
	const data = await services.movieService(1);
	return data;
};

export { loader };

export default AllMovies;
