type CartItemProps = {
	children: any;
	className: string;
};

const CartItem = (props: CartItemProps) => {
	const { className, children } = props;
	return <button className={`btn ${className}`}>{children}</button>;
};

export default CartItem;
