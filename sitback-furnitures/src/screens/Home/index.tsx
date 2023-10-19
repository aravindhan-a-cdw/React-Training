import { useLoaderData } from "react-router";
import { HOME_CONSTANTS } from "../../constants/ComponentConstants";
import styles from "./styles.module.scss";
import Services from "../../services/Services";
import CategoryCard from "../../components/CategoryCard";
import CardsContainer from "../../containers/CardsContainer";
import { useNavigation } from "react-router-dom";
import Spinner from "../../components/Spinner";

type CategoryData = {
	id: string;
	category: string;
	photo: string;
	description: string;
};

export const loader = async () => {
	return await Services.getAllCategories();
};

const Home = () => {
	const data = useLoaderData() as Array<CategoryData>;
	const { state } = useNavigation();

	const categories = data.map((data) => (
		<CategoryCard key={data.id} categoryData={data} />
	));

	return (
		<main>
			{state === "loading" ? (
				<Spinner />
			) : (
				<div className={styles.home_container}>
					<h4>{HOME_CONSTANTS.TAG_LINE_1}</h4>
					<h5>{HOME_CONSTANTS.TAG_LINE_2}</h5>

					<CardsContainer className={styles.categories_container}>
						{categories}
					</CardsContainer>
				</div>
			)}
		</main>
	);
};

export default Home;
