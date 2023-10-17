import Button from "../../components/Button";
import Banner from "../../layouts/Banner";
import { HOME_CONSTANTS } from "../../constants/PageConstants";
import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import Service from "../../services/apiService";
import styles from "./styles.module.scss";
import CardsList from "../../layouts/CardsList";
import { useNavigate } from "react-router-dom";

function Home() {
	const [cities, setCities] = useState([]);
	const [data, setData] = useState([]);
	const [selectedValue, setSelectedValue] = useState("");

	useEffect(() => {
		Service.getAllPlaces().then((data) => setData(data));
		Service.getAllPlaces().then((data) =>
			setCities(data.map((details: { city: string }) => details.city))
		);
	}, []);

	const navigate = useNavigate();

	const exploreBtnHandler = (event: { target: { value: string } }) => {
		navigate(`/place/${selectedValue}`);
	};

	return (
		<>
			<Banner image="/images/banner.png">
				<div className={styles.banner}>
					<h3>{HOME_CONSTANTS.HEADER.WELCOME}</h3>
					<h4>
						{HOME_CONSTANTS.HEADER.SUB_HEADING_PART_1}{" "}
						<span>{HOME_CONSTANTS.HEADER.SUB_HEADING_PART_2}</span>
					</h4>
					<Dropdown
						className={styles.banner_dropdown}
						options={cities}
						onChange={(value) => setSelectedValue(value)}
						id_name="destination"
					></Dropdown>
					<Button
						onClick={exploreBtnHandler}
						className={styles.explore_btn}
					>
						{HOME_CONSTANTS.HEADER.BUTTON_TEXT}
					</Button>
				</div>
			</Banner>
			<div className={styles.destinations}>
				<CardsList
					title={HOME_CONSTANTS.DESTINATIONS.HEADING}
					subtitle={HOME_CONSTANTS.DESTINATIONS.SUB_HEADING}
					cards={data}
				></CardsList>
			</div>
		</>
	);
}

export default Home;
