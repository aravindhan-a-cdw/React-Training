import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import fallback from "../../assets/fallbackImage.png";
import { useEffect, useRef, useState } from "react";

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

	const [adImage] = useState(Math.ceil(Math.random() * 2));

	const adRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const [counter, setCounter] = useState(15);
	const [isAdCountDown, setIsAdCountDown] = useState(true);
	const [showAd, setShowAd] = useState(false);
	const [adCompleted, setAdCompleted] = useState(false);

	useEffect(() => {
		if (!adCompleted) {
			const timerInterval = setInterval(() => {
				setCounter((state) => state - 1);
			}, 1000);

			if (counter === 0 && isAdCountDown === true) {
				setShowAd(true);
				setCounter(5);
				setIsAdCountDown(false);
				adRef.current!.style.display = "block";
				contentRef.current!.style.display = "none";
			}

			if (counter === 0 && showAd === true) {
				setAdCompleted(true);
				setShowAd(false);
				adRef.current!.style.display = "none";
				contentRef.current!.style.display = "flex";
			}

			return () => {
				clearInterval(timerInterval);
			};
		}
	}, [counter, adCompleted, showAd, isAdCountDown]);

	useEffect(() => {
		if (isAdCountDown || adCompleted) {
			setIsAdCountDown(true);
			setAdCompleted(false);
			setCounter(15);
		}
	}, [props]);

	const actorsList = data.actors.map((actor, index) => (
		<li key={index}>{actor}</li>
	));

	return (
		<div className={styles.container}>
			<div ref={adRef} className={styles.adContainer}>
				<img
					onError={(event) => {
						event.currentTarget.src = fallback;
					}}
					className={styles.advertisement}
					src={`/advertisements/large-promos/adv${adImage}.png`}
					alt="Ad Poster"
				/>
			</div>
			<div ref={contentRef} className={styles.movieDetails}>
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
			{!adCompleted && isAdCountDown && (
				<span className={styles.adMessage}>
					Advertisement in 00:{counter < 10 ? "0" + counter : counter}
				</span>
			)}
			{showAd && (
				<span className={styles.adMessage}>
					Resume in 00:{counter < 10 ? "0" + counter : counter}
				</span>
			)}
		</div>
	);
};

export default MovieDescription;
