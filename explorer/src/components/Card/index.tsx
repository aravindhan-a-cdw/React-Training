import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

/*
	@author Aravindhan A
	@description Card Component - To show details of a place
	Place data must be passed as props in data arg.
*/

type CardProps = {
	data: {
		place: string;
		city: string;
		shortDescription: string;
		fullDescription: string;
	};
};

Card.propTypes = {
	data: PropTypes.shape({
		place: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		shortDescription: PropTypes.string.isRequired,
		fullDescription: PropTypes.string.isRequired,
	}),
};

function Card(props: CardProps) {
	const { data } = props;
	const navigate = useNavigate();

	const cardClickHandler = (city: string) => {
		navigate(`/place/${data.city.toLowerCase()}`);
	};

	return (
		<div className={styles.card}>
			<img
				src={`/images/${data.city.toLowerCase()}.png`}
				alt={data.city}
			/>
			<h4>{data.place}</h4>
			<h3>{data.city}</h3>
			<p>{data.shortDescription}</p>
			<Button onClick={cardClickHandler} className={styles.btn}>
				Read More
			</Button>
		</div>
	);
}

export default Card;
