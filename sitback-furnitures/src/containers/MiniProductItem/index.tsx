import styles from "./styles.module.scss";

type MiniProductItemProps = {
	productData: {
		id: number;
		name: string;
		price: number;
		photo: string;
	};
	className?: string;
	children?: any;
};

const MiniProductItem = (props: MiniProductItemProps) => {
	const { className, children, productData } = props;
	return (
		<div className={`${styles.product_item} ${className}`}>
			<img
				src={productData.photo}
				alt={productData.name}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = "/spacejoy.jpg";
				}}
			/>
			<div className={styles.basic_info}>
				<span>{productData.name}</span>
				<span className={styles.price}>
					&#8377; {productData.price}
				</span>
			</div>
			{children}
		</div>
	);
};

export default MiniProductItem;
