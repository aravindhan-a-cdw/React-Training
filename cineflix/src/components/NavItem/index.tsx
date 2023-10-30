import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

type NavItemProps = {
	children: ReactNode;
	to: string;
	className?: string;
};

const NavItem = (props: NavItemProps) => {
	const { children, className = "", to } = props;
	return (
		<li className={`${styles.nav_item} ${className}`}>
			<NavLink to={to}>
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
