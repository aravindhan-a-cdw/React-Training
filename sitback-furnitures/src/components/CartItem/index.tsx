import QuantityBar from "../Quantity";
import styles from "./styles.module.scss";

type CartItemProps = {
	data: {
		id: number;
		name: string;
		price: number;
		quantity: number;
		photo: string;
	};
	className?: string;
};

const CartItem = (props: CartItemProps) => {
	const { className, data } = props;
	return (
		<div className={`${styles.cart_item} ${className}`}>
			<img src={data.photo} alt={data.name} />
			<div className={styles.basic_info}>
				<span>{data.name}</span>
				<span>&#8377; {data.price}</span>
			</div>
			<QuantityBar quantity={data.quantity} />
		</div>
	);
};

export default CartItem;
