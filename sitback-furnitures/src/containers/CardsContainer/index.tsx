import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component is a card container which will render list of cards and it acts like a flex container
*/

type CardsContainerProps = {
	className?: string;
	children: any;
};

const CardsContainer = (props: CardsContainerProps) => {
	const { className = "", children } = props;
	return (
		<div className={`${className} ${styles.cards_container}`}>
			{children}
		</div>
	);
};

export default CardsContainer;
