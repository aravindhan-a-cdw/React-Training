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
	cartHandler: (id: number, count: number) => void;
	wishlistHandler: (id: number, remove: boolean) => void;
};

const SideBar = (props: SideBarProps) => {
	const {
		section,
		sectionChangeHandler,
		cartData,
		wishlistData,
		cartHandler,
		wishlistHandler,
	} = props;
	const [allProducts, setAllProducts] = useState<Array<any>>([]);

	useEffect(() => {
		allProductsDataLoader().then((data: any) => {
			console.log("data", data);
			setAllProducts(data);
		});
	}, []);

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

	const cardItems = (() => {
		if (section === "cart") {
			return cartProducts.map((data) => (
				<CartItem
					cartHandler={cartHandler}
					data={data}
					key={data.id}
				></CartItem>
			));
		} else {
			return wishlistProducts.map((data) => (
				<WishListItem
					cartHandler={cartHandler}
					wishlistHandler={wishlistHandler}
					data={data}
					key={data.id}
				></WishListItem>
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
