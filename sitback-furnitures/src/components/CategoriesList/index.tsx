import { HOME_CONSTANTS } from "../../constants/ComponentConstants";
import CardsContainer from "../../containers/CardsContainer";
import CategoryCard from "../CategoryCard";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders list of categories in the home page.
*/

type CategoryData = {
	id: string;
	category: string;
	photo: string;
	description: string;
};

type CategoriesListProps = {
	categories: Array<CategoryData>;
};

const CategoriesList = (props: CategoriesListProps) => {
	const { categories: categoriesData } = props;

	const categories = categoriesData.map((data) => (
		<CategoryCard key={data.id} categoryData={data} />
	));

	return (
		<div className={styles.home_container}>
			<h4>{HOME_CONSTANTS.TAG_LINE_1}</h4>
			<h5>{HOME_CONSTANTS.TAG_LINE_2}</h5>

			<CardsContainer className={styles.categories_container}>
				{categories}
			</CardsContainer>
		</div>
	);
};

export default CategoriesList;
