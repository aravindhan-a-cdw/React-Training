import styles from "./styles.module.scss";
import NavItem from "../NavItem";

type HeaderProps = {
	children?: any;
	className?: string;
};

const Header = (props: HeaderProps) => {
	const { className = "" } = props;
	return (
		<nav className={`${styles.navbar} ${className}`}>
			<div className={styles.nav_container}>
				<span className={styles.logo}>SITBACK</span>
				<ul>
					<NavItem>Couches</NavItem>
					<NavItem>Chairs</NavItem>
					<NavItem>Dining</NavItem>
				</ul>
				<span className={styles.user}>
					Nijin Vinodan
					<span className={styles.dropdown}></span>
				</span>
			</div>
		</nav>
	);
};

export default Header;
