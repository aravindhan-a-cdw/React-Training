import Button from "../Button";
import styles from "./styles.module.scss";

type CategoryCardProps = {
	className?: string;
	categoryData: {
		id: string;
		category: string;
		photo: string;
		description: string;
	};
};

const CategoryCard = (props: CategoryCardProps) => {
	const { className = "", categoryData } = props;
	return (
		<div className={`${className} ${styles.card}`}>
			<img src={categoryData.photo} alt={categoryData.category} />
			<h3>{categoryData.category}</h3>
			<p>{categoryData.description}</p>
			<Button>Shop Now</Button>
		</div>
	);
};

export default CategoryCard;
