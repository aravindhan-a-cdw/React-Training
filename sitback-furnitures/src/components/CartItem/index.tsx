import MiniProductItem from "../../containers/MiniProductItem";
import QuantityBar from "../Quantity";

/*
	@author Aravindhan A
	@description This component represents a single item in cart which displays the product image and its data.
*/

type CartItemProps = {
	data: {
		id: number;
		name: string;
		price: number;
		quantity: number;
		photo: string;
	};
	className?: string;
	cartHandler: (id: number, count: number) => void;
};

const CartItem = (props: CartItemProps) => {
	const { className = "", data, cartHandler } = props;
	return (
		<MiniProductItem productData={data} className={className}>
			<QuantityBar
				cartHandler={cartHandler}
				productId={data.id}
				quantity={data.quantity}
			/>
		</MiniProductItem>
	);
};

export default CartItem;
