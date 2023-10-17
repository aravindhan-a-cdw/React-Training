import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

type NavItemProps = {
	children: string;
};

const NavItem = (props: NavItemProps) => {
	const { children } = props;

	return (
		<li className={styles.link}>
			<NavLink to={"/products/" + children.toLocaleLowerCase()}>
				{({ isActive }) => (
					<span className={isActive ? styles.active : ""}>
						{children}
					</span>
				)}
			</NavLink>
		</li>
	);
};

export default NavItem;
