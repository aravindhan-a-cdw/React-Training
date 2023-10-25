import { useLoaderData } from "react-router-dom";
import styles from "./styles.module.scss";
import CategoriesDisplay from "../../components/CategoriesList";
import OrderItem from "../../components/OrderItem";
import CardsContainer from "../../containers/CardsContainer";
import { useEffect, useState } from "react";
import { allProductsDataLoader } from "../../utils/dataLoader";

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
		allProductsDataLoader().then((data: any) => {
			setAllProducts(data);
		});
		const orderData = localStorage.getItem("order") || "[]";
		setOrder(JSON.parse(orderData));
	}, []);

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
			<div className={styles.orders_container}>
				<h3>Order Confirmation</h3>
				<p>
					Thank you for shopping with us. The items will be delivered
					within 7 days.
				</p>
				<CardsContainer className={styles.orders_cards}>
					{orderItems}
				</CardsContainer>
			</div>
			<CategoriesDisplay categories={data} />
		</>
	);
};

export default Order;
