import styles from "./styles.module.scss";

type CardsContainerProps = {
	className?: string;
	children: any;
};

const CardsContainer = (props: CardsContainerProps) => {
	const { className, children } = props;
	return (
		<div className={`${className} ${styles.cards_container}`}>
			{children}
		</div>
	);
};

export default CardsContainer;
