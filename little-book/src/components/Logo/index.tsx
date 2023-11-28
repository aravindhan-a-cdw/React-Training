import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectDarkMode } from "../../actions/darkMode";
import React from "react";
import { HOME_CONSTANTS } from "../../constants/pageConstants";

/*
	@author Aravindhan A
	@description This component renders the logo of the application
*/

type LogoProps = {
	className?: string;
};

const Logo = React.memo((props: LogoProps) => {
	const darkMode = useSelector(selectDarkMode);

	const { className = "" } = props;
	return (
		<div
			className={`${styles.logo} ${className} ${
				darkMode ? styles.dark : ""
			}`}
		>
			<span>{HOME_CONSTANTS.LITTLE}</span> {HOME_CONSTANTS.BOOK}
		</div>
	);
});

export default Logo;
