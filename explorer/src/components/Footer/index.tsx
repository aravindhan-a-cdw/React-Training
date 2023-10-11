import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Service from "../../services/apiservice";
import { FOOTER_CONSTANTS } from "../../constants/ComponentConstants";

type FooterProps = {
	className?: string;
};

const Footer = (props: FooterProps) => {
	const { className } = props;

	const [cities, setCities] = useState([]);
	const [homeTown, setHomeTown] = useState("");
	const [destination, setDestination] = useState("");
	const [destinationCities, setDestinationCities] = useState(cities);

	useEffect(() => {
		Service.getAllPlaces().then((data) =>
			setCities(data.map((details: { city: string }) => details.city))
		);
	}, []);

	useEffect(() => {
		setDestinationCities(cities?.filter((value) => value !== homeTown));
	}, [cities, homeTown]);

	const handleFormSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log(destination);
		return false;
	};

	return (
		<footer className={`${styles.footer_container} ${className}`}>
			<h3 className={`primary-text ${styles.heading}`}>
				{FOOTER_CONSTANTS.HEADING}
			</h3>
			<span className={`primary-text-light ${styles.sub_heading}`}>
				{FOOTER_CONSTANTS.SUB_HEADING}
			</span>

			<form onSubmit={handleFormSubmit}>
				<label htmlFor="name">{FOOTER_CONSTANTS.NAME}</label>
				<Input id="name" name="name" />
				{/* <input
					className={styles.input}
					type="text"
					id="name"
					name="name"
				/> */}
				<label htmlFor="home-town">{FOOTER_CONSTANTS.HOME_TOWN}</label>
				<Dropdown
					options={cities}
					onChange={setHomeTown}
					borderColor="#979797"
					id_name="home-town"
				/>
				<label htmlFor="destination">
					{FOOTER_CONSTANTS.DESTINATION}
				</label>
				<Dropdown
					options={destinationCities}
					onChange={setDestination}
					borderColor="#979797"
					id_name="destination"
				/>
				<label htmlFor="contact">{FOOTER_CONSTANTS.CONTACT}</label>
				<Input id="contact" name="contact" />
				{/* <input
					className={styles.input}
					type="number"
					id="contact"
					name="contact"
				/> */}
				<Button className={styles.submit_btn}>
					{FOOTER_CONSTANTS.BUTTON_TITLE}
				</Button>
			</form>
		</footer>
	);
};

export default Footer;
