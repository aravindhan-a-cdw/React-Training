import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import fallback from "../../assets/fallbackImage.png";

/*
	@author Aravindhan A
	@description This component renders the short details of a single movie
*/

type MovieProps = {
	id: number;
	likes: number;
	movie: string;
	link: string;
	actors: Array<string>;
	onClick?: () => void;
	onLike?: () => void;
};

const Movie = (props: MovieProps) => {
	return (
		<div className={styles.movieContainer}>
			<img
				onError={(event) => {
					event.currentTarget.src = fallback;
				}}
				onClick={props.onClick}
				src={props.link}
				alt={props.movie}
			/>
			<div className={styles.content}>
				<div>
					<h3>{props.movie}</h3>
					<span>{props.likes} Likes</span>
				</div>
				<img
					className={styles.like}
					onClick={props.onLike}
					src={thumbsUp}
					alt="Thumbs up for like"
				/>
			</div>
		</div>
	);
};

export default Movie;
