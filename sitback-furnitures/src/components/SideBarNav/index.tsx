import styles from "./styles.module.scss";
import CartItem from "../CartItem";
import CardsContainer from "../../containers/CardsContainer";
import WishListItem from "../WishListItem";
import PlaceOrder from "../PlaceOrder";
import { useState } from "react";

type SideBarNavProps = {
	section: string;
	changeHandler: (arg1: string) => void;
};

const SideBarNav = (props: SideBarNavProps) => {
	const { section, changeHandler } = props;
	// const [section, changeHandler] = useState("cart");

	return (
		<div className={styles.sidebar_nav}>
			<ul>
				<li
					onClick={() => changeHandler("cart")}
					className={section === "cart" ? styles.active : ""}
				>
					My Cart
				</li>
				<li
					onClick={() => changeHandler("wishlist")}
					className={section === "wishlist" ? styles.active : ""}
				>
					My Wishlist
				</li>
			</ul>
		</div>
	);
};

export default SideBarNav;
