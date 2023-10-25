import { useNavigation, useLoaderData } from "react-router";
import Services from "../../services/productServices";
import styles from "./styles.module.scss";
import ProductItem from "../../components/ProductItem";
import CardsContainer from "../../containers/CardsContainer";
import Spinner from "../../components/Spinner";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";

/*
	@author Aravindhan A
	@description This renders the Products page which is displays many products for users to add to cart or to wishlist and place order.
*/

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
	const [cart, setCart] = useState(() =>
		JSON.parse(localStorage.getItem("cart") || "[]")
	);
	const [wishlist, setWishlist] = useState<Array<number>>(() =>
		JSON.parse(localStorage.getItem("wishlist") || "[]")
	);
	const [showSideBar, setShowSideBar] = useState(
		cart.length !== 0 || wishlist.length !== 0
	);

	const [sidebarSection, setSidebarSection] = useState(
		cart.length !== 0 ? "cart" : wishlist.length === 0 ? "cart" : "wishlist"
	);

	const cartHandler = (id: number, count: number) => {
		setShowSideBar(true);
		setSidebarSection("cart");
		setCart((state: Array<any>) => {
			const existingIndex = state.findIndex((item) => item["id"] === id);
			if (existingIndex === -1)
				return [...state, { id: id, count: count }];
			let newState = [...state];
			newState[existingIndex]["count"] =
				newState[existingIndex]["count"] + count;
			if (newState[existingIndex]["count"] === 0) {
				newState = newState
					.slice(0, existingIndex)
					.concat(newState.slice(existingIndex + 1));
				if (newState.length === 0) {
					if (wishlist.length === 0) setShowSideBar(false);
					else setSidebarSection("wishlist");
				}
				return newState;
			}
			return newState;
		});
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(cart, "Cart");
	}, [cart]);

	useEffect(() => {
		localStorage.setItem("wishlist", JSON.stringify(wishlist));
	}, [wishlist]);

	const wishlistHandler = (id: number, remove: boolean = false) => {
		setShowSideBar(true);
		if (remove) {
			setWishlist((state: Array<number>) => {
				const index = state.findIndex(
					(wishlistItemId) => wishlistItemId === id
				);
				if (index !== -1) {
					state.splice(index, 1);
					if (state.length === 0) {
						setSidebarSection("cart");
					}
					return [...state];
				}
				return state;
			});
			setSidebarSection("cart");
		} else {
			setSidebarSection("wishlist");
			setWishlist((state: Array<number>) => {
				if (state.includes(id)) return state;
				return [...state, id];
			});
		}
	};

	const productItems = data.map((data) => (
		<ProductItem
			addToCartHandler={cartHandler}
			addToWishlistHandler={wishlistHandler}
			key={data.id}
			data={data}
		/>
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
			{showSideBar ? (
				<SideBar
					cartHandler={cartHandler}
					wishlistHandler={wishlistHandler}
					cartData={cart}
					wishlistData={wishlist}
					section={sidebarSection}
					sectionChangeHandler={setSidebarSection}
				></SideBar>
			) : (
				""
			)}
		</div>
	);
};

export default Products;
