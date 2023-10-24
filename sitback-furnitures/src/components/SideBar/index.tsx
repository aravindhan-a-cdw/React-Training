import { useState } from "react";
import styles from "./styles.module.scss";
import SideBarNav from "../SideBarNav";
import CardsContainer from "../../containers/CardsContainer";
import PlaceOrder from "../PlaceOrder";
import CartItem from "../CartItem";
import WishListItem from "../WishListItem";

type SideBarProps = {
	cartData: Array<{ number: number }>;
	wishlistData: Array<number>;
	section: string;
	sectionChangeHandler: (arg: string) => void;
};

const SideBar = (props: SideBarProps) => {
	const { section, sectionChangeHandler } = props;

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
			return <CartItem data={data} key={data.id}></CartItem>;
		} else return <WishListItem data={data} key={data.id}></WishListItem>;
	});

	return (
		<div className={styles.sidebar}>
			<SideBarNav
				section={section}
				changeHandler={(section: string) =>
					sectionChangeHandler(section)
				}
			/>
			<CardsContainer className={styles.cards_container}>
				{cartItems}
			</CardsContainer>

			{section === "cart" ? <PlaceOrder /> : <></>}
		</div>
	);
};

export default SideBar;
