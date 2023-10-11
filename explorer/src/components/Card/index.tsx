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
				src={`/images/${data.city.toLowerCase()}.png`}
				alt={data.city}
			/>
			<h4>{data.place}</h4>
			<h3>{data.city}</h3>
			<p>{data.shortDescription}</p>
			<Button className={styles.btn}>Read More</Button>
		</div>
	);
}

export default Card;
