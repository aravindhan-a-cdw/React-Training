import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./style.module.scss";

const PlaceOrder = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.place_order_tag}>
			<div className={styles.order_total}>
				<span className={styles.total_amount}>Total Amount</span>
				<span>&#8377; {123456}</span>
			</div>
			<Button clickHandler={() => navigate("/orders")}>
				Place Order
			</Button>
		</div>
	);
};

export default PlaceOrder;
