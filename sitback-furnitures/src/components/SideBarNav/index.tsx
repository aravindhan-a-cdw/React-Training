import { useState } from "react";
import styles from "./styles.module.scss";
import CartItem from "../CartItem";
import CardsContainer from "../../containers/CardsContainer";
import WishListItem from "../WishListItem";

const SideBarNav = () => {
	const [section, setSection] = useState("cart");
	const cartData = [
		{
			id: 1,
			name: "3 Seater Yellow Sofa Set",
			price: 1234,
			photo: "https://images.unsplash.com/photo-1577451949326-1e44d745f758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80",
			quantity: 5,
		},
		{
			id: 2,
			name: "2 Seater Sofa",
			price: 12999,
			photo: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1895&q=80",
			quantity: 2,
		},
	];

	const cartItems = cartData.map((data) => {
		if (section === "cart") {
			return <CartItem data={data}></CartItem>;
		} else return <WishListItem data={data}></WishListItem>;
	});

	return (
		<div className={styles.sidebar_nav}>
			<ul>
				<li
					onClick={() => setSection("cart")}
					className={section === "cart" ? styles.active : ""}
				>
					My Cart
				</li>
				<li
					onClick={() => setSection("wishlist")}
					className={section === "wishlist" ? styles.active : ""}
				>
					My Wishlist
				</li>
			</ul>

			<CardsContainer className={styles.cards_container}>
				{cartItems}
			</CardsContainer>
		</div>
	);
};

export default SideBarNav;
