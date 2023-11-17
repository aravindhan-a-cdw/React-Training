import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import Image from "../Image";
import { FC, memo } from "react";

/*
	@author Aravindhan A
	@description This component renders detailed poster view of a movie.
*/

type MovieDescriptionProps = {
	data: {
		id: number;
		movie: string;
		likes: number;
		link: string;
		description: string;
		actors: Array<string>;
	};
	arrayIndex: number;
	onLikeHandler: (arg: number) => void;
};

const MovieDescription: FC<MovieDescriptionProps> = (props) => {
	const { data, onLikeHandler, arrayIndex } = props;

	const actorsList = data.actors.map((actor, index) => (
		<li key={index}>{actor}</li>
	));

	return (
		<>
			<div className={styles.movieHeader}>
				<h2>{data.movie}</h2>
				<Image
					onClick={() => onLikeHandler(arrayIndex)}
					src={thumbsUp}
					alt="Thumbs up for like"
				/>
			</div>
			<span className={styles.likes}>{data.likes} Likes</span>
			<Image
				className={styles.movieImage}
				src={data.link}
				alt={data.movie}
			/>
			<p className={styles.movieDescription}>{data.description}</p>
			<div>
				<h3>Actors</h3>
				<ul>{actorsList}</ul>
			</div>
		</>
	);
};

export default memo(MovieDescription);
