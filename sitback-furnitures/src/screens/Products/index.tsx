import { useNavigation, useLoaderData } from "react-router";
import Services from "../../services/Services";
import styles from "./styles.module.scss";
import ProductItem from "../../components/ProductItem";
import CardsContainer from "../../containers/CardsContainer";
import Spinner from "../../components/Spinner";

export const loader = async (category: string | undefined) => {
	if (category === undefined) throw Error("Category is not defined!");
	return await Services.getProductsByCategory(category);
};

type ProductData = {
	description: string;
	guarantee: number;
	id: number;
	name: string;
	photo: string;
	price: number;
	rating: number;
};

const Products = () => {
	const data = useLoaderData() as Array<ProductData>;
	const { state } = useNavigation();

	const productItems = data.map((data) => (
		<ProductItem key={data.id} data={data} />
	));

	return state === "loading" ? (
		<Spinner />
	) : (
		<CardsContainer className={styles.products_container}>
			{productItems}
		</CardsContainer>
	);
};

export default Products;
