import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the button with variants primary and secondary
*/

type ButtonProps = {
	children: React.ReactNode;
	type?: "primary" | "secondary";
	className?: string;
	clickHandler?: () => void;
};

const Button = (props: ButtonProps) => {
	const { children, type = "primary", className = "", clickHandler } = props;
	return (
		<button
			onClick={clickHandler}
			className={`${styles[type]} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
