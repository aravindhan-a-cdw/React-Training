import styles from "./styles.module.scss";
import NavItem from "../NavItem";
import { Link } from "react-router-dom";
import { HEADER_CONSTANTS } from "../../constants/ComponentConstants";

/*
	@author Aravindhan A
	@description This is the Header part of the application. This contains the navlinks and user dropdown
*/

type HeaderProps = {
	children?: any;
	className?: string;
};

const Header = (props: HeaderProps) => {
	const { className = "" } = props;

	// Render list of NavLinks
	const categories = HEADER_CONSTANTS.CATEGORIES.map((category, index) => (
		<NavItem key={index}>{category}</NavItem>
	));

	return (
		<nav className={`${styles.navbar} ${className}`}>
			<div className={styles.navContainer}>
				<span className={styles.logo}>
					<Link to="/">{HEADER_CONSTANTS.APP_NAME}</Link>
				</span>
				<ul>{categories}</ul>
				<span className={styles.user}>
					{HEADER_CONSTANTS.USER_NAME}
					<span className={styles.dropdown}></span>
				</span>
			</div>
		</nav>
	);
};

export default Header;
