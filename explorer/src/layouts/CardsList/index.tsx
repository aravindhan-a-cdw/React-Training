import Card from "../../components/Card";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

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

CardsList.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			place: PropTypes.string.isRequired,
			city: PropTypes.string.isRequired,
			shortDescription: PropTypes.string.isRequired,
			fullDescription: PropTypes.string.isRequired,
		})
	),
};

export default CardsList;
