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
			<img
				src={data.photo}
				alt={data.name}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = "/spacejoy.jpg";
				}}
			/>
			<div className={styles.basic_info}>
				<span>{data.name}</span>
				<span>
					&#8377;{" "}
					{Number(data.price).toLocaleString("en-IN", {
						maximumFractionDigits: 2,
						currency: "INR",
					})}
				</span>
			</div>
			<p className={styles.quantity}>Quantity : {data.quantity}</p>
			<p className={styles.product_description}>{data.description}</p>
		</div>
	);
};

export default OrderItem;
