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
	cartHandler: (id: number, count: number) => void;
};

const CartItem = (props: CartItemProps) => {
	const { className, data, cartHandler } = props;
	return (
		<div className={`${styles.cart_item} ${className}`}>
			<img src={data.photo} alt={data.name} />
			<div className={styles.basic_info}>
				<span>{data.name}</span>
				<span>&#8377; {data.price}</span>
			</div>
			<QuantityBar
				cartHandler={cartHandler}
				productId={data.id}
				quantity={data.quantity}
			/>
		</div>
	);
};

export default CartItem;
