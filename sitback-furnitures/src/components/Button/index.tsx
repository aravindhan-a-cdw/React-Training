import { ReactNode } from "react";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This renders the button element
*/

type ButtonProps = {
	children: string | ReactNode;
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
