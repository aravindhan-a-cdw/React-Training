import styles from "./styles.module.css";

type ButtonProps = {
	children: string;
	padding?: string;
};

function Button(props: ButtonProps) {
	const { children, padding } = props;
	return (
		<button style={{ padding }} className={styles.btn}>
			{children}
		</button>
	);
}

export default Button;
