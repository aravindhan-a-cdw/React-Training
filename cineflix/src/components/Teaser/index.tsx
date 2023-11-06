import styles from "./style.module.css";
import playBtn from "../../assets/play-button.svg";
import fallback from "../../assets/fallbackImage.png";
import { useEffect, useRef, useState } from "react";

type TeaserProps = {
	data: {
		id: number;
		videoSrc: string;
		title: string;
	};
};

const Teaser = (props: TeaserProps) => {
	const { data } = props;
	const videoRef = useRef<HTMLVideoElement>(null);
	const playBtnRef = useRef<HTMLImageElement>(null);
	const adRef = useRef<HTMLImageElement>(null);
	const videoContainerRef = useRef<HTMLDivElement>(null);

	const [timer, setTimer] = useState(5);
	const [videoPlaying, setVideoPlaying] = useState(false);
	const [adCountDown, setAdCountDown] = useState(false);
	const [showAd, setShowAd] = useState(false);
	const [adShown, setAdShown] = useState(false);

	const [adImage] = useState(Math.ceil(Math.random() * 2));

	useEffect(() => {
		if (videoPlaying && !adShown) {
			const timerInterval = setInterval(() => {
				setTimer((state) => state - 1);
			}, 1000);

			if (timer === 0 && adCountDown === true) {
				setTimer(6);
				setShowAd(true);
				setAdCountDown(false);
				videoRef.current?.pause();
				adRef.current!.style.display = "block";
				videoContainerRef.current!.style.display = "none";
			}

			if (timer === 0 && showAd === true) {
				setAdShown(true);
				setShowAd(false);
				setAdCountDown(false);
				videoRef.current?.play();
				adRef.current!.style.display = "none";
				videoContainerRef.current!.style.display = "block";
			}
			return () => {
				clearInterval(timerInterval);
			};
		}
	}, [timer, adShown, showAd, adCountDown, videoPlaying]);

	const playBtnClickHandler = () => {
		if (videoRef.current?.paused) {
			setAdCountDown(true);
			setVideoPlaying(true);
			videoRef.current?.play();
			playBtnRef.current!.style.display = "none";
		}
	};

	const videoPauseHandler = () => {
		videoRef.current!.pause();
		setVideoPlaying(false);
		playBtnRef.current!.style.display = "block";
	};

	return (
		<div className={styles.teaser}>
			<div ref={adRef} className={styles.adContainer}>
				<img
					onError={(event) => {
						event.currentTarget.src = fallback;
					}}
					className={styles.advertisement}
					src={`/advertisements/small-promos/AdvertisementSmall${adImage}.png`}
					alt="Ad Poster"
				/>
			</div>
			<div ref={videoContainerRef} className={styles.videoContainer}>
				<img
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
			{adCountDown && !adShown && (
				<span className={styles.adMessage}>
					Advertisement in 00:0{timer}
				</span>
			)}
			{showAd && (
				<span className={styles.adMessage}>
					Video Resumes in 00:0{timer}
				</span>
			)}
		</div>
	);
};

export default Teaser;
