type ButtonProps = {
	children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
	const { children } = props;
	return <button>{children}</button>;
};

export default Button;
