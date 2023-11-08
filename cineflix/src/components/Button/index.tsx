import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the button with gradient background
*/

type ButtonProps = {
	children: string;
	className?: string;
	onClick?: () => void;
};

const Button = (props: ButtonProps) => {
	const { children, className = "", onClick = () => {} } = props;
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
