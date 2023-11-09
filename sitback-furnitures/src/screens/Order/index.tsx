import { useLoaderData } from "react-router-dom";
import styles from "./styles.module.scss";
import CategoriesDisplay from "../../containers/CategoriesList";
import OrderItem from "../../components/OrderItem";
import CardsContainer from "../../containers/CardsContainer";
import { useEffect, useState } from "react";
import { allProductsDataLoader } from "../../utils/dataLoader";
import { ORDER_PAGE_CONSTANTS } from "../../constants/PageConstants";

/*
	@author Aravindhan A
	@description This renders the Orders page of the application.
*/

type CategoryData = {
	id: string;
	category: string;
	photo: string;
	description: string;
};

const Order = () => {
	const data = useLoaderData() as Array<CategoryData>;

	const [allProducts, setAllProducts] = useState<Array<any>>([]);
	const [order, setOrder] = useState<Array<any>>([]);

	useEffect(() => {
		// Loading all products data and order data from localStorage
		allProductsDataLoader().then((data: any) => {
			setAllProducts(data);
		});
		const orderData = localStorage.getItem("order") || "[]";
		setOrder(JSON.parse(orderData));
	}, []);

	// Render order items
	const ordersData = order.map((orderItem) => {
		const productData = allProducts.find(
			(data) => data.id === orderItem.id
		);
		return {
			...productData,
			quantity: orderItem.count,
		};
	});
	const orderItems = ordersData.map((data) => (
		<OrderItem key={data.id} data={data} />
	));
	return (
		<>
			<div className={styles.ordersContainer}>
				<h3>{ORDER_PAGE_CONSTANTS.PAGE_TITLE}</h3>
				<p>{ORDER_PAGE_CONSTANTS.DESCRIPTION}</p>
				<CardsContainer className={styles.ordersCards}>
					{orderItems}
				</CardsContainer>
			</div>
			<CategoriesDisplay categories={data} />
		</>
	);
};

export default Order;
