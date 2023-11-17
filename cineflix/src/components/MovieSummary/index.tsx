import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import Image from "../Image";
import { MOVIE_CONSTANTS } from "../../constants/componentConstants";
import React from "react";

/*
	@author Aravindhan A
	@description This component renders the short details of a single movie
*/

type MovieProps = {
	id: number;
	likes: number;
	movie: string;
	link: string;
	arrayIndex: number;
	actors: Array<string>;
	onClick: (arg: number) => void;
	onLike: (id: number) => void;
};

const MovieSummary = (props: MovieProps) => {
	const { link, movie, likes, arrayIndex, onClick, onLike } = props;
	return (
		<div className={styles.movieContainer}>
			<Image onClick={() => onClick(arrayIndex)} src={link} alt={movie} />
			<div className={styles.content}>
				<div>
					<h3>{movie}</h3>
					<span>
						{likes}{" "}
						{likes > 1
							? MOVIE_CONSTANTS.LIKES
							: MOVIE_CONSTANTS.LIKE}
					</span>
				</div>
				<Image
					className={styles.like}
					onClick={() => onLike(arrayIndex)}
					src={thumbsUp}
					alt="Thumbs logo denoting like"
				/>
			</div>
		</div>
	);
};

export default React.memo(MovieSummary);
