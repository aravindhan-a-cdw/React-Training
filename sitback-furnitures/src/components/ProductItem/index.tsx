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

	console.log(
		Number(data.price).toLocaleString("en-IN", {
			maximumFractionDigits: 2,
			style: "currency",
			currency: "INR",
		})
	);
	return (
		<div className={`${className} ${styles.product_item}`}>
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
			<p className={styles.product_description}>{data.description}</p>
			<div className={styles.guarantee}>
				<img
					src={guarantee}
					alt="An shield with tick denoting guaranteed"
				/>
				<span>
					{data.guarantee} year{data.guarantee > 1 ? "s" : ""}{" "}
					guarantee
				</span>
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
