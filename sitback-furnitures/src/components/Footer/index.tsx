import styles from "./styles.module.scss";
import { FOOTER_CONSTANTS } from "../../constants/ComponentConstants";

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
