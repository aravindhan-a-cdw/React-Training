import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the button with variants primary and secondary
*/

type ButtonProps = {
	children: React.ReactNode;
	type?: "primary" | "secondary";
};

const Button = (props: ButtonProps) => {
	const { children, type = "primary" } = props;
	return <button className={styles[type]}>{children}</button>;
};

export default Button;
