import { useParams, useLoaderData } from "react-router-dom";
import Banner from "../../layouts/Banner";
import styles from "./styles.module.scss";
import CardsList from "../../layouts/CardsList";
import { DETAIL_CONSTANTS } from "../../constants/PageConstants";
import { useEffect } from "react";

type PlaceData = {
	place: string;
	city: string;
	shortDescription: string;
	fullDescription: string;
	temperature?: number;
};

type PageData = {
	placeData: PlaceData;
	relatedPlaces: Array<string>;
	allPlacesData: Array<PlaceData>;
};

const Details = () => {
	const { place } = useParams();
	const data = useLoaderData() as PageData;

	useEffect(() => {
		console.log("Details callled");
		window.scrollTo(0, 0);
	}, [place]);

	const descriptions = data.placeData.fullDescription
		.split("\\n")
		.map((content) => <p>{content}</p>);

	return (
		<>
			<Banner className={styles.banner} image={`/images/${place}.png`}>
				<div className={styles.banner_content}>
					<h3 className={`primary-text ${styles.title}`}>{place}</h3>
					<div className={styles.slogan_container}>
						<h4 className={styles.slogan}>
							{data.placeData.place}
						</h4>
					</div>
					<span className={styles.temperature}>
						{data.placeData.temperature}
						<span>&deg;</span> {DETAIL_CONSTANTS.TEMPERATURE_UNIT}
					</span>
				</div>
			</Banner>
			<main className={styles.content}>
				<section>{descriptions}</section>
				<section className={styles.destinations}>
					<CardsList
						title={DETAIL_CONSTANTS.SIMILAR_DESTINATIONS.HEADING}
						subtitle={
							DETAIL_CONSTANTS.SIMILAR_DESTINATIONS.SUB_HEADING +
							` ${place}`
						}
						cards={data.allPlacesData.filter((x) =>
							data.relatedPlaces.includes(x.city)
						)}
					></CardsList>
				</section>
			</main>
		</>
	);
};

export default Details;
