import styles from "./styles.module.css";

type ButtonProps = {
	children: string;
	padding?: string;
	className?: string;
};

function Button(props: ButtonProps) {
	const { children, className } = props;
	return <button className={`${styles.btn} ${className}`}>{children}</button>;
}

export default Button;
