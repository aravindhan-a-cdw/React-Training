import styles from "./styles.module.scss";
import thumbsUp from "../../assets/thumbs-up.png";
import { useEffect, useRef, FC } from "react";
import withAdvertisement from "../withAdvertisement";
import { counterFormater } from "../../utils/numberUtils";
import { ALL_MOVIES_CONSTANTS } from "../../constants/pageConstants";
import Image from "../Image";

/*
	@author Aravindhan A
	@description This component renders detailed poster view of a movie and shows advertisement after some interval.
*/

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
	arrayIndex: number;
	onLikeHandler: (arg: number) => void;
	hocProps: HOCProps;
};

const MovieDescription: FC<MovieDescriptionProps> = (props) => {
	const {
		data,
		onLikeHandler,
		arrayIndex,
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
		// This resets ad if the selected movie changes.
		resetAd();
		// It depends on id alone since if likes change, it may also trigger a reset.
	}, [data.id]);

	useEffect(() => {
		// This starts ad if it is not in completed state.
		if (!adCompleted) startAd();
	}, [startAd, adCompleted]);

	const adRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Toggle ad and content
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
				<Image
					className={styles.advertisement}
					src={`/advertisements/large-promos/adv${adImage}.png`}
					alt="Ad Poster"
				/>
			</div>
			<div ref={contentRef} className={styles.movieDetails}>
				<div className={styles.movieHeader}>
					<h2>{data.movie}</h2>
					<Image
						onClick={() => onLikeHandler(arrayIndex)}
						src={thumbsUp}
						alt="Thumbs up for like"
					/>
				</div>
				<span className={styles.likes}>{data.likes} Likes</span>
				<Image src={data.link} alt={data.movie} />
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
