import MiniProductItem from "../../containers/MiniProductItem";
import Button from "../Button";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This is a component that represents a single wishlist item in the sidebar.
*/

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
	const { className = "", data, cartHandler, wishlistHandler } = props;
	return (
		<MiniProductItem productData={data} className={className}>
			<Button
				clickHandler={() => {
					cartHandler(data.id, 1);
					wishlistHandler(data.id, true);
				}}
				className={styles.addToCartBtn}
			>
				Add to Cart
			</Button>
		</MiniProductItem>
	);
};

export default WishListItem;
