import Button from "../Button";
import styles from "./styles.module.css";

type CardProps = {
	data: {
		place: string;
		city: string;
		shortDescription: string;
		fullDescription: string;
	};
};

function Card(props: CardProps) {
	const { data } = props;
	return (
		<div className={styles.card}>
			<img
				src={`/assets/${data.city.toLowerCase()}.png`}
				alt={data.city}
			/>
			<h4>{data.place}</h4>
			<h3>{data.city}</h3>
			<p>{data.shortDescription}</p>
			<Button padding="1rem 1.75rem">Read More</Button>
		</div>
	);
}

export default Card;
