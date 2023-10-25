import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component is used to modify the quantity of product in cart
*/

type QuantityBarProps = {
	quantity: number;
	productId: number;
	cartHandler: (id: number, count: number) => void;
};

const QuantityBar = (props: QuantityBarProps) => {
	const { quantity, productId, cartHandler } = props;

	return (
		<div className={styles.quantity_container}>
			<span
				onClick={() => cartHandler(productId, -1)}
				className={styles.btn}
			>
				-
			</span>
			<span>{quantity}</span>
			<span
				onClick={() => cartHandler(productId, 1)}
				className={styles.btn}
			>
				+
			</span>
		</div>
	);
};

export default QuantityBar;
