import styles from "./styles.module.scss";

type ButtonProps = {
	children: any;
	className?: string;
	clickHandler?: () => void;
};

const Button = (props: ButtonProps) => {
	const { className, children, clickHandler } = props;
	return (
		<button onClick={clickHandler} className={`${styles.btn} ${className}`}>
			{children}
		</button>
	);
};

export default Button;
