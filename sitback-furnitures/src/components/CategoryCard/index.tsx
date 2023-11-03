import Button from "../Button";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import altImage from "../../assets/spacejoy.jpg";

/*
	@author Aravindhan A
	@description This component renders a Card containing category and its information
*/

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
	const navigate = useNavigate();

	const clickHandler = () => navigate("/products/" + categoryData.id);

	return (
		<div className={`${className} ${styles.card}`}>
			<img
				src={categoryData.photo}
				alt={categoryData.category}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = altImage;
				}}
			/>
			<h3>{categoryData.category}</h3>
			<p>{categoryData.description}</p>
			<Button clickHandler={clickHandler}>Shop Now</Button>
		</div>
	);
};

export default CategoryCard;
