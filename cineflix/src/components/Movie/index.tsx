import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import Image from "../Image";
import { useEffect, useRef } from "react";
import React from "react";

function useTraceUpdate(props: any) {
	const prev = useRef(props);
	useEffect(() => {
		const changedProps = Object.entries(props).reduce((ps: any, [k, v]) => {
			if (prev.current[k] !== v) {
				ps[k] = [prev.current[k], v];
			}
			return ps;
		}, {});
		if (Object.keys(changedProps).length > 0) {
			console.log("Changed props:", changedProps);
		}
		prev.current = props;
	});
}

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
	onClick?: (arg: number) => void;
	onLike?: (id: number) => void;
};

const Movie = (props: MovieProps) => {
	const {
		id,
		link,
		movie,
		likes,
		arrayIndex,
		onClick = (id: number) => {},
		onLike = (id) => {},
	} = props;
	useTraceUpdate(props);
	console.log("Movies rendered");
	return (
		<div className={styles.movieContainer}>
			<Image
				onClick={() => onClick(arrayIndex)}
				src={props.link}
				alt={props.movie}
			/>
			<div className={styles.content}>
				<div>
					<h3>{props.movie}</h3>
					<span>{props.likes} Likes</span>
				</div>
				<Image
					className={styles.like}
					onClick={() => onLike(arrayIndex)}
					src={thumbsUp}
					alt="Thumbs up for like"
				/>
			</div>
		</div>
	);
};

export default React.memo(Movie);
