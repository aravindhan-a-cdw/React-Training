import { useNavigation, useLoaderData } from "react-router";
import Services from "../../services/Services";
import styles from "./styles.module.scss";
import ProductItem from "../../components/ProductItem";
import CardsContainer from "../../containers/CardsContainer";
import Spinner from "../../components/Spinner";
import { useEffect, useState } from "react";
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
	const [cart, setCart] = useState(() =>
		JSON.parse(localStorage.getItem("cart") || "[]")
	);
	const [wishlist, setWishlist] = useState<Array<number>>(() =>
		JSON.parse(localStorage.getItem("wishlist") || "[]")
	);

	const [sidebarSection, setSidebarSection] = useState("cart");

	const cartHandler = (id: number, count: number) => {
		setShowSideBar(true);
		setSidebarSection("cart");
		setCart((state: Array<any>) => {
			console.log(state, "state");
			const existingIndex = state.findIndex(
				(item) => item[id] !== undefined
			);
			console.log(existingIndex, "existingIndex");
			if (existingIndex === -1) return [...state, { [id]: count }];
			const newState = [...state];
			newState[existingIndex][id] += count;
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

	const wishlistHandler = (id: number) => {
		setShowSideBar(true);
		setSidebarSection("wishlist");
		setWishlist((state: Array<number>) => {
			if (state.includes(id)) return state;
			return [...state, id];
		});
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
