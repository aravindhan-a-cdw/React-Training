import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import fallback from "../../assets/fallbackImage.png";
import { useEffect, useRef, FC } from "react";
import withAdvertisement from "../withAdvertisement";
import { counterFormater } from "../../utils/numberUtils";
import { ALL_MOVIES_CONSTANTS } from "../../constants/pageConstants";

type HOCProps = {
	adImage: number;
	isAdCountDown: boolean;
	counter: number;
	showAd: boolean;
	adCompleted: boolean;
	pauseHandler: (arg0: boolean) => void;
	resetAd: () => void;
	startAd: () => void;
};

type MovieDescriptionProps = {
	data: {
		id: number;
		movie: string;
		likes: number;
		link: string;
		description: string;
		actors: Array<string>;
	};
	onLikeHandler: () => void;
	hocProps: HOCProps;
};

const MovieDescription: FC<MovieDescriptionProps> = (props) => {
	const {
		data,
		onLikeHandler,
		hocProps: {
			adImage,
			isAdCountDown,
			counter,
			showAd,
			adCompleted,
			resetAd,
			startAd,
		},
	} = props;

	useEffect(() => {
		resetAd();
	}, [data.id]);

	useEffect(() => {
		if (!adCompleted) startAd();
	}, [startAd, adCompleted]);

	const adRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (showAd) {
			adRef.current!.style.display = "block";
			contentRef.current!.style.display = "none";
		}
		if (adCompleted) {
			adRef.current!.style.display = "none";
			contentRef.current!.style.display = "flex";
		}
	}, [showAd, adCompleted]);

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
			{counter ? (
				<span className={styles.adMessage}>
					{isAdCountDown
						? ALL_MOVIES_CONSTANTS.AD_IN
						: ALL_MOVIES_CONSTANTS.RESUME_IN}{" "}
					{counterFormater(counter)}
				</span>
			) : (
				""
			)}
		</div>
	);
};

export default withAdvertisement({ adWaitTime: 15, adTime: 5 })(
	MovieDescription
);
