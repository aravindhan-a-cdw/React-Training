import styles from "./styles.module.scss";
import { NOW_SHOWING_CONSTANTS } from "../../constants/pageConstants";
import playBtn from "../../assets/play-button.svg";
import { useEffect, useRef } from "react";

const NowShowing = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const playBtnRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		videoRef.current!.onplay = () => {
			playBtnRef.current!.style.display = "none";
		};

		videoRef.current!.onpause = () => {
			playBtnRef.current!.style.display = "block";
		};

		videoRef.current!.onclick = () => {
			videoRef.current?.pause();
		};

		playBtnRef.current!.onclick = () => {
			videoRef.current!.play();
		};
	});

	return (
		<div className={styles.container}>
			<h3>{NOW_SHOWING_CONSTANTS.PAGE_TITLE}</h3>
			<h4>{NOW_SHOWING_CONSTANTS.MOVIE_TITLE}</h4>
			<div className={styles.movie_container}>
				<img ref={playBtnRef} src={playBtn} alt="Play button" />
				<video
					ref={videoRef}
					src="https://tympanus.net/Development/SeatPreview/media/sintel.mp4#t=2.1"
				/>
			</div>
			<p>{NOW_SHOWING_CONSTANTS.MOVIE_DESCRIPTON}</p>
		</div>
	);
};

export default NowShowing;
