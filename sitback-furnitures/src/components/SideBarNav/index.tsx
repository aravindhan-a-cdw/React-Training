import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This is the navigation bar of the sidebar which helps to switch between cart and wishlist
*/

type SideBarNavProps = {
	section: string;
	changeHandler: (arg1: string) => void;
};

const SideBarNav = (props: SideBarNavProps) => {
	const { section, changeHandler } = props;

	return (
		<div className={styles.sidebarNav}>
			<ul>
				<li
					onClick={() => changeHandler("cart")}
					className={section === "cart" ? styles.active : ""}
				>
					My Cart
				</li>
				<li
					onClick={() => changeHandler("wishlist")}
					className={section === "wishlist" ? styles.active : ""}
				>
					My Wishlist
				</li>
			</ul>
		</div>
	);
};

export default SideBarNav;
