import Card from "../../components/Card";
import styles from "./styles.module.scss";

type CardsListProps = {
	title: string;
	subtitle: string;
	cards: Array<{
		place: string;
		city: string;
		shortDescription: string;
		fullDescription: string;
	}>;
};

const CardsList = (props: CardsListProps) => {
	const { title, subtitle, cards } = props;
	return (
		<div>
			<h3 className={`primary-text ${styles.title}`}>{title}</h3>
			<h4 className={`primary-text-light ${styles.slogan}`}>
				{subtitle}
			</h4>
			<div className={`${styles.cards_container}`}>
				{cards.map((details, index) => {
					return <Card data={details} key={index} />;
				})}
			</div>
		</div>
	);
};

export default CardsList;
