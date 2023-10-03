import styles from "./style.module.css";

type MenuProp = {
	children: string;
	selected?: boolean;
	onSelect: () => void;
};

function MenuItem(props: MenuProp) {
	const { children, selected = false, onSelect } = props;
	return (
		<span
			onClick={onSelect}
			className={`${styles.menu_item} ${
				selected ? styles.selected_item : ""
			}`}
		>
			{children}
		</span>
	);
}

export default MenuItem;
