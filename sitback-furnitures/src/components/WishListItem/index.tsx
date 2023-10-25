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
	cartHandler: (id: number, count: number) => void;
	wishlistHandler: (id: number, remove: boolean) => void;
};

const WishListItem = (props: WishListItemProps) => {
	const { className, data, cartHandler, wishlistHandler } = props;
	return (
		<div className={`${styles.cart_item} ${className}`}>
			<img src={data.photo} alt={data.name} />
			<div className={styles.basic_info}>
				<span>{data.name}</span>
				<span>&#8377; {data.price}</span>
			</div>
			<Button
				clickHandler={() => {
					cartHandler(data.id, 1);
					wishlistHandler(data.id, true);
				}}
				className={styles.add_to_cart_btn}
			>
				Add to Cart
			</Button>
		</div>
	);
};

export default WishListItem;
