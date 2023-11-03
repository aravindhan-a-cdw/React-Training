import { FormEvent, useContext, useRef, useState } from "react";
import image from "../../assets/sindel-background.png";
import styles from "./styles.module.scss";
import { AuthContext } from "../../stores/AuthContext";
import { NavLink, useLoaderData } from "react-router-dom";
import Trailer from "../../components/Trailer";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import movieServices from "../../services/movieService";
import Teaser from "../../components/Teaser";

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

	console.log(data);
	return (
		<div className={styles.home_container}>
			<div className={styles.image_container}>
				<img
					className={styles.banner_image}
					src={image}
					alt="Sindel Movie poster"
				/>
			</div>
			<div className={styles.lottery_section}>
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
				<div className={styles.trailers_section}>
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
				<div className={styles.teasers_section}>
					<h4>{HOME_CONSTANTS.TEASER_TITLE}</h4>
					<div className={styles.teasers_container}>
						{data.map((data) => (
							<Teaser key={data.id} data={data} />
						))}
					</div>
				</div>
				<div className={styles.other_language_section}>
					<h4>{HOME_CONSTANTS.LANGUAGE.TITLE}</h4>
					<ul>
						{HOME_CONSTANTS.LANGUAGE.AVAILABLE.map((lang) => (
							<li>{lang}</li>
						))}
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
