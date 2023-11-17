import { FormEvent, useContext, useRef, useState } from "react";
import image from "../../assets/sindel-background.png";
import styles from "./styles.module.scss";
import { AuthContext } from "../../stores/AuthContext";
import { NavLink, Outlet } from "react-router-dom";
import Trailer from "../../components/Trailer";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import Image from "../../components/Image";

/*
	@author Aravindhan A
	@description This component renders the Home page of the application
*/

// type TeaserData = {
// 	id: number;
// 	title: string;
// 	videoSrc: string;
// };

const Home = () => {
	const { authData } = useContext(AuthContext);

	const [message, setMessage] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const lotterySubmit = (event: FormEvent) => {
		// This function handles the form event of lottery section
		event.preventDefault();
		const value = inputRef.current?.value || "";
		let regex = new RegExp("^[0-9]{10}$");
		if (!regex.test(value)) {
			inputRef.current!.style.border = "1px solid red";
			return;
		}
		if (Number(value) % 2 === 0) {
			setMessage(
				"Hurray! You won a free ticket to Blind Date on Wednesday"
			);
		} else {
			setMessage("Sorry :( Better Luck Next Time");
		}
	};

	return (
		<div className={styles.homeContainer}>
			<div className={styles.imageContainer}>
				<Image
					className={styles.bannerImage}
					src={image}
					alt="Sindel Movie poster"
				/>
			</div>
			<div className={styles.lotterySection}>
				{message ? (
					<p>{message}</p>
				) : (
					<form onSubmit={lotterySubmit}>
						<p>{HOME_CONSTANTS.LOTTERY_BANNER}</p>
						<input
							ref={inputRef}
							type="tel"
							name="mobile"
							placeholder={
								HOME_CONSTANTS.MOBILE_INPUT_PLACEHOLDER
							}
						/>
						<button>{HOME_CONSTANTS.BUTTON_LUCKY}</button>
					</form>
				)}
			</div>
			<main>
				<div className={styles.trailersSection}>
					<h4>{HOME_CONSTANTS.TRAILER_TITLE}</h4>
					{!authData.isAuthenticated && (
						<p>
							{HOME_CONSTANTS.SIGN_IN_MESSAGE}{" "}
							<NavLink to="/login">
								{HOME_CONSTANTS.SIGN_IN_NOW}
							</NavLink>
						</p>
					)}
					<Trailer className={styles.trailer} />
				</div>
				<Outlet />
				<div className={styles.otherLanguageSection}>
					<h4>{HOME_CONSTANTS.LANGUAGE.TITLE}</h4>
					<ul>
						{HOME_CONSTANTS.LANGUAGE.AVAILABLE.map(
							(lang, index) => (
								<li key={index}>{lang}</li>
							)
						)}
					</ul>
				</div>
			</main>
		</div>
	);
};

export default Home;
