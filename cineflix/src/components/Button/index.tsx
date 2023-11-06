import styles from "./styles.module.scss";

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
