import Button from "../Button";
import styles from "./styles.module.scss";

type WishListItemProps = {
	data: {
		id: number;
		name: string;
		price: number;
		photo: string;
	};
	className?: string;
};

const WishListItem = (props: WishListItemProps) => {
	const { className, data } = props;
	return (
		<div className={`${styles.cart_item} ${className}`}>
			<img src={data.photo} alt={data.name} />
			<div className={styles.basic_info}>
				<span>{data.name}</span>
				<span>&#8377; {data.price}</span>
			</div>
			<Button className={styles.add_to_cart_btn}>Add to Cart</Button>
		</div>
	);
};

export default WishListItem;
