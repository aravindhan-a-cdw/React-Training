import styles from "./styles.module.scss";
import SideBarNav from "../SideBarNav";
import CardsContainer from "../../containers/CardsContainer";
import PlaceOrder from "../PlaceOrder";
import CartItem from "../CartItem";
import WishListItem from "../WishListItem";
import { allProductsDataLoader } from "../../utils/dataLoader";
import { useEffect, useState } from "react";

type SideBarProps = {
	cartData: Array<{ [key: string]: number }>;
	wishlistData: Array<number>;
	section: string;
	sectionChangeHandler: (arg: string) => void;
};

const SideBar = (props: SideBarProps) => {
	const { section, sectionChangeHandler, cartData, wishlistData } = props;
	const [allProducts, setAllProducts] = useState<Array<any>>([]);

	console.log("allProducts", allProducts);

	useEffect(() => {
		allProductsDataLoader().then((data: any) => {
			console.log("data", data);
			setAllProducts(data);
		});
	}, []);

	// const cartData = [
	// 	{
	// 		id: 1,
	// 		name: "3 Seater Yellow Sofa Set",
	// 		price: 1234,
	// 		photo: "https://images.unsplash.com/photo-1577451949326-1e44d745f758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80",
	// 		quantity: 5,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "2 Seater Sofa",
	// 		price: 12999,
	// 		photo: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1895&q=80",
	// 		quantity: 2,
	// 	},
	// ];

	const cartProducts = cartData.map((cartItem) => {
		const productData = allProducts.find((data) => data.id === cartItem.id);
		return {
			...productData,
			quantity: cartItem.count,
		};
	});

	const wishlistProducts = wishlistData.map((wishlistItem) => {
		const productData = allProducts.find(
			(data) => data.id === wishlistItem
		);
		return {
			...productData,
		};
	});
	console.log(cartProducts, "CartProducts");
	// const cardItems: any = [];
	const cardItems = (() => {
		if (section === "cart") {
			return cartProducts.map((data) => (
				<CartItem data={data} key={data.id}></CartItem>
			));
		} else {
			return wishlistProducts.map((data) => (
				<WishListItem data={data} key={data.id}></WishListItem>
			));
		}
	})();

	return (
		<div className={styles.sidebar}>
			<SideBarNav
				section={section}
				changeHandler={(section: string) =>
					sectionChangeHandler(section)
				}
			/>
			{allProducts.length !== 0 ? (
				<>
					<CardsContainer className={styles.cards_container}>
						{cardItems.length === 0
							? "No items have been added!"
							: cardItems}
					</CardsContainer>
					{section === "cart" ? (
						<PlaceOrder cartItems={cartProducts} />
					) : (
						<></>
					)}
				</>
			) : (
				<p>Loading products...</p>
			)}
		</div>
	);
};

export default SideBar;
