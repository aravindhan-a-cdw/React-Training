import styles from "./styles.module.scss";

type ButtonProps = {
	children: any;
	type?: "dark" | "light";
	className?: string;
	clickHandler?: () => void;
};

const Button = (props: ButtonProps) => {
	const { className = "", children, clickHandler, type = "dark" } = props;
	return (
		<button
			onClick={clickHandler}
			className={`${styles.btn} ${className} ${styles[type]}`}
		>
			{children}
		</button>
	);
};

export default Button;
