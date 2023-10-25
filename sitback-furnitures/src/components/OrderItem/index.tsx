import styles from "./styles.module.scss";

type OrderData = {
	description: string;
	id: number;
	name: string;
	photo: string;
	price: number;
	quantity: number;
};

type OrderItemProps = {
	data: OrderData;
	className?: string;
};

const OrderItem = (props: OrderItemProps) => {
	const { className = "", data } = props;
	return (
		<div className={`${className} ${styles.order_item}`}>
			<img src={data.photo} alt={data.name} />
			<div className={styles.basic_info}>
				<span>{data.name}</span>
				<span>&#8377; {data.price}</span>
			</div>
			<p className={styles.quantity}>Quantity: {data.quantity}</p>
			<p className={styles.product_description}>{data.description}</p>
		</div>
	);
};

export default OrderItem;
