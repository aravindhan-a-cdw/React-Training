import { useLoaderData } from "react-router";
import Services from "../../services/productServices";
import { useNavigation } from "react-router-dom";
import Spinner from "../../components/Spinner";
import CategoriesList from "../../components/CategoriesList";

/*
	@author Aravindhan A
	@description This renders the home page of the application
*/

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
				<CategoriesList categories={data} />
			)}
		</main>
	);
};

export default Home;
