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
	const [showMessage, setShowMessage] = useState(false);
	const [destinationCities, setDestinationCities] = useState(cities);
	const [formState, setFormState] = useState({
		name: "",
		contact: "",
		destination: "",
		homeTown: "",
	});
	const [messageState, setMessageState] = useState(formState);

	useEffect(() => {
		Service.getAllPlaces().then((data) =>
			setCities(data.map((details: { city: string }) => details.city))
		);
	}, []);

	useEffect(() => {
		setDestinationCities(
			cities?.filter((value) => value !== formState.homeTown)
		);
	}, [cities, formState]);

	const handleFormSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		if (
			formState.name === "" ||
			formState.contact === "" ||
			formState.homeTown === "" ||
			formState.destination === ""
		) {
			return setShowMessage(false);
		}
		setMessageState(formState);
		setShowMessage(true);
		return false;
	};

	return (
		<footer className={`${styles.footer_container} ${className}`}>
			<div className={styles.form_container}>
				<h3 className={`primary-text ${styles.heading}`}>
					{FOOTER_CONSTANTS.HEADING}
				</h3>
				<span className={`primary-text-light ${styles.sub_heading}`}>
					{FOOTER_CONSTANTS.SUB_HEADING}
				</span>

				<form onSubmit={handleFormSubmit}>
					<label htmlFor="name">{FOOTER_CONSTANTS.NAME}</label>
					<Input
						id="name"
						name="name"
						onChange={(value) =>
							setFormState((existing) => {
								return { ...existing, name: value };
							})
						}
					/>
					<label htmlFor="home-town">
						{FOOTER_CONSTANTS.HOME_TOWN}
					</label>
					<Dropdown
						options={cities}
						onChange={(value) =>
							setFormState((existing) => {
								return { ...existing, homeTown: value };
							})
						}
						borderColor="#979797"
						id_name="home-town"
					/>
					<label htmlFor="destination">
						{FOOTER_CONSTANTS.DESTINATION}
					</label>
					<Dropdown
						options={destinationCities}
						onChange={(value) =>
							setFormState((existing) => {
								return { ...existing, destination: value };
							})
						}
						borderColor="#979797"
						id_name="destination"
					/>
					<label htmlFor="contact">{FOOTER_CONSTANTS.CONTACT}</label>
					<Input
						id="contact"
						name="contact"
						onChange={(value) =>
							setFormState((existing) => {
								return { ...existing, contact: value };
							})
						}
					/>
					<Button
						onClick={handleFormSubmit}
						className={styles.submit_btn}
					>
						{FOOTER_CONSTANTS.BUTTON_TITLE}
					</Button>
				</form>
			</div>

			{showMessage && (
				<div className={styles.message}>
					Thank you <b>{messageState.name}</b> for expressing your
					interest in travelling with us. Our Sales team will get back
					with the best packages from <b>{messageState.homeTown}</b>{" "}
					to <b>{messageState.destination}</b>.
				</div>
			)}
		</footer>
	);
};

export default Footer;
