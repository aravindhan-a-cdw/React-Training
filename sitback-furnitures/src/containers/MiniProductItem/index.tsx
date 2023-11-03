import styles from "./styles.module.scss";
import altImage from "../../assets/spacejoy.jpg";

/*
	@author Aravindhan A
	@description This component is a resuable part of both cart item and wishlist item.
	It renders the image, name and price of the product item.
*/

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
					currentTarget.src = altImage;
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
