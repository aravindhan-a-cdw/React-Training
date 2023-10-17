type ButtonProps = {
	children: any;
	className: string;
};

const Button = (props: ButtonProps) => {
	const { className, children } = props;
	return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
