import { useLoaderData } from "react-router";
import Services from "../../services/productServices";
import { useNavigation } from "react-router-dom";
import Spinner from "../../components/Spinner";
import CategoriesDisplay from "../../components/CategoriesList";

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
