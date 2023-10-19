import styles from "./styles.module.scss";

type QuantityBarProps = {
	quantity: number;
};

const QuantityBar = (props: QuantityBarProps) => {
	const { quantity } = props;

	return (
		<div className={styles.quantity_container}>
			<span className={styles.btn}>-</span>
			<span>{quantity}</span>
			<span className={styles.btn}>+</span>
		</div>
	);
};

export default QuantityBar;
