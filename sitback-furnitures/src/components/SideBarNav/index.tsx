import styles from "./styles.module.scss";

type SideBarNavProps = {
	section: string;
	changeHandler: (arg1: string) => void;
};

const SideBarNav = (props: SideBarNavProps) => {
	const { section, changeHandler } = props;

	return (
		<div className={styles.sidebar_nav}>
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
