import styles from "./styles.module.scss";
import altImage from "../../assets/spacejoy.jpg";

/*
	@author Aravindhan A
	@description This is a component which is displayed in the orders page. 
	This displays the image, quantity and description of order item
*/

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
		<div className={`${className} ${styles.orderItem}`}>
			<img
				src={data.photo}
				alt={data.name}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = altImage;
				}}
			/>
			<div className={styles.basicInfo}>
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
			<p className={styles.productDescription}>{data.description}</p>
		</div>
	);
};

export default OrderItem;
