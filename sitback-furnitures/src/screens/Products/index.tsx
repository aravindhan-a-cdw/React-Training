import { useNavigation, useLoaderData } from "react-router";
import Services from "../../services/Services";
import styles from "./styles.module.scss";
import ProductItem from "../../components/ProductItem";
import CardsContainer from "../../containers/CardsContainer";
import Spinner from "../../components/Spinner";
import { useState } from "react";
import SideBar from "../../components/SideBar";

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
	// Navigation and page data
	const data = useLoaderData() as Array<ProductData>;
	const { state } = useNavigation();

	// States
	const [showSideBar, setShowSideBar] = useState(false);

	const clickHandler = () => {
		setShowSideBar(true);
	};

	const productItems = data.map((data) => (
		<ProductItem clickHandler={clickHandler} key={data.id} data={data} />
	));

	return state === "loading" ? (
		<Spinner />
	) : (
		<div className={styles.container}>
			<div className={styles.products_layout}>
				<CardsContainer className={styles.products_container}>
					{productItems}
				</CardsContainer>
			</div>
			{showSideBar ? <SideBar></SideBar> : ""}
		</div>
	);
};

export default Products;
