import styles from "./styles.module.scss";
import { FOOTER_CONSTANTS } from "../../constants/ComponentConstants";

/*
	@author Aravindhan A
	@description This is the footer part of the application
*/

type HeaderProps = {
	children?: any;
	className?: string;
};

const Footer = (props: HeaderProps) => {
	const { className } = props;
	return (
		<footer className={`${styles.footer} ${className}`}>
			{FOOTER_CONSTANTS.COPYRIGHT}
		</footer>
	);
};

export default Footer;
