import styles from "./style.module.scss";
import playBtn from "../../assets/play-button.svg";
import { useEffect, useRef } from "react";
import withAdvertisement from "../withAdvertisement";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import { counterFormater } from "../../utils/numberUtils";
import Image from "../Image";

/*
	@author Aravindhan A
	@description This component renders a single teaser video along with showing of advertisement.
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

type TeaserProps = {
	data: {
		id: number;
		videoSrc: string;
		title: string;
	};
	hocProps: HOCProps;
};

const Teaser: React.FC<TeaserProps> = (props: TeaserProps) => {
	const {
		data,
		hocProps: {
			adImage,
			isAdCountDown,
			counter,
			showAd,
			adCompleted,
			startAd,
			pauseHandler,
		},
	} = props;

	const videoRef = useRef<HTMLVideoElement>(null);
	const playBtnRef = useRef<HTMLImageElement>(null);
	const adRef = useRef<HTMLImageElement>(null);
	const videoContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Toggle video and ad when ad needs to be shown
		if (showAd) {
			videoRef.current?.pause();
			adRef.current!.style.display = "block";
			videoRef.current!.style.display = "none";
		}
		if (adCompleted) {
			videoRef.current?.play();
			adRef.current!.style.display = "none";
			videoRef.current!.style.display = "block";
		}
	}, [showAd, adCompleted]);

	const playBtnClickHandler = () => {
		// Handler to play video and to hide the play button.
		if (videoRef.current?.paused) {
			startAd();
			pauseHandler(false);
			videoRef.current?.play();
			playBtnRef.current!.style.display = "none";
		}
	};

	const videoPauseHandler = () => {
		// Handler to pause the video and show the play button
		videoRef.current!.pause();
		pauseHandler(true);
		playBtnRef.current!.style.display = "block";
	};

	return (
		<div className={styles.teaser}>
			<div ref={adRef} className={styles.adContainer}>
				<Image
					className={styles.advertisement}
					src={`/advertisements/small-promos/AdvertisementSmall${adImage}.png`}
					alt="Ad Poster"
				/>
			</div>
			<div ref={videoContainerRef} className={styles.videoContainer}>
				<Image
					ref={playBtnRef}
					onClick={playBtnClickHandler}
					src={playBtn}
					className={styles.playBtn}
					alt="Play button"
				/>
				<video
					onClick={videoPauseHandler}
					ref={videoRef}
					src={data.videoSrc + "#t=2.5"}
				></video>
			</div>
			<h5 className={styles.videoTitle}>{data.title}</h5>
			{counter ? (
				<span className={styles.adMessage}>
					{isAdCountDown
						? HOME_CONSTANTS.AD_IN
						: HOME_CONSTANTS.VIDEO_RESUME_IN}{" "}
					{counterFormater(counter)}
				</span>
			) : (
				""
			)}
		</div>
	);
};

export default withAdvertisement({ adWaitTime: 5, adTime: 2 })(Teaser);
