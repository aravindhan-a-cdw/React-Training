import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Service from "../../services/placesService";
import { FOOTER_CONSTANTS } from "../../constants/ComponentConstants";

/*
	@author Aravindhan A
	@description Footer Component - This contains the user form.
*/

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
	const [errorState, setErrorState] = useState({
		name: false,
		contact: false,
		destination: false,
		homeTown: false,
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
		setErrorState({
			name: false,
			contact: false,
			destination: false,
			homeTown: false,
		});

		if (
			formState.name === "" ||
			formState.contact === "" ||
			formState.homeTown === "" ||
			formState.destination === ""
		) {
			if (formState.name.trim() === "") {
				setErrorState((state) => {
					return {
						...state,
						name: true,
					};
				});
			}
			if (formState.contact === "" || formState.contact.length !== 10) {
				setErrorState((state) => {
					return {
						...state,
						contact: true,
					};
				});
			}
			if (formState.homeTown === "") {
				setErrorState((state) => {
					return {
						...state,
						homeTown: true,
					};
				});
			}
			if (
				formState.destination === "" ||
				formState.homeTown === formState.destination
			) {
				setErrorState((state) => {
					return {
						...state,
						destination: true,
					};
				});
			}
			return setShowMessage(false);
		}
		setMessageState({
			...formState,
			name:
				formState.name.length > 50
					? formState.name.substring(0, 50) + "..."
					: formState.name,
		});
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
						error={errorState.name}
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
						defaultValue={formState.homeTown}
						borderColor="#979797"
						id_name="home-town"
						error={errorState.homeTown}
					/>
					<label htmlFor="destination">
						{FOOTER_CONSTANTS.DESTINATION}
					</label>
					<Dropdown
						options={destinationCities}
						defaultValue={formState.destination}
						onChange={(value) =>
							setFormState((existing) => {
								return { ...existing, destination: value };
							})
						}
						borderColor="#979797"
						id_name="destination"
						error={errorState.destination}
					/>
					<label htmlFor="contact">{FOOTER_CONSTANTS.CONTACT}</label>
					<Input
						type="number"
						id="contact"
						name="contact"
						onChange={(value) =>
							setFormState((existing) => {
								return { ...existing, contact: value };
							})
						}
						error={errorState.contact}
						max_length={10}
						min_length={10}
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

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
