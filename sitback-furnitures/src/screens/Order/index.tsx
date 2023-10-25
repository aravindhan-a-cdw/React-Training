import { useLoaderData } from "react-router-dom";
import styles from "./styles.module.scss";
import CategoriesDisplay from "../../components/CategoriesDisplay";
import OrderItem from "../../components/OrderItem";
import CardsContainer from "../../containers/CardsContainer";
import { useEffect, useState } from "react";
import { allProductsDataLoader } from "../../utils/dataLoader";

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

	const orders = [
		{
			id: 1,
			name: "3 Seater Yellow Sofa Set",
			description: "Hello",
			price: 1234,
			photo: "https://images.unsplash.com/photo-1577451949326-1e44d745f758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80",
			quantity: 5,
		},
		{
			id: 2,
			name: "2 Seater Sofa",
			description: "Hello",
			price: 12999,
			photo: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1895&q=80",
			quantity: 2,
		},
	];

	const ordersData = order.map((orderItem) => {
		const productData = allProducts.find(
			(data) => data.id === orderItem.id
		);
		return {
			...productData,
			quantity: orderItem.count,
		};
	});
	const orderItems = ordersData.map((data) => <OrderItem data={data} />);
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
