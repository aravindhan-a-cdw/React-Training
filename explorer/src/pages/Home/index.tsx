import Button from "../../components/Button";
import Card from "../../components/Card";
import Nav from "../../components/Navbar";
import Banner from "../../layouts/Banner";
import { HOME_CONSTANTS } from "../../constants/PageConstants";
import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import Service from "../../services/apiservice";
import styles from "./styles.module.scss";
import CardsList from "../../layouts/CardsList";

function Home() {
	const [cities, setCities] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		Service.getAllPlaces().then((data) => setData(data));
		Service.getAllPlaces().then((data) =>
			setCities(data.map((details: { city: string }) => details.city))
		);
	}, []);

	const place = {
		place: "Never Ending Paddy Fields and Narrorw Roads",
		city: "Pollachi",
		shortDescription:
			"Pollachi is a town and a taluk headquarters in Coimbatore district, Tamil Nadu state, India. Located about 40 km (25 mi) to the south of Coimbatore, it is the second largest town in the district after Coimbatore. Pollachi is a popular Marketplace for jaggery, vegetables and cattle.[2] As of 2011, the town had a population of 90,180.",
		fullDescription:
			"Pollachi is a town and a taluk headquarters in Coimbatore district, Tamil Nadu state, India. Located about 40 km (25 mi) to the south of Coimbatore, it is the second largest town in the district after Coimbatore. Pollachi is a popular Marketplace for jaggery, vegetables and cattle.[2] As of 2011, the town had a population of 90,180.Pollachi was known as Pozhil Vaitchi in Tamil which means 'gifted with beauty' and later became Pollachi. It was also known as Mudi Konda Chola Nallur during the period of the Cholas.[3]In 2019, the town became notable for the 2019 Pollachi sexual assault case involving the rape and extortion of numerous women by a gang.[4] According to the 2011 census, Pollachi had a population of 90,180 with a sex-ratio of 1,012 females for every 1,000 males, much above the national average of 929.[6] A total of 7,732 were under the age of six, constituting 3,952 males and 3,780 females. Scheduled Castes and Scheduled Tribes accounted for 10.57% and 0.29% of the population respectively. \\n Pollachi was known as Pozhil Vaitchi in Tamil which means 'gifted with beauty' and later became Pollachi. It was also known as Mudi Konda Chola Nallur during the period of the Cholas.[3]In 2019, the town became notable for the 2019 Pollachi sexual assault case involving the rape and extortion of numerous women by a gang.[4] According to the 2011 census, Pollachi had a population of 90,180 with a sex-ratio of 1,012 females for every 1,000 males, much above the national average of 929.[6] A total of 7,732 were under the age of six, constituting 3,952 males and 3,780 females. Scheduled Castes and Scheduled Tribes accounted for 10.57% and 0.29% of the population respectively. \\n The average literacy of the city was 82.15%, compared to the national average of 72.99%.[6] The city had a total of 24,755 households. There were a total of 36,972 workers, comprising 219 cultivators, 488 main agricultural laborers, 1,018 in household industries, 32,720 other workers, 2,527 marginal workers, 25 marginal cultivators, 45 marginal agricultural laborers, 124 marginal workers in household industries and 2,333 other marginal workers.[1]",
		// relatedPlaces: ["Chidambaram", "Kumbakonam", "Tirunelveli"],
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
						id_name="destination"
					></Dropdown>
					<Button className={styles.explore_btn}>
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
