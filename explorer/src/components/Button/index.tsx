import styles from "./styles.module.css";

type ButtonProps = {
	children: string;
	className?: string;
	onClick?: (event: any) => void;
};

function Button(props: ButtonProps) {
	const { children, className, onClick } = props;
	return (
		<button onClick={onClick} className={`${styles.btn} ${className}`}>
			{children}
		</button>
	);
}

export default Button;
