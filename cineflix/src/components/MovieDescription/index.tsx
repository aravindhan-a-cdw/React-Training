import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import fallback from "../../assets/fallbackImage.png";

type MovieData = {
	data: {
		id: number;
		movie: string;
		likes: number;
		link: string;
		description: string;
		actors: Array<string>;
	};
	onLikeHandler: () => void;
};

const MovieDescription = (props: MovieData) => {
	const { data, onLikeHandler } = props;

	const actorsList = data.actors.map((actor, index) => (
		<li key={index}>{actor}</li>
	));

	return (
		<div className={styles.container}>
			<div className={styles.movieDetails}>
				<div className={styles.movieHeader}>
					<h2>{data.movie}</h2>
					<img
						onClick={onLikeHandler}
						src={thumbsUp}
						alt="Thumbs up for like"
					/>
				</div>
				<span className={styles.likes}>{data.likes} Likes</span>
				<img
					onError={(event) => {
						event.currentTarget.src = fallback;
					}}
					src={data.link}
					alt={data.movie}
				/>
				<p>{data.description}</p>
				<div>
					<h3>Actors</h3>
					<ul>{actorsList}</ul>
				</div>
			</div>
		</div>
	);
};

export default MovieDescription;
