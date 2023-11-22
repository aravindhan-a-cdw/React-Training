import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectDarkMode } from "../../actions/darkMode";

/*
	@author Aravindhan A
	@description This component renders the logo of the application
*/

type LogoProps = {
	className?: string;
};

const Logo = (props: LogoProps) => {
	const darkMode = useSelector(selectDarkMode);

	const { className = "" } = props;
	return (
		<div
			className={`${styles.logo} ${className} ${
				darkMode ? styles.dark : ""
			}`}
		>
			<span>Little</span> Book
		</div>
	);
};

export default Logo;
