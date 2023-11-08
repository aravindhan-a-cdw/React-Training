import { FormEvent, useContext, useRef, useState } from "react";
import image from "../../assets/sindel-background.png";
import styles from "./styles.module.scss";
import { AuthContext } from "../../stores/AuthContext";
import { NavLink, useLoaderData } from "react-router-dom";
import Trailer from "../../components/Trailer";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import movieServices from "../../services/movieService";
import Teaser from "../../components/Teaser";

/*
	@author Aravindhan A
	@description This component renders the Home page of the application
*/

type TeaserData = {
	id: number;
	title: string;
	videoSrc: string;
};

const Home = () => {
	const { authData } = useContext(AuthContext);
	const data = useLoaderData() as Array<TeaserData>;

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
				<img
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
				<div className={styles.teasersSection}>
					<h4>{HOME_CONSTANTS.TEASER_TITLE}</h4>
					<div className={styles.teasersContainer}>
						{data.map((data, index) => (
							<Teaser key={index} data={data} />
						))}
					</div>
				</div>
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

export const loader = () => {
	return movieServices.teaserService();
};

export default Home;
