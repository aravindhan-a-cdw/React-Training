import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./style.module.scss";

/*
	@author Aravindhan A
	@description This component renders the badge to place order in the products page side bar.
*/

type PlaceOrderProps = {
	cartItems: Array<any>;
};

const PlaceOrder = (props: PlaceOrderProps) => {
	const { cartItems } = props;
	const navigate = useNavigate();
	const total = cartItems.reduce((prevValue, cartItem, idx) => {
		console.log(cartItem, prevValue, "value");
		return prevValue + cartItem.price * cartItem.quantity;
	}, 0);

	const placeOrderHandler = () => {
		const cartData = localStorage.getItem("cart") || "[]";
		localStorage.setItem("order", cartData);
		localStorage.setItem("cart", "[]");
		navigate("/orders");
	};

	return (
		<div className={styles.place_order_tag}>
			<div className={styles.order_total}>
				<span className={styles.total_amount}>Total Amount</span>
				<span>
					&#8377;{" "}
					{Number(total).toLocaleString("en-IN", {
						maximumFractionDigits: 2,
						currency: "INR",
					})}
				</span>
			</div>
			<Button clickHandler={placeOrderHandler}>Place Order</Button>
		</div>
	);
};

export default PlaceOrder;
