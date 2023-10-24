import { useLoaderData } from "react-router";
import { HOME_CONSTANTS } from "../../constants/ComponentConstants";
import styles from "./styles.module.scss";
import Services from "../../services/Services";
import CategoryCard from "../../components/CategoryCard";
import CardsContainer from "../../containers/CardsContainer";
import { useNavigation } from "react-router-dom";
import Spinner from "../../components/Spinner";
import CategoriesDisplay from "../../components/CategoriesDisplay";

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

	return (
		<main>
			{state === "loading" ? (
				<Spinner />
			) : (
				<CategoriesDisplay categories={data} />
			)}
		</main>
	);
};

export default Home;
