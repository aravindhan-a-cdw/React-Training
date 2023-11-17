import styles from "./styles.module.scss";
import { NOW_SHOWING_CONSTANTS } from "../../constants/pageConstants";
import playBtn from "../../assets/play-button.svg";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../stores/AuthContext";
import { Navigate } from "react-router-dom";
import Image from "../../components/Image";

/*
	@author Aravindhan A
	@description This component renders the Now showing page of the application
*/

const NowShowing = () => {
	const {
		authData: { isAuthenticated },
	} = useContext(AuthContext);

	const videoRef = useRef<HTMLVideoElement>(null);
	const playBtnRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		// This is used to set handlers on the video and playbutton
		if (videoRef.current === undefined || playBtnRef.current === undefined)
			return;
		if (videoRef.current === null || playBtnRef.current === null) return;
		videoRef.current!.onplay = () => {
			if (playBtnRef.current === null) return;
			playBtnRef.current.style.display = "none";
		};

		videoRef.current!.onpause = () => {
			if (playBtnRef.current === null) return;
			playBtnRef.current.style.display = "block";
		};

		videoRef.current!.onclick = () => {
			videoRef.current?.pause();
		};

		playBtnRef.current!.onclick = () => {
			videoRef.current!.play();
		};
	}, []);

	if (!isAuthenticated) {
		// Redirect to login page if user is not authenticated
		return <Navigate to={"/login"} />;
	}
	return (
		<div className={styles.container}>
			<h3>{NOW_SHOWING_CONSTANTS.PAGE_TITLE}</h3>
			<h4>{NOW_SHOWING_CONSTANTS.MOVIE_TITLE}</h4>
			<div className={styles.movieContainer}>
				<Image ref={playBtnRef} src={playBtn} alt="Play button" />
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
