import styles from "./styles.module.scss";
import guarantee from "../../assets/guarantee.png";
import Button from "../Button";

type ProductData = {
	description: string;
	guarantee: number;
	id: number;
	name: string;
	photo: string;
	price: number;
	rating: number;
};

type ProductItemProps = {
	data: ProductData;
	className?: string;
	addToCartHandler?: (id: number, count: number) => void;
	addToWishlistHandler?: (id: number) => void;
};

const ProductItem = (props: ProductItemProps) => {
	const {
		className = "",
		data,
		addToCartHandler,
		addToWishlistHandler,
	} = props;
	return (
		<div className={`${className} ${styles.product_item}`}>
			<img src={data.photo} alt={data.name} />
			<div className={styles.basic_info}>
				<span>{data.name}</span>
				<span>&#8377; {data.price}</span>
			</div>
			<p className={styles.product_description}>{data.description}</p>
			<div className={styles.guarantee}>
				<img
					src={guarantee}
					alt="An shield with tick denoting guaranteed"
				/>
				<span>{data.guarantee} years guarantee</span>
			</div>
			<div className={styles.buttons}>
				<Button
					type="light"
					clickHandler={() =>
						addToWishlistHandler && addToWishlistHandler(data.id)
					}
				>
					Add to Wishlist
				</Button>
				<Button
					clickHandler={() =>
						addToCartHandler && addToCartHandler(data.id, 1)
					}
				>
					Add to Cart
				</Button>
			</div>
		</div>
	);
};

export default ProductItem;
