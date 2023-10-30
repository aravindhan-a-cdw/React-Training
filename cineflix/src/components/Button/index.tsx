import styles from "./styles.module.scss";

type ButtonProps = {
	children: string;
	className?: string;
};

const Button = (props: ButtonProps) => {
	const { children, className = "" } = props;
	return (
		<button className={`${styles.button} ${className}`}>{children}</button>
	);
};

export default Button;
