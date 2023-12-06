import React from "react";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the button with variants primary and secondary
*/

type ButtonProps = {
	children: React.ReactNode;
	type?: "primary" | "secondary";
	className?: string;
	clickHandler?: () => void;
	disabled?: boolean;
};

/**
 * This is a memoized functional component which renders the button with variants primary and secondary.
 *
 * @param {ButtonProps} props The properties of the button to be passed to the component.
 */
const Button = React.memo((props: ButtonProps) => {
	const {
		children,
		type = "primary",
		className = "",
		clickHandler,
		disabled,
	} = props;
	return (
		<button
			disabled={disabled}
			onClick={clickHandler}
			className={`${styles[type]} ${className}`}
		>
			{children}
		</button>
	);
});

export default Button;
